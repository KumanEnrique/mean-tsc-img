import { connect } from "mongoose";

export async function startConnection(){
    await connect('mongodb://localhost/photo-galery',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false
    })
    console.log('database is connected')
}
