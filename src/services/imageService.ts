import * as sharp from 'sharp'
import { getImageFilePath, fileExists } from '../services/fileService'

export const processedImageBuffer = async (
  imageName: string,
  resizeWidth: number,
  resizeHeight: number,
): Promise<Buffer> => {
  if (!fileExists(imageName)) {
    throw new Error(`File "${imageName}" does not exist.`)
  }
  try {
    const imageFilePath = getImageFilePath(imageName)

    const processedImageBuffer = await sharp(imageFilePath)
      .resize(resizeWidth, resizeHeight)
      .toFormat('jpeg', { mozjpeg: true })
      .toBuffer()

    return processedImageBuffer
  } catch (error) {
    throw new Error('Internal Server Error')
  }
}
