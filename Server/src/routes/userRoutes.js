import express from 'express'
import * as UserController from '../controller/userController.js'

const userRoutes = express.Router();

userRoutes.post('/saveUser',UserController.saveUser)
userRoutes.get('/get',UserController.getUsers)
userRoutes.put('/updateUser/:id',UserController.updateUser)
userRoutes.delete('/deleteUser/:id',UserController.deleteUser)

export default userRoutes