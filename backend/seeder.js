import mongoose from'mongoose';
import colors from 'colors';
import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/usermodels.js'
import Product from './models/productmodels.js'
import Order from './models/ordermodels.js'

import dbconnect from './config/db.js'

dotenv.config();

dbconnect();

const importData = async() => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map(product => {
            return {...product, user:adminUser}
        })
        await Product.insertMany(sampleProducts)
        console.log('Data Imported..!'.green.bold)
        process.exit();
    } catch (error) {
        console.error(`Error: ${error}`.red.inverse)
        process.exit();
    }

}


const destroyData = async() => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data destroyed..!'.red.bold)
        process.exit();
    } catch (error) {
        console.error(`Error: ${error}`.red.inverse)
        process.exit();
    }

}


if(process.argv[2] === '-d'){
    destroyData()
}
else{
    importData()
}
