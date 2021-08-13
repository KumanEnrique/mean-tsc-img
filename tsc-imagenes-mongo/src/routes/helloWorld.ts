import {Router,Response,Request} from 'express'
const router = Router()

router.route('/')
    .get((req:Request,res:Response)=>{
        res.send('hola mundo')
    })
export default router