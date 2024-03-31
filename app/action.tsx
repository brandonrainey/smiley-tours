'use server'

import { revalidateTag } from "next/cache";

export const fetchCommunityPostContent = async () => {
  try {
    const response = await fetch(
      `https://yt.lemnoslife.com/channels?part=community&id=UC_baaXG7DrT5_eC6lvIqPug`,
      {
        next: { tags: ['post-data'] }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await response.json()

    revalidateTag('post-data')

    return data

  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
