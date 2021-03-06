// reread https://www.geeksforgeeks.org/routing-path-for-expressjs/?ref=rp

import { Router } from 'express'
import * as controllers from "../controllers/posts.js"

const router = Router()

// router is storing all of the routes and their corrisponding controllers
// when access to '/products', gonna call for controllers.getProducts method
// '/products' is the http url, controllers.getProducts is the function allowed access to within that url.

router.get('/posts', controllers.getPosts)
router.get('/posts/:id', controllers.getPost)
router.post('/posts', controllers.createPost)
router.put('/posts/:id', controllers.updatePost)
router.delete('/posts/:id', controllers.deletePost)

export default router