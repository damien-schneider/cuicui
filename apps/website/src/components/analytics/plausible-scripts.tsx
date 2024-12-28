import { env } from "#/src/env";
import { IS_PRODUCTION } from "#/src/lib/site.const";
import Script from "next/script";

export default function PlausibleScripts() {
  if (!IS_PRODUCTION) {
    return null;
  }
  return (
    <>
      <Script
        id="plausible-main"
        defer={true}
        data-domain="cuicui.day"
        src={`https://${env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}/js/script.hash.outbound-links.js`}
      />
      <Script id="plausible-inline">
        {
          "window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }"
        }
      </Script>
    </>
  );
}
