export type Toast = {
  uuid: string | number
  message: string
  type: 'info' | 'warning' | 'error'
  timeout: number
}
