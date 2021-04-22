import mongoose from 'mongoose';

const dbconnect = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI,{
                useCreateIndex:true,
                useUnifiedTopology:true,
                useNewUrlParser:true
        }
        )
        console.log(`MongoDB connected  ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error : ${error}`.red.underline.bold)
        process.exit();
    }
}

export default dbconnect