import { Router } from 'express'
import game from './game'

const router = new Router()

router.use('/create-game', game)

export default router
