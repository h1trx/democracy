import { Router } from "express";

import userRouter from "./user.routes.js";
import voteRouter from "./vote.routes.js"

export function routerApi(app) { 
    const router = Router()
    app.use('/api', router)
    router.use('/user', userRouter)
    router.use('/vote', voteRouter)
}
