import { TriggerOnScroll } from "@/cuicui/marketing-ui/statistics/trigger-on-scroll/trigger-on-scroll";

export default function PreviewTriggerOnScroll() {
  return (
    <div className="h-[200dvh] flex flex-col items-center justify-evenly">
      <p className="text-neutral-500">Scroll to see the number reveal</p>
      <TriggerOnScroll>{252}</TriggerOnScroll>
      <TriggerOnScroll>{5120}</TriggerOnScroll>
      <TriggerOnScroll>{12300}</TriggerOnScroll>
      <TriggerOnScroll>{14}</TriggerOnScroll>
    </div>
  );
}
