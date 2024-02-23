import * as path from 'path'
import { fileExists, getImageFilePath } from '../services/fileService'

describe('Test fileExists function', () => {
  it('returns false ', () => {
    const imageName = 'test.jpg'
    expect(fileExists(imageName)).toBe(false)
  })

  it('returns true', () => {
    const imageName = 'squirrel-animal_2.jpeg'
    expect(fileExists(imageName)).toBe(true)
  })
})

describe('Test getImageFilePath function', () => {
  it('returns the correct image file path', () => {
    const imageName = 'squirrel-animal_2.jpeg'
    const expectedPath = path.join('public/images/original', imageName)
    expect(getImageFilePath(imageName)).toBe(expectedPath)
  })
})
