import { Router } from "express"
import CategoryController from '../controllers/categoryController'

const router: Router = Router()

const categoryController: CategoryController = new CategoryController()

router.get('', categoryController.get)
router.get('/:id', categoryController.getById)
router.post('', categoryController.create)
router.put('/:id', categoryController.change)
router.delete('/:id', categoryController.delete)

module.exports = router