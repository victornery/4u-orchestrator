import { create } from 'axios'

export const API_BASE = create({
  baseURL: 'https://cors-anywhere.herokuapp.com/http://4u360.com.br:9099'
})

// export const API = {
//   BASE: API_BASE,
//   LOGIN: (data) => {
//     return API_BASE.post('/auth/local', data)
//   },
//   CAMPAIGN: {
//     GET: API_BASE.get('/campaigns'),
//     POST: (postData) => {
//       return API_BASE.post('/campaigns', postData)
//     },
//   }
// }