import express from 'express'
import { maquiagemRouter } from './router/maquiagem.Routers.js'
const app = express()
const port = 3000

app.use(express.json())

app.use("/maquiagem", maquiagemRouter)

app.listen(port, () => {
    console.log(`app rodando em http://localhost:3000`);

})