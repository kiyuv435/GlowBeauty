import { Router } from "express";
import { maquiagemService } from "../service/maquiagem.Services.js";
export const maquiagemRouter = Router()

maquiagemRouter.get('/', async (req, res) => {
    try{
        const maquiagem = await maquiagemService.listarMaquiagem()
        res.json(maquiagem);
    } catch (error){
        console.error(error);
    }
})