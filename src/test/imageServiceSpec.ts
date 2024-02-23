import { processedImageBuffer } from '../services/imageService'

describe('Test processedImageBuffer function', () => {
  it('throw an error file not exist', async () => {
    const imageName = 'test.jpg'
    const resizeWidth = 100
    const resizeHeight = 100

    expect(async () => {
      expect(async () => {
        await processedImageBuffer(imageName, resizeWidth, resizeHeight)
       }).toThrowError(`File "${imageName}" does not exist.`);      
    });
  })

  it('process image and return buffer', async () => {
    const imageName = 'squirrel-animal_3.jpeg'
    const resizeWidth = 100
    const resizeHeight = 100

    expect(async () => {
      await processedImageBuffer(
        imageName,
        resizeWidth,
        resizeHeight,
      )
     }).not.toThrowError();
  })

  it('throw an error internal server error', async () => {
    const imageName = 'squirrel-animal_3.jpeg'
    const resizeWidth = 100
    const resizeHeight = 100

    expect(async () => {
      expect(async () => {
        await processedImageBuffer(imageName, resizeWidth, resizeHeight)
       }).toThrowError('Internal Server Error');      
    });
  })
})
