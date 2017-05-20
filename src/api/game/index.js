import { Router } from 'express'
import { create } from './controller'

const router = new Router()

/**
 * @api {post} /create-game Create game
 * @apiName CreateGame
 * @apiGroup Game
 */
router.post('/',
  create)

export default router
