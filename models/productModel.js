const mongoose = require("mongoose");

//Schema Design

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Product  name is important"],
    maxlength: [50, "Product name must not exceed 50 characters"],
  },
  price: {
    type: Number,
    required: [true, "Price is important"],
    min: [0, "Price must be a positive number"],
  },
  category: {
    type: String,
    required: [true, "Category is important"],
    enum: ["Electronics", "Clothing", "Books", "Home Appliances"],
  },
  stock: {
    type: Number,
    required: [true, "Stock is important"],
    min: [0, "Stock must be zero or more"],
    validate: {
      validator: Number.isInteger,
      message: "must be Stock integer value",
    },
  },
  SKU: {
    type: String,
    required: [true, "SKU is important"],
    match: [/^PROD-[a-zA-Z0-9]{4}$/, "SKU format PROD-XXXX should be"],
    unique: true,
  },
  tags:{
    type:[String],
    validate:{
        validator:function(tags){
            return tags.every(tag=> /^[a-zA-Z0-9]+$/.test(tag))
        },
        message:"tags must be alphanumeric only and must not contain spaces or special characters."
    }
  }
});


module.exports=mongoose.model("Product",productSchema)