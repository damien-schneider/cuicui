"use client";
import { BatteryIndicator } from "@/cuicui/application-ui/battery/battery-indicator/battery-indicator";

import { useBattery } from "@/cuicui/hooks/use-battery";

export const PreviewUseBattery = () => {
  const {
    isLoading: loading,
    level,
    isCharging,
    chargingTime,
    dischargingTime,
  } = useBattery();
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <BatteryIndicator
            chargingTime={chargingTime}
            dischargingTime={dischargingTime}
            isCharging={isCharging}
            level={level ? level * 100 : null}
          />
          <p className="mt-6 text-neutral-400 text-xs">
            Informations of the battery :
            <br />
            Level : {level}
            <br />
            Is charging : {String(isCharging)}
            <br />
            Charging time : {chargingTime}
            <br />
            Discharging time : {dischargingTime}
          </p>
        </>
      )}
    </div>
  );
};

export default PreviewUseBattery;
