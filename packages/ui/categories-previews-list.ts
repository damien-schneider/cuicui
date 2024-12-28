import other_creative_effects_preview from "./cuicui/other/creative-effects/preview";
import other_mock_ups_preview from "./cuicui/other/mock-ups/preview";
import other_patterns_preview from "./cuicui/other/patterns/preview";
import other_equalizer_preview from "./cuicui/other/equalizer/preview";
import other_qr_code_preview from "./cuicui/other/qr-code/preview";
import other_transition_wrappers_preview from "./cuicui/other/transition-wrappers/preview";
import other_cursors_preview from "./cuicui/other/cursors/preview";
import utils_catch_error_preview from "./cuicui/utils/catch-error/preview";
import utils_sleep_preview from "./cuicui/utils/sleep/preview";
import utils_cn_preview from "./cuicui/utils/cn/preview";
import marketing_ui_statistics_preview from "./cuicui/marketing-ui/statistics/preview";
import marketing_ui_footer_preview from "./cuicui/marketing-ui/footer/preview";
import marketing_ui_carousels_preview from "./cuicui/marketing-ui/carousels/preview";
import marketing_ui_testimonials_preview from "./cuicui/marketing-ui/testimonials/preview";
import marketing_ui_faq_preview from "./cuicui/marketing-ui/faq/preview";
import marketing_ui_features_preview from "./cuicui/marketing-ui/features/preview";
import marketing_ui_pricing_tables_preview from "./cuicui/marketing-ui/pricing-tables/preview";
import hooks_use_throttle_preview from "./cuicui/hooks/use-throttle/preview";
import hooks_use_auto_scroll_preview from "./cuicui/hooks/use-auto-scroll/preview";
import hooks_use_battery_preview from "./cuicui/hooks/use-battery/preview";
import hooks_use_counter_preview from "./cuicui/hooks/use-counter/preview";
import hooks_use_event_listener_preview from "./cuicui/hooks/use-event-listener/preview";
import hooks_use_speech_to_text_preview from "./cuicui/hooks/use-speech-to-text/preview";
import hooks_use_online_status_preview from "./cuicui/hooks/use-online-status/preview";
import hooks_use_session_storage_preview from "./cuicui/hooks/use-session-storage/preview";
import hooks_use_text_to_speech_preview from "./cuicui/hooks/use-text-to-speech/preview";
import hooks_use_key_press_preview from "./cuicui/hooks/use-key-press/preview";
import hooks_use_konami_code_preview from "./cuicui/hooks/use-konami-code/preview";
import hooks_use_stopwatch_preview from "./cuicui/hooks/use-stopwatch/preview";
import hooks_use_click_outside_preview from "./cuicui/hooks/use-click-outside/preview";
import hooks_use_first_visit_preview from "./cuicui/hooks/use-first-visit/preview";
import hooks_use_measure_preview from "./cuicui/hooks/use-measure/preview";
import hooks_use_isomorphic_layout_effect_preview from "./cuicui/hooks/use-isomorphic-layout-effect/preview";
import hooks_use_mouse_preview from "./cuicui/hooks/use-mouse/preview";
import hooks_use_location_preview from "./cuicui/hooks/use-location/preview";
import hooks_use_in_view_preview from "./cuicui/hooks/use-in-view/preview";
import hooks_use_debounce_preview from "./cuicui/hooks/use-debounce/preview";
import hooks_use_window_scroll_position_preview from "./cuicui/hooks/use-window-scroll-position/preview";
import hooks_use_network_status_preview from "./cuicui/hooks/use-network-status/preview";
import hooks_use_window_size_preview from "./cuicui/hooks/use-window-size/preview";
import hooks_use_input_value_preview from "./cuicui/hooks/use-input-value/preview";
import hooks_use_local_storage_preview from "./cuicui/hooks/use-local-storage/preview";
import hooks_use_step_preview from "./cuicui/hooks/use-step/preview";
import hooks_use_geolocation_preview from "./cuicui/hooks/use-geolocation/preview";
import hooks_use_copy_to_clipboard_preview from "./cuicui/hooks/use-copy-to-clipboard/preview";
import hooks_use_rerender_preview from "./cuicui/hooks/use-rerender/preview";
import hooks_use_video_preview from "./cuicui/hooks/use-video/preview";
import hooks_use_event_callback_preview from "./cuicui/hooks/use-event-callback/preview";
import common_ui_blockquotes_preview from "./cuicui/common-ui/blockquotes/preview";
import common_ui_buttons_preview from "./cuicui/common-ui/buttons/preview";
import common_ui_cards_preview from "./cuicui/common-ui/cards/preview";
import common_ui_navigation_preview from "./cuicui/common-ui/navigation/preview";
import common_ui_toggle_preview from "./cuicui/common-ui/toggle/preview";
import common_ui_checkboxes_preview from "./cuicui/common-ui/checkboxes/preview";
import common_ui_skeletons_preview from "./cuicui/common-ui/skeletons/preview";
import common_ui_avatars_preview from "./cuicui/common-ui/avatars/preview";
import common_ui_loaders_preview from "./cuicui/common-ui/loaders/preview";
import common_ui_badges_preview from "./cuicui/common-ui/badges/preview";
import common_ui_inputs_preview from "./cuicui/common-ui/inputs/preview";
import application_ui_kbd_preview from "./cuicui/application-ui/kbd/preview";
import application_ui_tree_preview from "./cuicui/application-ui/tree/preview";
import application_ui_settings_preview from "./cuicui/application-ui/settings/preview";
import application_ui_action_menu_preview from "./cuicui/application-ui/action-menu/preview";
import application_ui_static_steppers_preview from "./cuicui/application-ui/static-steppers/preview";
import application_ui_signature_preview from "./cuicui/application-ui/signature/preview";
import application_ui_search_bars_preview from "./cuicui/application-ui/search-bars/preview";
import application_ui_cookie_banner_preview from "./cuicui/application-ui/cookie-banner/preview";
import application_ui_notification_preview from "./cuicui/application-ui/notification/preview";
import application_ui_alert_preview from "./cuicui/application-ui/alert/preview";
import application_ui_code_preview from "./cuicui/application-ui/code/preview";
import application_ui_dropdown_menu_preview from "./cuicui/application-ui/dropdown-menu/preview";
import application_ui_context_menu_preview from "./cuicui/application-ui/context-menu/preview";
import application_ui_table_of_contents_preview from "./cuicui/application-ui/table-of-contents/preview";
import application_ui_theme_preview from "./cuicui/application-ui/theme/preview";
import application_ui_battery_preview from "./cuicui/application-ui/battery/preview";
import application_ui_color_picker_preview from "./cuicui/application-ui/color-picker/preview";
import application_ui_sliders_preview from "./cuicui/application-ui/sliders/preview";
import application_ui_authentication_preview from "./cuicui/application-ui/authentication/preview";

