import * as supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('Test api image processing responses', () => {
  it('call api failed 400', async () => {
    const response = await request.get('/api/v1/image').query({})
    expect(response.status).toBe(400)
  })

  it('call api failed 500', async () => {
    const response = await request.get('/api/v1/image').query({
      imageName: 'notexists.jpeg',
      resizeWidth: 200,
      resizeHeight: 200,
    })
    expect(response.status).toBe(500)
  })

  it('call api success', async () => {
    const response = await request.get('/api/v1/image').query({
      imageName: 'squirrel-animal_3.jpeg',
      resizeWidth: 200,
      resizeHeight: 200,
    })
    expect(response.status).toBe(200)
  })
})
