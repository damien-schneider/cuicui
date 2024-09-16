import { BatteryIndicator } from "#/src/ui/cuicui/application-ui/battery/battery-indicator/battery-indicator";

export const PreviewBatteryIndicator = () => {
  return (
    <BatteryIndicator
      level={75}
      isCharging={true}
      chargingTime={3600}
      dischargingTime={null}
    />
  );
};
