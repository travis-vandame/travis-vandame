import { ref, computed } from 'vue'

export const collapsed = ref(true)
export const minimal = ref(false)
export const TvSwitchState = ref(false)

export function toggleTvAppBar(): boolean {
    return (collapsed.value = !collapsed.value)
}

export function toggleTvAppBarMinimal(): boolean {
    return (minimal.value = !minimal.value)
}

export const TVAPPBAR_HEIGHT = 48
export const TVAPPBAR_HEIGHT_EXPANDED = 96
export const TVAPPBAR_WIDTH_PERCENT = '100%'
export const TVAPPBAR_WIDTH_PERCENT_MINIMAL = '20%'

export const tvAppBarHeight = computed(
    () => `${collapsed.value ? TVAPPBAR_HEIGHT : TVAPPBAR_HEIGHT_EXPANDED }px`
)

export const tvAppBarWidth = computed(
    () => `${minimal.value ? TVAPPBAR_WIDTH_PERCENT_MINIMAL : TVAPPBAR_WIDTH_PERCENT }`
)