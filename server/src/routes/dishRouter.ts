import { Router } from "express"
import DishController from "../controllers/dishController"

const router: Router = Router()
const dishController: DishController = new DishController()

router.get('', dishController.get)
router.get('/:id', dishController.getById)
router.get('/catDishes/:id', dishController.getByCatId)
router.post('', dishController.create)
router.put('/:id', dishController.change)
router.delete('/:id', dishController.delete)

module.exports = router