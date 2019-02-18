import { http } from './http'

export const searchVideos = q =>
	http.get('/search', { params: { q, part: 'snippet', maxResults: 4 } })

export const searchChannel = id =>
	http.get('/channels', { params: { id, part: 'contentDetails' } })

export const getPlaylist = playlistId =>
	http.get('/playlistItems', { params: { playlistId, part: 'snippet', maxResults: 16 } })

export default {
  searchVideos,
  searchChannel,
  getPlaylist
}
