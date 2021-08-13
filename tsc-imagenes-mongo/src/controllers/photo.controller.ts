import {Request,Response} from 'express'
import path from 'path';
import fs from 'fs-extra'

import Photo from '../models/Photos'

/* export function IndexRoute(req:Request,res:Response){
    res.send('hola mundo desde un controler.ts')
} */
export async function getPhotos(req:Request,res:Response):Promise<Response>{
    const photos = await Photo.find()
    return res.json(photos)
}
export async function getPhoto(req:Request,res:Response):Promise<Response>{
    const {id} = req.params
    console.log(req.params)
    const photo = await Photo.findById(id)
    return res.json(photo)
}
export async function deletePhoto(req:Request,res:Response):Promise<Response>{
    const {id} = req.params
    const photo = await Photo.findByIdAndDelete(id)
    if(photo){
        await fs.unlink(path.resolve(photo.imagePath))
    }
    return res.json({message:"photo deleted",photo})
}
export async function updatePhoto(req:Request,res:Response):Promise<Response>{
    const {title,description} = req.body
    const {id} = req.params
    const photo = await Photo.findByIdAndUpdate(id,{title,description},{new:true})
    return res.json({
        message:'successful updated',
        photo
    })
}
export async function createPhoto(req:Request,res:Response):Promise<Response>{
    const {title,description} = req.body
    console.log(req.file)
    const newImage = { title, description, imagePath:req.file?.path }
    const photo = new Photo(newImage)
    await photo.save();
    return res.json({
        message:'photo successfully saved',
        photo
    })
}