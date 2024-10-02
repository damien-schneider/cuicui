import type { SectionType } from "#/src/lib/types/component";
import { useBatteryCategory } from "#/src/ui/cuicui/hooks/use-battery/use-battery.category";

import { useCounterCategory } from "#/src/ui/cuicui/hooks/use-counter/category.use-counter";
import { useDebounceCategory } from "#/src/ui/cuicui/hooks/use-debounce/category.use-debounce";
import { useInViewCategory } from "#/src/ui/cuicui/hooks/use-in-view/category.use-in-view";
import { useMouseCategory } from "#/src/ui/cuicui/hooks/use-mouse/category.use-mouse";
import { useNetworkCategory } from "#/src/ui/cuicui/hooks/use-network-status/category.use-network";
import { useKeyPressCategory } from "#/src/ui/cuicui/hooks/use-key-press/category.use-key-press";
import { useInputValueCategory } from "#/src/ui/cuicui/hooks/use-input-value/category.use-input-value";
import { useGeoLocationCategory } from "#/src/ui/cuicui/hooks/use-geolocation/category-use-geolocation";
import { useComponentSizeCategory } from "#/src/ui/cuicui/hooks/use-component-size/category.use-component-size";
import { useKonamiCodeCategory } from "#/src/ui/cuicui/hooks/use-konami-code/category.use-konami-code";
import { useLocalStorageCategory } from "#/src/ui/cuicui/hooks/use-local-storage/category.use-local-storage";
import { useWindowSizeCategory } from "#/src/ui/cuicui/hooks/use-window-size/category.use-window-size";
import { useWindowScrollPositionCategory } from "#/src/ui/cuicui/hooks/use-window-scroll-position/category.use-window-scroll-postion";
import { useThrottleCategory } from "#/src/ui/cuicui/hooks/use-throttle/category.use-throttle";
import { useStepCategory } from "#/src/ui/cuicui/hooks/use-step/category.use-step";
import { useSessionStorageCategory } from "#/src/ui/cuicui/hooks/use-session-storage/category.use-session-storage";
import { useOnlineStatusCategory } from "#/src/ui/cuicui/hooks/use-online-status/category.use-online-status";
import { useLocationCategory } from "#/src/ui/cuicui/hooks/use-location/category.use-location";
import { useIsomorphicLayoutEffectCategory } from "#/src/ui/cuicui/hooks/use-isomorphic-layout-effect/category.use-isomorphic-layout-effect";
import { useCopyToClipboardCategory } from "#/src/ui/cuicui/hooks/use-copy-to-clipboard/category.use-copy-to-clipboard";
import { useEventListenerCategory } from "#/src/ui/cuicui/hooks/use-event-listener/category.use-event-listener";
import { useEventCallbackCategory } from "#/src/ui/cuicui/hooks/use-event-callback/category.use-event-callback";
import { useSpeechToTextCategory } from "#/src/ui/cuicui/hooks/use-speech-to-text/category.use-speech-to-text";
import { useTextToSpeechCategory } from "#/src/ui/cuicui/hooks/use-text-to-speech/category.use-text-to-speech";
import { ToyBrickIcon } from "lucide-react";

export const hooksSection: SectionType = {
  type: "single-component",
  name: "Hooks",
  slug: "hooks",
  description: "A collection of React hooks for building modern applications.",
  icon: ToyBrickIcon,
  categoriesList: [
    useBatteryCategory,
    useComponentSizeCategory,
    useCopyToClipboardCategory,
    useCounterCategory,
    useDebounceCategory,
    useEventCallbackCategory,
    useEventListenerCategory,
    useGeoLocationCategory,
    useInViewCategory,
    useInputValueCategory,
    useIsomorphicLayoutEffectCategory,
    useKeyPressCategory,
    useKonamiCodeCategory,
    useLocalStorageCategory,
    useLocationCategory,
    useMouseCategory,
    useNetworkCategory,
    useOnlineStatusCategory,
    useSpeechToTextCategory,
    useSessionStorageCategory,
    useStepCategory,
    useTextToSpeechCategory,
    useThrottleCategory,
    useWindowScrollPositionCategory,
    useWindowSizeCategory,
  ],
};
