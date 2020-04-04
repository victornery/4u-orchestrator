import { create } from 'axios'

const API_BASE = create({
  baseURL: process.env.API_URL
})

export const API = {
  BASE: API_BASE,
  LOGIN: API_BASE.get('/auth/local'),
  CAMPAIGN: {
    GET: API_BASE.get('/campaigns'),
    POST: API_BASE.post('/campaigns'),
  }
}