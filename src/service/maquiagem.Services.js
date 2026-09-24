import { pool } from "../database/db.js"

class MaquiagemService {
    async listarMaquiagem(){
        const res = await pool.query("SELECT * FROM maquiagens")
        return res.rows
    }
}

export const maquiagemService = new MaquiagemService()