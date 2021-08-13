import mongoose,{Schema,Model,Document} from 'mongoose'

//para la base de datos
const schemaPhoto = new Schema({
    title:String,
    description:String,
    imagePath:String,
})
//para la aplicacion
interface IPhoto extends Document{
    title: string,
    description: string,
    imagePath: string
}
export default mongoose.model<IPhoto>('photo',schemaPhoto)