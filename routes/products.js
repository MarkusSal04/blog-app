// reread https://www.geeksforgeeks.org/routing-path-for-expressjs/?ref=rp

import { Router } from 'express'
import * as controllers from "../controllers/products.js"

const router = Router()

// router is storing all of the routes and their corrisponding controllers
// when access to '/products', gonna call for controllers.getProducts method
// '/products' is the http url, controllers.getProducts is the function allowed access to within that url.

router.get('/products', controllers.getProducts)
router.get('/products/:id', controllers.getProduct)
router.post('/products', controllers.createProducts)
router.put('/products/:id', controllers.updateProducts)
router.delete('/products/:id', controllers.deleteProducts)

export default router