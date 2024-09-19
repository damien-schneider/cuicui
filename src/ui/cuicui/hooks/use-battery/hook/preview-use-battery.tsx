"use client";
import { BatteryIndicator } from "#/src/ui/cuicui/application-ui/battery/battery-indicator/battery-indicator";
import { ThreeDotSimpleLoader } from "#/src/ui/cuicui/common-ui/loaders/three-dot-simple-loader/three-dot-simple-loader"; // Allows to wait for the battery information to load
import { useBattery } from "#/src/ui/cuicui/hooks/use-battery/hook/use-battery";

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
      {!loading ? (
        <>
          <BatteryIndicator
            level={level ? level * 100 : null}
            isCharging={isCharging}
            chargingTime={chargingTime}
            dischargingTime={dischargingTime}
          />
          <p className="text-neutral-400 text-xs mt-6">
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
      ) : (
        <ThreeDotSimpleLoader />
      )}
    </div>
  );
};
