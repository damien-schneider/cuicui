import type { SectionType } from "@/lib/types/component";
import { useBatteryCategory } from "@/cuicui/hooks/use-battery/use-battery.category";

import { ToyBrickIcon } from "lucide-react";
import { useCopyToClipboardCategory } from "@/cuicui/hooks/use-copy-to-clipboard/category.use-copy-to-clipboard";
import { useCounterCategory } from "@/cuicui/hooks/use-counter/category.use-counter";
import { useDebounceCategory } from "@/cuicui/hooks/use-debounce/category.use-debounce";
import { useEventCallbackCategory } from "@/cuicui/hooks/use-event-callback/category.use-event-callback";
import { useEventListenerCategory } from "@/cuicui/hooks/use-event-listener/category.use-event-listener";
import { useGeoLocationCategory } from "@/cuicui/hooks/use-geolocation/category-use-geolocation";
import { useInViewCategory } from "@/cuicui/hooks/use-in-view/category.use-in-view";
import { useInputValueCategory } from "@/cuicui/hooks/use-input-value/category.use-input-value";
import { useIsomorphicLayoutEffectCategory } from "@/cuicui/hooks/use-isomorphic-layout-effect/category.use-isomorphic-layout-effect";
import { useKeyPressCategory } from "@/cuicui/hooks/use-key-press/category.use-key-press";
import { useKonamiCodeCategory } from "@/cuicui/hooks/use-konami-code/category.use-konami-code";
import { useLocalStorageCategory } from "@/cuicui/hooks/use-local-storage/category.use-local-storage";
import { useLocationCategory } from "@/cuicui/hooks/use-location/category.use-location";
import { useMouseCategory } from "@/cuicui/hooks/use-mouse/category.use-mouse";
import { useNetworkCategory } from "@/cuicui/hooks/use-network-status/category.use-network";
import { useOnlineStatusCategory } from "@/cuicui/hooks/use-online-status/category.use-online-status";
import { useSessionStorageCategory } from "@/cuicui/hooks/use-session-storage/category.use-session-storage";
import { useSpeechToTextCategory } from "@/cuicui/hooks/use-speech-to-text/category.use-speech-to-text";
import { useStepCategory } from "@/cuicui/hooks/use-step/category.use-step";
import { useTextToSpeechCategory } from "@/cuicui/hooks/use-text-to-speech/category.use-text-to-speech";
import { useThrottleCategory } from "@/cuicui/hooks/use-throttle/category.use-throttle";
import { useWindowScrollPositionCategory } from "@/cuicui/hooks/use-window-scroll-position/category.use-window-scroll-postion";
import { useWindowSizeCategory } from "@/cuicui/hooks/use-window-size/category.use-window-size";
import { useVideoCategory } from "@/cuicui/hooks/use-video/category.use-video";
import { useStopwatchCategory } from "@/cuicui/hooks/use-stopwatch/category.use-stopwatch";
import { useFirstVisitCategory } from "@/cuicui/hooks/use-first-visit/category.use-first-visit";
import { useRerenderCategory } from "@/cuicui/hooks/use-rerender/component.use-rerender";
import { useMeasureCategory } from "@/cuicui/hooks/use-measure/category.use-measure";
import { useClickOutsideCategory } from "@/cuicui/hooks/use-click-outside/category.use-click-outside";
import { useAutoScrollCategory } from "@/cuicui/hooks/use-auto-scroll/category";

export const hooksSection: SectionType = {
  type: "single-component",
  name: "Hooks",
  slug: "hooks",
  description: "A collection of React hooks for building modern applications.",
  icon: ToyBrickIcon,
  categoriesList: [
    useAutoScrollCategory,
    useBatteryCategory,
    useClickOutsideCategory,
    useCopyToClipboardCategory,
    useCounterCategory,
    useDebounceCategory,
    useEventCallbackCategory,
    useEventListenerCategory,
    useFirstVisitCategory,
    useGeoLocationCategory,
    useInViewCategory,
    useInputValueCategory,
    useIsomorphicLayoutEffectCategory,
    useKeyPressCategory,
    useKonamiCodeCategory,
    useLocalStorageCategory,
    useLocationCategory,
    useMeasureCategory,
    useMouseCategory,
    useNetworkCategory,
    useRerenderCategory,
    useOnlineStatusCategory,
    useSpeechToTextCategory,
    useSessionStorageCategory,
    useStepCategory,
    useStopwatchCategory,
    useTextToSpeechCategory,
    useThrottleCategory,
    useVideoCategory,
    useWindowScrollPositionCategory,
    useWindowSizeCategory,
  ],
};
