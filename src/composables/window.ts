import { ref } from 'vue'
import { useEventListener } from './event'

export function useWindow() {
  const windowWidth = ref(0)
  const windowHeight = ref(0)

  useEventListener(
    window,
    'resize',
    (event: { innerWidth: number; innerHeight: number }) => {
      windowWidth.value = event.innerWidth
      windowHeight.value = event.innerHeight
    }
  )

  return { windowWidth, windowHeight }
}
