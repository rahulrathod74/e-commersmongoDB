const bodyParser=require("body-parser")
const connectDB=require("./config/db")
const productRouters=require("./routes/productRoutes")
const express=require("express")


//App Initilization
const app=express()

//middleware
app.use(bodyParser.json())

//database connection
connectDB()

//Routes
app.use("/api/products",productRouters)


//Server start
const PORT=5000
app.listen(PORT,()=>{
    
    console.log(`Server running at http://localhost:${PORT}`);
    
})