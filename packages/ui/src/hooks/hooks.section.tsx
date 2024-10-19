import type { SectionType } from "@/lib/types/component";
import { useBatteryCategory } from "@/src/hooks/use-battery/use-battery.category";

import { ToyBrickIcon } from "lucide-react";
import { useCopyToClipboardCategory } from "@/src/hooks/use-copy-to-clipboard/category.use-copy-to-clipboard";
import { useCounterCategory } from "@/src/hooks/use-counter/category.use-counter";
import { useDebounceCategory } from "@/src/hooks/use-debounce/category.use-debounce";
import { useEventCallbackCategory } from "@/src/hooks/use-event-callback/category.use-event-callback";
import { useEventListenerCategory } from "@/src/hooks/use-event-listener/category.use-event-listener";
import { useGeoLocationCategory } from "@/src/hooks/use-geolocation/category-use-geolocation";
import { useInViewCategory } from "@/src/hooks/use-in-view/category.use-in-view";
import { useInputValueCategory } from "@/src/hooks/use-input-value/category.use-input-value";
import { useIsomorphicLayoutEffectCategory } from "@/src/hooks/use-isomorphic-layout-effect/category.use-isomorphic-layout-effect";
import { useKeyPressCategory } from "@/src/hooks/use-key-press/category.use-key-press";
import { useKonamiCodeCategory } from "@/src/hooks/use-konami-code/category.use-konami-code";
import { useLocalStorageCategory } from "@/src/hooks/use-local-storage/category.use-local-storage";
import { useLocationCategory } from "@/src/hooks/use-location/category.use-location";
import { useMouseCategory } from "@/src/hooks/use-mouse/category.use-mouse";
import { useNetworkCategory } from "@/src/hooks/use-network-status/category.use-network";
import { useOnlineStatusCategory } from "@/src/hooks/use-online-status/category.use-online-status";
import { useSessionStorageCategory } from "@/src/hooks/use-session-storage/category.use-session-storage";
import { useSpeechToTextCategory } from "@/src/hooks/use-speech-to-text/category.use-speech-to-text";
import { useStepCategory } from "@/src/hooks/use-step/category.use-step";
import { useTextToSpeechCategory } from "@/src/hooks/use-text-to-speech/category.use-text-to-speech";
import { useThrottleCategory } from "@/src/hooks/use-throttle/category.use-throttle";
import { useWindowScrollPositionCategory } from "@/src/hooks/use-window-scroll-position/category.use-window-scroll-postion";
import { useWindowSizeCategory } from "@/src/hooks/use-window-size/category.use-window-size";
import { useVideoCategory } from "@/src/hooks/use-video/category.use-video";
import { useStopwatchCategory } from "@/src/hooks/use-stopwatch/category.use-stopwatch";
import { useFirstVisitCategory } from "@/src/hooks/use-first-visit/category.use-first-visit";
import { useRerenderCategory } from "@/src/hooks/use-rerender/component.use-rerender";
import { useMeasureCategory } from "@/src/hooks/use-measure/category.use-measure";
import { useClickOutsideCategory } from "@/src/hooks/use-click-outside/category.use-click-outside";

export const hooksSection: SectionType = {
	type: "single-component",
	name: "Hooks",
	slug: "hooks",
	description: "A collection of React hooks for building modern applications.",
	icon: ToyBrickIcon,
	categoriesList: [
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
