import { Router} from 'express'
// import {IndexRoute} from '../controllers/photo.controller'
import {createPhoto,getPhotos,getPhoto,deletePhoto,updatePhoto} from '../controllers/photo.controller'
const router = Router()

import multer from '../libs/multer'

router.route('/photos')
    .get(getPhotos)
    .post(multer.single('images'),createPhoto)

router.route('/photos/:id')
    .get(getPhoto)
    .delete(deletePhoto)
    .put(updatePhoto)
export default router