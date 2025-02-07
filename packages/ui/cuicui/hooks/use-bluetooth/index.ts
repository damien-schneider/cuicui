"use client";
//This requires @types/web-bluetooth package to be installed
import { useState, useEffect, useCallback } from "react";

interface UseBluetoothRequestDeviceOptions {
  filters?: BluetoothLEScanFilter[];
  optionalServices?: BluetoothServiceUUID[];
}

interface UseBluetoothOptions extends UseBluetoothRequestDeviceOptions {
  acceptAllDevices?: boolean;
  navigator?: Navigator;
}

export function useBluetooth(options?: UseBluetoothOptions) {
  const windowVar = typeof window !== "undefined" ? window : undefined;
  const {
    acceptAllDevices = false,
    filters = undefined,
    optionalServices = undefined,
    navigator = windowVar?.navigator,
  } = options || {};

  const [device, setDevice] = useState<BluetoothDevice | undefined>();
  const [server, setServer] = useState<BluetoothRemoteGATTServer | undefined>();
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const isSupported = Boolean(navigator && "bluetooth" in navigator);

  const reset = useCallback(() => {
    setIsConnected(false);
    setDevice(undefined);
    setServer(undefined);
  }, []);

  const connectToBluetoothGATTServer = useCallback(async () => {
    setError(null);

    if (device?.gatt) {
      try {
        const newServer = await device.gatt.connect();
        setServer(newServer);
        setIsConnected(newServer.connected);
      } catch (err) {
        setError(err);
      }
    }
  }, [device]);

  const requestDevice = async () => {
    if (!isSupported) {
      return;
    }

    setError(null);
    let effectiveAcceptAllDevices = acceptAllDevices;

    if (filters && filters.length > 0) {
      effectiveAcceptAllDevices = false;
    }

    try {
      const newDevice = await navigator?.bluetooth.requestDevice({
        acceptAllDevices: effectiveAcceptAllDevices,
        filters,
        optionalServices,
      });
      setDevice(newDevice);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    if (device) {
      connectToBluetoothGATTServer();

      // Add disconnect listener
      const handleDisconnect = () => reset();
      device.addEventListener("gattserverdisconnected", handleDisconnect);

      return () => {
        device.removeEventListener("gattserverdisconnected", handleDisconnect);
      };
    }
  }, [device, connectToBluetoothGATTServer, reset]);

  // Connect on mount if device exists
  useEffect(() => {
    if (device) {
      device.gatt?.connect();
    }
  }, [device]);

  // Disconnect on unmount
  useEffect(() => {
    return () => {
      if (device) {
        device.gatt?.disconnect();
      }
    };
  }, [device]);

  return {
    isSupported,
    isConnected,
    device,
    requestDevice,
    server,
    error,
  };
}

export interface UseBluetoothReturn {
  isSupported: boolean;
  isConnected: boolean;
  device: BluetoothDevice | undefined;
  requestDevice: () => Promise<void>;
  server: BluetoothRemoteGATTServer | undefined;
  error: unknown | null;
}
