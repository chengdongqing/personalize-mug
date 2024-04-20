import { onMounted, onUnmounted, reactive, Ref } from 'vue'

export default function useElementSize(element: Ref<HTMLElement | undefined>) {
  const size = reactive({
    width: 0,
    height: 0
  })

  function getSize() {
    if (!element.value) return

    size.width = element.value.clientWidth
    size.height = element.value.clientHeight
  }

  onMounted(() => {
    getSize()
    window.addEventListener('resize', getSize)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', getSize)
  })

  return size
}
