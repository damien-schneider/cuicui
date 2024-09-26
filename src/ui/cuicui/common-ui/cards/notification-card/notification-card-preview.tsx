import NotificationCard from "#/src/ui/cuicui/common-ui/cards/notification-card/notification-card";

export default function NotificationCardPreview() {
  return (
    <NotificationCard date={new Date()} title="Cuicui">
      Cuicui is amazing, it also provides notification cards!
    </NotificationCard>
  );
}
