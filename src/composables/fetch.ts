import { ref, unref, isRef, watchEffect } from 'vue'

export function useFetch(url: string) {
  const data = ref(null)
  const error = ref(null)

  function doFetch() {
    // reset state
    data.value = null
    error.value = null

    console.log('got here')
    // unref() unwraps potential refs
    fetch(unref(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err))
  }

  if (isRef(url)) {
    // setup reactive re-fetch if input URL is a ref
    watchEffect(doFetch)
  } else {
    // fetch once avoid overhead of a watcher
    doFetch()
  }

  return { data, error }
}
