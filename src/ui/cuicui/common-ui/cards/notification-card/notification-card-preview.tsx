import React from "react";
import NotificationCard from "#/src/ui/cuicui/common-ui/cards/notification-card/notification-card";

export default function NotificationCardPreview() {
  return (
    <NotificationCard
      date={new Date()}
      title="Cuicui"
      description="Un nouveau composant a été ajouté Un nouveau composant a été ajouté Un nouveau composant a été ajouté"
    />
  );
}
