"use client";

import { useCookie } from "@/cuicui/hooks/use-cookies";

export const CookieConsentBanner = () => {
  // Provide a default object for when the cookie doesn't exist yet (It will also be used for the type definition)
  const defaultConsent = { consent: false, marketing: false };

  const [consentCookieValue, setConsentCookieValue, removeCookieConsent] =
    useCookie("consent_cookie", defaultConsent, {
      days: 365,
      sameSite: "lax",
      secure: true,
    });

  // If the user already consented, hide the banner
  if (consentCookieValue.consent === true) {
    return (
      <>
        <p>Cookie value :</p>
        <pre>{JSON.stringify(consentCookieValue, null, 2)}</pre>
        <button
          type="button"
          onClick={removeCookieConsent}
          className="mt-2 px-4 py-2 bg-neutral-400/20 dark:text-neutral-50 text-neutral-800 rounded-md hover:bg-neutral-400/40"
        >
          Reset cookie consent
        </button>
      </>
    );
  }

  return (
    <div className="bg-neutral-400/20 rounded-xl p-4">
      <p>
        We use cookies to enhance your experience. Accept marketing cookies?
      </p>
      <div className="mt-2 flex gap-2">
        <button
          type="button"
          onClick={() => {
            setConsentCookieValue({ consent: true, marketing: true });
          }}
          className="px-4 py-2 bg-neutral-400/20 dark:text-neutral-50 text-neutral-800 rounded-md hover:bg-neutral-400/40"
        >
          Accept All
        </button>
        <button
          type="button"
          onClick={() => {
            setConsentCookieValue({ consent: true, marketing: false });
          }}
          className="px-4 py-2 bg-neutral-400/20 dark:text-neutral-50 text-neutral-800 rounded-md hover:bg-neutral-400/40"
        >
          Accept Necessary Only
        </button>
        <button
          type="button"
          onClick={removeCookieConsent}
          className="px-4 py-2 bg-neutral-400/20 dark:text-neutral-50 text-neutral-800 rounded-md hover:bg-neutral-400/40"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
