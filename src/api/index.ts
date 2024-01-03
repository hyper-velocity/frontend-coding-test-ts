import axios from 'axios'
import { POKE_API_URL } from '../constants'

export default axios.create({
  baseURL: POKE_API_URL,
})
