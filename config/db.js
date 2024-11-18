const mongoose=require("mongoose")

//MongoDb connection

const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/ecommerceDB")
        console.log("MongoDb connected successfully");
        
    } catch (error) {
        console.error("Data connection failed:",error.message);
        process.exit(1) //stop server if connection falis
        
    }
}

module.exports=connectDB