import type { JSX } from "react";

export const categoriesPreviewsList: Record<string, () => JSX.Element> = {
  "creative-effects": other_creative_effects_preview,
  "mock-ups": other_mock_ups_preview,
  patterns: other_patterns_preview,
  equalizer: other_equalizer_preview,
  "qr-code": other_qr_code_preview,
  "transition-wrappers": other_transition_wrappers_preview,
  cursors: other_cursors_preview,
  "catch-error": utils_catch_error_preview,
  sleep: utils_sleep_preview,
  cn: utils_cn_preview,
  statistics: marketing_ui_statistics_preview,
  footer: marketing_ui_footer_preview,
  carousels: marketing_ui_carousels_preview,
  testimonials: marketing_ui_testimonials_preview,
  faq: marketing_ui_faq_preview,
  features: marketing_ui_features_preview,
  "pricing-tables": marketing_ui_pricing_tables_preview,
  "use-throttle": hooks_use_throttle_preview,
  "use-auto-scroll": hooks_use_auto_scroll_preview,
  "use-battery": hooks_use_battery_preview,
  "use-counter": hooks_use_counter_preview,
  "use-event-listener": hooks_use_event_listener_preview,
  "use-speech-to-text": hooks_use_speech_to_text_preview,
  "use-online-status": hooks_use_online_status_preview,
  "use-session-storage": hooks_use_session_storage_preview,
  "use-text-to-speech": hooks_use_text_to_speech_preview,
  "use-key-press": hooks_use_key_press_preview,
  "use-konami-code": hooks_use_konami_code_preview,
  "use-stopwatch": hooks_use_stopwatch_preview,
  "use-click-outside": hooks_use_click_outside_preview,
  "use-first-visit": hooks_use_first_visit_preview,
  "use-measure": hooks_use_measure_preview,
  "use-isomorphic-layout-effect": hooks_use_isomorphic_layout_effect_preview,
  "use-mouse": hooks_use_mouse_preview,
  "use-location": hooks_use_location_preview,
  "use-in-view": hooks_use_in_view_preview,
  "use-debounce": hooks_use_debounce_preview,
  "use-window-scroll-position": hooks_use_window_scroll_position_preview,
  "use-network-status": hooks_use_network_status_preview,
  "use-window-size": hooks_use_window_size_preview,
  "use-input-value": hooks_use_input_value_preview,
  "use-local-storage": hooks_use_local_storage_preview,
  "use-step": hooks_use_step_preview,
  "use-geolocation": hooks_use_geolocation_preview,
  "use-copy-to-clipboard": hooks_use_copy_to_clipboard_preview,
  "use-rerender": hooks_use_rerender_preview,
  "use-video": hooks_use_video_preview,
  "use-event-callback": hooks_use_event_callback_preview,
  blockquotes: common_ui_blockquotes_preview,
  buttons: common_ui_buttons_preview,
  cards: common_ui_cards_preview,
  navigation: common_ui_navigation_preview,
  toggle: common_ui_toggle_preview,
  checkboxes: common_ui_checkboxes_preview,
  skeletons: common_ui_skeletons_preview,
  avatars: common_ui_avatars_preview,
  loaders: common_ui_loaders_preview,
  badges: common_ui_badges_preview,
  inputs: common_ui_inputs_preview,
  kbd: application_ui_kbd_preview,
  tree: application_ui_tree_preview,
  settings: application_ui_settings_preview,
  "action-menu": application_ui_action_menu_preview,
  "static-steppers": application_ui_static_steppers_preview,
  signature: application_ui_signature_preview,
  "search-bars": application_ui_search_bars_preview,
  "cookie-banner": application_ui_cookie_banner_preview,
  notification: application_ui_notification_preview,
  alert: application_ui_alert_preview,
  code: application_ui_code_preview,
  "dropdown-menu": application_ui_dropdown_menu_preview,
  "context-menu": application_ui_context_menu_preview,
  "table-of-contents": application_ui_table_of_contents_preview,
  theme: application_ui_theme_preview,
  battery: application_ui_battery_preview,
  "color-picker": application_ui_color_picker_preview,
  sliders: application_ui_sliders_preview,
  authentication: application_ui_authentication_preview,
};
