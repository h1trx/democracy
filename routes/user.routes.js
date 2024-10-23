import { Router } from "express"; 

import { Persona } from "../services/user.service.js";
import { verifyToken } from "../middleware/auth.handler.js";

const router = Router()

router.post('/create', (req, res) => {
    const persona = new Persona();
    persona.all().then((resolve) => {
        res.json(resolve)
    })
})

router.post('/login', (req, res) => {
    const {id, pin} = req.body;
    const data = {
        id,
        pin
    }
    const persona = new Persona();
    persona.login(data).then((resolve) => {
        res.json(resolve);
    })
})

router.post('/auth', (req, res) => {
    const persona = new Persona()
    persona.auth(req).then(resolve => {
        res.json(resolve)
    }).catch(err => {
        res.status(401).send(err)
    })
})

export default router
