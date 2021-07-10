const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const transactionSchama = new Schema({
    name:String,
    category: {
        type:"String",
        enum:["fish","rice","animal"]
    },
    amount:Number,
    type:{
        type:"String",
        enum:["debit","credit"]
    },
    buyerName:String,
    buyerPhone:String
},{
    timestamps:true
});


module.exports=mongoose.model("transaction",transactionSchama)