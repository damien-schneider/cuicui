"use client";

import { useBluetooth } from "@/cuicui/hooks/use-bluetooth";

function BluetoothComponent() {
  const { isSupported, isConnected, device, requestDevice, server, error } =
    useBluetooth({
      acceptAllDevices: true,
      optionalServices: ["battery_service"],
    });

  if (!isSupported) {
    return <div>Bluetooth is not supported</div>;
  }

  return (
    <div className="cuicui-default-style">
      <button type="button" onClick={requestDevice}>
        Connect to Bluetooth Device
      </button>
      {isConnected && <div>Connected to: {device?.name}</div>}
      {(error as JSON) && (
        <>
          <p>Error:</p>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </>
      )}
    </div>
  );
}

export default BluetoothComponent;
