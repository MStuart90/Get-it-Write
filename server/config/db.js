const mongoose = require('mongoose')
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log('MongoDB is now connected....');
    } catch(err) {
        console.error(err.message);
        //exit the process with failure
        process.exit(1);
    }
}