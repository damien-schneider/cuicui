import NotificationCard from "#/src/ui/cuicui/common-ui/cards/notification-card/notification-card";

export default function NotificationCardPreview() {
  return (
    <NotificationCard
      date={new Date()}
      description="Un nouveau composant a été ajouté Un nouveau composant a été ajouté Un nouveau composant a été ajouté"
      title="Cuicui"
    />
  );
}
