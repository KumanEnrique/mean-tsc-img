import app from './app'
import {startConnection} from './database'

async function main(){
    startConnection()
    app.listen(app.get('port'),()=>{
    console.log(`server on http://localhost:${app.get('port')}`)
    // console.log('development')
    })
}

main()