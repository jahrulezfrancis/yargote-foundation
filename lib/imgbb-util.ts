const IMGBB_API_KEY = "4e11de1111e545ae186dcc6a58763225"

export interface ImgBBResponse {
  data: {
    url: string
    display_url: string
    delete_url: string
  }
  success: boolean
}

export async function uploadToImgBB(file: File): Promise<string | null> {
  try {
    const formData = new FormData()
    formData.append("image", file)
    formData.append("key", IMGBB_API_KEY)

    const response = await fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: formData,
    })

    if (!response.ok) {
      console.error(" ImgBB upload failed:", response.statusText)
      return null
    }

    const data: ImgBBResponse = await response.json()

    if (data.success) {
      return data.data.url
    }

    return null
  } catch (error) {
    console.error(" Error uploading to ImgBB:", error)
    return null
  }
}

export async function uploadMultipleToImgBB(files: File[]): Promise<string[]> {
  const uploadPromises = files.map((file) => uploadToImgBB(file))
  const results = await Promise.all(uploadPromises)
  return results.filter((url): url is string => url !== null)
}
