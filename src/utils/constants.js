const GOOGLE_API_KEY = "AIzaSyBJ0Q2I4tiBfrGIbiD8LiwjrHz8wuJOD1E"

export const YOUTUBE_POPULAR_VIDEOS = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`
export const YOUTUBE_SEARCH_RELATED_VIDEOS = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=iphone&regionCode=IN&type=video&key=${GOOGLE_API_KEY}`

export const YOUTUBE_SEARCH_API= "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const LIVE_CHAT_OFFSET_LIMIT = 10