import { onMounted, onUnmounted } from "vue";

export function useEventListener(target: { addEventListener: (arg0: any, arg1: any) => any; removeEventListener: (arg0: any, arg1: any) => any; } , event: any, callback: any) {
    onMounted(() => target.addEventListener(event, callback))
    onUnmounted(() => target.removeEventListener(event, callback))
}
