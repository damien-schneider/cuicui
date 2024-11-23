import { BatteryIndicator } from "@/cuicui/application-ui/battery/battery-indicator/battery-indicator";

export const PreviewBatteryIndicator = () => {
  return (
    <BatteryIndicator
      chargingTime={3600}
      dischargingTime={null}
      isCharging={true}
      level={75}
    />
  );
};
