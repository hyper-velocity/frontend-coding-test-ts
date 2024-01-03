import { ref } from 'vue'
import { Toast } from '../types/toasts'

export const toasts = ref([] as Toast[])

export const useToasts = () => {
  const toast = (newToast: Partial<Toast>) => {
    const timestamp = new Date().getTime()
    const {
      uuid = `${timestamp} ${Math.random()}`,
      message = '',
      type = 'info',
      timeout = 2000,
    } = newToast

    toasts.value.push({ uuid, message, type, timeout })

    setTimeout(() => {
      toasts.value = toasts.value.filter((toast) => toast.uuid !== uuid)
    }, timeout)
    return {}
  }

  return {
    toast,
  }
}
