import * as express from 'express'
import { resizeImage } from '../controllers/imageController'

const router = express.Router()

router.get('/image', resizeImage)

export default router
