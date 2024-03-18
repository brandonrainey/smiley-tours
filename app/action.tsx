'use server'

// export const fetchCommunityPostMetadata = async () => {
//   try {
//     const response = await fetch(
//       `https://www.googleapis.com/youtube/v3/activities?key=${process.env.YOUTUBE_API_KEY}&channelId=UC_baaXG7DrT5_eC6lvIqPug&part=snippet,contentDetails&maxResults=1&fields=items(snippet(type,title,description,publishedAt,thumbnails/high/url))&eventType=community`,
//       { next: { revalidate: 86400 } }
//     )

//     if (!response.ok) {
//       throw new Error('Failed to fetch data')
//     }

//     const data = await response.json()

//     return data
//   } catch (error) {
//     console.error('Error fetching data:', error)
//   }
// }

export const fetchCommunityPostContent = async () => {
  try {
    const response = await fetch(
      `https://yt.lemnoslife.com/channels?part=community&id=UC_baaXG7DrT5_eC6lvIqPug`,
      { next: { revalidate: 86400 } }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
