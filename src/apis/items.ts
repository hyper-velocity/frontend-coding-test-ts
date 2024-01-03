import api from '../api'
import { PAGE_WINDOW_SIZE } from '../constants'

export default {
  getItems: (page: number) =>
    api
      .get('/item', {
        params: {
          offset: PAGE_WINDOW_SIZE * page,
          limit: PAGE_WINDOW_SIZE,
        },
      })
      .then(({ data }) => data),
  getItemDetails: (url: string) => api.get(url).then(({ data }) => data),
}
