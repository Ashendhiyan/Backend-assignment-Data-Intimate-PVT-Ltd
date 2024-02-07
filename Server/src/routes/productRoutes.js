import express from 'express'
import * as productController from'../controller/productController.js'

const productRoutes = express.Router();

productRoutes.get('/get',productController.getProducts)
productRoutes.post('/save',productController.saveProduct)
productRoutes.put('/update/:id',productController.updateProduct)
productRoutes.delete('/delete/:id',productController.deleteProduct)

export default productRoutes;