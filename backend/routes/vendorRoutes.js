import express from 'express'
import {createVendorProduct, deleteProduct, getVendorProducts, updateProduct} from '../controllers/productControllers.js'
import {protect, vendor} from '../middleware/authMiddleware.js'
const router = express.Router();


router.route('/:vendorName/products').get(protect,vendor,getVendorProducts)
router.route('/').post(protect,vendor, createVendorProduct )
router.route('/:id').delete(protect,vendor,deleteProduct).put(protect,vendor,updateProduct)

export default router