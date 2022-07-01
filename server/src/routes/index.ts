import { Router } from "express"

const router: Router = Router()

const categoryRouter = require('./categoryRouter')
const dishRouter = require('./dishRouter')

router.use('/category', categoryRouter)
router.use('/dish', dishRouter)

module.exports = router