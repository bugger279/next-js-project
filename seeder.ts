import { quotes } from './libs/data';
import Quote from './models/Quote';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({
    path: __dirname + '/.env.local'
});

// 1. DB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
}).then(() => console.log("Connected"))
.catch(err => console.log(err.message));

// 2. Import Data


const importData = async () => {
    try {
        await Quote.deleteMany();
        await Quote.insertMany(quotes);
        console.log("Data Imported");
        process.exit(0);
    } catch (error) {
        console.log("Something went wrong", error.message);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Quote.deleteMany();
        console.log("Data Destroyed");
        process.exit(0);
    } catch (error) {
        console.log("Something went wrong", error.message);
        process.exit(1);
    }
}

if (process.argv[2] === '-d') destroyData();
else importData();