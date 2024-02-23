import { Request, Response } from 'express'
import { processedImageBuffer } from '../services/imageService'

export const resizeImage = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const imageName: string = req.query.imageName as string;
    const resizeWidth: string = req.query.resizeWidth as string;
    const resizeHeight: string = req.query.resizeHeight as string;

    const numericResizeWidth: number = parseFloat(resizeWidth);
    const numericResizeHeight: number = parseFloat(resizeHeight);

    if (
      !imageName ||
      !resizeWidth ||
      !resizeHeight
    ) {
      res
        .status(400)
        .send(
          'image name and resize width and resize height are required fields',
        )
    }
    else if (
      isNaN(numericResizeWidth) ||
      isNaN(numericResizeHeight)||
      Number(resizeWidth) <= 0 ||
      Number(resizeHeight) <= 0
    ) {
      res
        .status(400)
        .send(
          'resize width or resize height are invalid',
        )
    } else {
      const processedImage = await processedImageBuffer(
        imageName as string,
        Number(resizeWidth),
        Number(resizeHeight),
      )

      // Send the processed image as a response
      res.set('Content-Type', 'image/jpeg')
      res.status(200).send(processedImage)
    }
  } catch (error: any) {
    console.error('Error processing image:', error.message)
    res.status(500).send(error.message)
  }
}
