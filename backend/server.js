import express from 'express'
import dotenv from 'dotenv'
import dbconnect from './config/db.js'
import path from 'path'
import colors from 'colors'
import morgan from 'morgan'
import productroutes from './routes/productroutes.js'
import userroutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/UploadRoutes.js'
import vendorRoutes from './routes/vendorRoutes.js'
import {error, errorHandler} from './middleware/errormiddleware.js'

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

dotenv.config()

dbconnect();


app.use('/api/products',productroutes)
app.use('/api/users',userroutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api/vendor', vendorRoutes)

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname,'/Frontend/build')))

  app.get('*',(req,res) => res.sendFile(path.resolve(__dirname,'Frontend','build','index.html')))


}else{

  app.get('/',(req,res) => {
    res.send('Welcome to furniture village ')
})


}


app.use(error)

app.use(errorHandler)
const PORT = process.env.PORT || 5000
const MODE = process.env.NODE_ENV

app.listen(5000,console.log(`Server is running in ${MODE} mode on port ${PORT}`.yellow.bold))
