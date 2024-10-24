import { Router } from "express";

import { Vote } from "../services/vote.service.js";
import { verifyToken } from "../middleware/auth.handler.js";

const router = Router()

router.post('/all',
    verifyToken(),
    (req, res) => {
        const votar = new Vote()
        votar.all().then(resolve => {
            res.json(resolve)
        })
    })

router.post('/personero',(req, res) => {
    const { voto } = req.body   
    const votar = new Vote()
    votar.personero(voto).then(resolve => {
        res.json(resolve)
    })
})

    router.post('/contralor',
        verifyToken(),
        (req, res) => {
            const { voto } = req.body
            const votar = new Vote()
            votar.contralor(voto).then(resolve => {
                res.json(resolve)
            })
        })

export default router
