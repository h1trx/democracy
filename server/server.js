import express from "express";
import cors from "cors";

import { routerApi } from "../routes/routes.js";
import { verifyToken } from "../middleware/auth.handler.js";

import { cwd } from "node:process";
import path from "node:path";

const PORT = 3000;

const app = express();

app.disable("x-powered-by");
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(cwd(), './public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(cwd(), './public/index.html'));
})

app.get('/personero',(req, res) => {
        res.sendFile(path.join(cwd(), './public/src/html/personeria.html'));
    })

app.get('/contralor', (req, res) => {
        res.sendFile(path.join(cwd(), './public/src/html/contraloria.html'));
    })

app.get('/gracias', (req, res) => {
        res.sendFile(path.join(cwd(), './public/src/html/gracias.html'));
    })

app.get('/votos', (req, res) => {
        res.sendFile(path.join(cwd(), './public/src/html/votos.html'));
    })

routerApi(app);

app.use((req, res) => {
    res.status(404).send("Bad Request");
})

app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`);
})
