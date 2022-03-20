import { ref, computed } from 'vue'

export const collapsed = ref(true)
export const minimal = ref(false)

export function toggleTvAppBar(): boolean {
    return (collapsed.value = !collapsed.value)
}

export function toggleTvAppBarMinimal(): boolean {
    return (minimal.value = !minimal.value)
}

/* TODO: Next major feature may utilize
export const DEFAULT_HEIGHT_TABLET_DESKTOP = 64
export const DEFAULT_PADDING_LEFT_RIGHT_DESKTOP = 24 // Padding on both left and right of screen
export const DEFAULT_PADDING_LEFT_CONTENT_DESKTOP = 80 // Padding from left to start of content
export const DEFAULT_HEIGHT_WITH_TOUCH_TARGET_DESKTOP = 40 // Invisible touchable border included in height
export const DENSE_HEIGHT_DESKTOP = 48
export const DENSE_PADDING_LEFT_RIGHT_DESKTOP = 24 // Padding on both left and right of screen
export const DENSE_PADDING_LEFT_CONTENT_DESKTOP = 80 // Padding from left to start of content
export const DENSE_HEIGHT_WITH_TOUCH_TARGET_DESKTOP = 40 // Invisible touchable border included in height
export const DENSE_PROMINENT_HEIGHT_DESKTOP = 96
export const DENSE_PROMINENT_PADDING_LEFT_RIGHT_DESKTOP = 24 // Padding on both left and right of screen
export const DENSE_PROMINENT_PADDING_LEFT_CONTENT_DESKTOP = 80 // Padding from left to start of content
export const DENSE_PROMINENT_HEIGHT_WITH_TOUCH_TARGET_DESKTOP = 40 // Invisible touchable border included in height
*/

export const TVAPPBAR_HEIGHT = 48
export const TVAPPBAR_HEIGHT_EXPANDED = 96
export const TVAPPBAR_WIDTH_PERCENT = '100%'
export const TVAPPBAR_WIDTH_PERCENT_MINIMAL = '15%'

export const tvAppBarHeight = computed(
    () => `${collapsed.value ? TVAPPBAR_HEIGHT : TVAPPBAR_HEIGHT_EXPANDED }px`
)

export const tvAppBarWidth = computed(
    () => `${minimal.value ? TVAPPBAR_WIDTH_PERCENT_MINIMAL : TVAPPBAR_WIDTH_PERCENT }`
)