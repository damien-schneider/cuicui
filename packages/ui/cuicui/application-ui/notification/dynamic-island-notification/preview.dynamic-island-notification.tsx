"use client";
import DynamicIslandNotification from "@/cuicui/application-ui/notification/dynamic-island-notification/dynamic-island-notification";
import { useState } from "react";

export const PreviewDynamicIslandNotification = () => {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <>
      <DynamicIslandNotification
        title="Cuicui has released a new version"
        showNotification={showNotification}
        closeNotification={() => setShowNotification(false)}
      >
        Cuicui has released a new version with a lot of new features and bug
        fixes. Make sure to update your app to get the best
      </DynamicIslandNotification>
      {!showNotification && (
        <button
          type="button"
          onClick={() => setShowNotification(true)}
          className="mt-4 bg-neutral-500 text-neutral-50 rounded-lg p-2"
        >
          Show notification
        </button>
      )}
    </>
  );
};
