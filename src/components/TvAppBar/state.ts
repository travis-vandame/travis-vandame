import { ref, computed } from 'vue'

export const mobile = ref(false)
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
export const TVAPPBAR_WIDTH = '100%'
export const TVAPPBAR_WIDTH_COLLAPSED = '200px'

export const tvAppBarHeight = computed(
    () => `${collapsed.value ? TVAPPBAR_HEIGHT : TVAPPBAR_HEIGHT_EXPANDED }px`
)

export const tvAppBarWidth = computed(
    () => `${minimal.value ? TVAPPBAR_WIDTH_COLLAPSED : TVAPPBAR_WIDTH }`
)
