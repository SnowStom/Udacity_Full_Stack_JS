import * as express from 'express'
import imageRoute from './routes/imageRoute'

const app = express()
app.use('/api/v1', imageRoute)
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export default app
