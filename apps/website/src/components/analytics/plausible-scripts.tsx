import { IS_PRODUCTION, PLAUSIBLE_DOMAIN } from "#/src/lib/site.const";
import Script from "next/script";

export default function PlausibleScripts() {
	if (!(IS_PRODUCTION && PLAUSIBLE_DOMAIN)) {
		return null;
	}
	return (
		<>
			<Script
				defer={true}
				data-domain="cuicui.day"
				src={`https://${PLAUSIBLE_DOMAIN}/js/script.hash.outbound-links.js`}
			/>
			<Script>
				{
					"window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }"
				}
			</Script>
		</>
	);
}
