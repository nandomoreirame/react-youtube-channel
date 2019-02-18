import axios from 'axios'

// const isDevelopment = process.env.NODE_ENV === 'development'
const key = process.env.REACT_APP_GOOGLE_API_KEY


export const http = axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: { key }
})
