import * as express from 'express'
import * as dados from './dados-veterinaria'
import routes from './Routes/routes'
const app = express()
const port: Number = 3000

app.use(express.json())

app.use('/', routes)

app.listen(port, ()=> console.log(`Server online port ${port}`))