import {signin, signup, protectedRoute, publicRoute} from "../controllers/userController.js"

import { userMiddleware } from "../middleware/userMiddleware.js"

import express from "express"
const router = express.Router()

router.post("/signup", signup)
router.post("/signin", signin)
router.get("/profile", userMiddleware, protectedRoute)
router.get("/public", publicRoute)

export default router
