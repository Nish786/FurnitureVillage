import express from 'express'
import {getUnPublishedProducts,getPublishedProducts,getProductById, deleteProduct, createProduct, updateProduct,createProductReview, getTopProducts, getVendorProducts} from '../controllers/productControllers.js'
import {protect,admin} from '../middleware/authMiddleware.js'
const router = express.Router();


router.route('/').get(getPublishedProducts).post(protect, admin, createProduct)
router.route('/unpublishedproducts/').get(protect,admin,getUnPublishedProducts)
router.get('/top', getTopProducts)
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct).put(protect, admin,updateProduct)
router.route('/:id/reviews').post(protect, createProductReview)

export default router