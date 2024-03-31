'use server'

export const fetchCommunityPostContent = async () => {
  try {
    const response = await fetch(
      `https://yt.lemnoslife.com/channels?part=community&id=UC_baaXG7DrT5_eC6lvIqPug`,
      {
         next: { revalidate: 3600}
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await response.json()

    return data

  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
