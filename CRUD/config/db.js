const mongoose = require('mongoose');

const connectToDb = async()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then((conn)=>{
        console.log(`Connected to DB : ${conn.connection.host}`);
    })
    .catch((err)=>{
        console.log(err.message);
        process.exit(1)
    })
}

module.exports = connectToDb;
