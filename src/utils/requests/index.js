import { create } from 'axios'

const jwt = localStorage.getItem('jwt');

export const API_BASE = create({
  baseURL: 'https://cors-anywhere.herokuapp.com/http://4u360.com.br:9099',
  headers: {
    Authorization: !!jwt ? `Bearer ${jwt}` : ''
  }
})
