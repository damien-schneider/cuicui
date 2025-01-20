import ShinyText from "@/cuicui/other/text-animation/shiny-text/shiny-text";

export const ShinyTextPreview = () => {
  return (
    <ShinyText speedInMs={3000} className="w-fit">
      Just some shiny text!
    </ShinyText>
  );
};

export default ShinyTextPreview;
