"use client";
import { Fragment, useEffect, useState } from "react";
import {
  type NetworkState,
  useNetworkStatus,
} from "#/src/ui/cuicui/hooks/use-network-status/hook/use-network-status";

export default function PreviewUseNetworkStatus() {
  const [isMounted, setIsMounted] = useState(false);

  // This is a workaround to make it work in server side
  // Another way is to use typeof window !== "undefined"...
  // This can be a future hook
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <section>
      <h3 className="font-medium text-xl text-neutral-500 mb-5">
        useNetworkState
      </h3>
      {isMounted && <NetworkInformations />}
    </section>
  );
}

const NetworkInformations = () => {
  const network: NetworkState = useNetworkStatus();
  return (
    <div className="grid grid-cols-2 gap-y-1 gap-x-4">
      {Object.keys(network).map((key) => {
        return (
          <Fragment key={key}>
            <p className="font-medium tracking-tight text-neutral-500">{key}</p>
            <p>{`${network[key as keyof NetworkState]}`}</p>
          </Fragment>
        );
      })}
    </div>
  );
};
