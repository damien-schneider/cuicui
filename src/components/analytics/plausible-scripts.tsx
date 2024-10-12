import Script from "next/script";

export default function plausibleScripts() {
  return (
    <>
      <Script
        defer={true}
        data-domain="cuicui.day"
        src="https://cuicui-plausible.damien-schneider.pro/js/script.hash.outbound-links.js"
      />
      <Script>
        {
          "window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }"
        }
      </Script>
    </>
  );
}
