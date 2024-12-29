"use client";
import type { ReactNode } from "react";
import { cn } from "@/cuicui/utils/cn";
import { useCookie } from "@/cuicui/hooks/use-cookies";
import { AnimatePresence, type HTMLMotionProps, motion } from "motion/react";
export function SimpleCookieBanner({
  children,
  className,
  ...props
}: {
  children?: ReactNode;
  className?: string;
} & HTMLMotionProps<"dialog">) {
  const defaultConsent = { consent: false, marketing: false };

  const [consentCookieValue, setConsentCookieValue, removeCookieConsent] =
    useCookie("consent_cookie", defaultConsent, {
      days: 365,
      sameSite: "lax",
      secure: true,
    });

  return (
    <>
      {consentCookieValue.consent === true && (
        <button
          type="button"
          onClick={() => removeCookieConsent()}
          className="mt-2 px-4 py-2 bg-neutral-400/20 dark:text-neutral-50 text-neutral-800 rounded-md hover:bg-neutral-400/40"
        >
          Reset cookie consent (by removing the cookie)
        </button>
      )}

      <AnimatePresence>
        {consentCookieValue.consent === false && (
          <motion.dialog
            initial={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            aria-describedby="cookie-banner-description"
            aria-labelledby="cookie-banner-title"
            className={cn(
              "shadow-3xl z-50 flex flex-col gap-y-4 rounded-2xl border border-neutral-100 bg-white dark:bg-neutral-950 dark:text-neutral-500 dark:border-neutral-800 p-4 text-sm text-neutral-500 md:max-w-96",
              className,
            )}
            {...props}
          >
            <p id="cookie-banner-description">{children}</p>
            <div className="flex flex-row items-center gap-x-4">
              <button
                className="text-blue-500 dark:text-neutral-50"
                type="button"
                onClick={() => {
                  setConsentCookieValue({ consent: true, marketing: true });
                }}
              >
                Accept
              </button>
              <button
                className="text-blue-500 dark:text-neutral-50"
                type="button"
                onClick={() => {
                  setConsentCookieValue({ consent: true, marketing: false });
                }}
              >
                Accept Necessary Only
              </button>
              <button className="" type="button">
                Decline
              </button>
            </div>
          </motion.dialog>
        )}
      </AnimatePresence>
    </>
  );
}

export default SimpleCookieBanner;
