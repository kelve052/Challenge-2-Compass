import * as express from 'express'
import * as dados from './dados-veterinaria' 
const app = express()
const port: Number = 3000

app.use(express.json())

app.get('/tutors', (req, res)=>{
    res.json(dados)
})

app.listen(port, ()=> console.log(`Server online port ${port}`))