"use client";
import { useState } from "react";
import NotificationCard from "#/src/ui/cuicui/common-ui/cards/notification-card/notification-card";
import { cn } from "#/src/utils/cn";
import { sleep } from "#/src/utils/sleep";

export default function PreviewSleep() {
  const [notificationMessage, setNotificationMessage] =
    useState<string>("Empty");
  const [showNotification, setShowNotification] = useState(false);

  const handleNotification = async (message: string) => {
    setNotificationMessage(message);
    setShowNotification(true);
    await sleep("3000ms");
    setShowNotification(false);
  };

  return (
    <div className="flex flex-col gap-4 w-80">
      <button
        className=" bg-neutral-400/20 px-2 py-1 rounded-lg hover:bg-neutral-400/30 "
        onClick={() =>
          handleNotification(
            "Cuicui is amazing, it also provides utils to have cleaner code !",
          )
        }
        type="button"
      >
        Notify
      </button>

      <NotificationCard
        className={cn(
          " transform-gpu transition duration-500 ease-in-out",
          showNotification
            ? "translate-y-0 opacity-100"
            : "translate-y-24 opacity-0",
        )}
        title="New notification"
      >
        {notificationMessage}
      </NotificationCard>
    </div>
  );
}
