import * as fs from 'fs'
import * as path from 'path'

const orgImageFolder = 'public/images/original'

export const fileExists = (imageName: string): boolean => {
  try {
    const imageFilePath = path.join(orgImageFolder, imageName)
    fs.accessSync(imageFilePath, fs.constants.F_OK)
    return true
  } catch (error) {
    return false
  }
}

export const getImageFilePath = (imageName: string): string => {
  const imageFilePath = path.join(orgImageFolder, imageName)
  return imageFilePath
}
