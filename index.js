import express from "express"
const app = express()
const port = 3000

import path from 'path'
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, 'assets')))

app.get('/', function(_, res){
    res.sendFile(__dirname + '/view/index.html')
})

app.get('/listar', (_, res) => {
    res.sendFile(__dirname + '/view/listar.html')
})

app.get('/usuarios', (_, res) => {
    res.sendFile(__dirname + '/view/usuarios.html')
})


app.get('/cadastrar', (_, res) => {
  res.sendFile(__dirname + '/view/cadastrar.html')
})

app.listen(port, () => {
    console.log(`Application listening on http://localhost:${port}`)
})