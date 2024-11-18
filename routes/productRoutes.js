const express = require("express");
const product = require("../models/productModel");
const router = express.Router();

//Create Product post

router.post("/", async (req, res) => {
  try {
    const products = new product(req.body);
    await products.save();
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


//get All products get
router.get("/",async(req,res)=>{
    try {
        const products=await product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

module.exports=router