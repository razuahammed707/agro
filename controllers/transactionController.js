
//Transcation Model
const TransactionModel = require("../models/transaction")



// Create Transaction
const getAllTransactions =async(req, res, next)=> {
    try{
        const transaction = await TransactionModel.find()
        res.send({
            status:true,
            data:{transaction}
        })

    }catch(err){
        res.send({
            status:false,
            message:err.message
        })
    }
}


// Create Transaction
const createTransaction =async(req, res, next)=> {
    try{
        const transaction = await TransactionModel.create(req.body)
        res.send({
            status:true,
            data:{transaction}
        })

    }catch(err){
        res.send({
            status:false,
            message:err.message
        })
    }
};

const getReports=async(req, res, next)=> {
    try{
        const data = await TransactionModel.aggregate([{
            $group:{
                _id:{
                    category:"$category",
                    type:"$type"
                },
                total:{
                    $sum: "$amount"
                }
            }
        }]);



        res.send({
            status:true,
            data:{data}
        })

    }catch(err){
        res.send({
            status:false,
            message:err.message
        })
    }
}


module.exports={
    createTransaction,
    getAllTransactions,
    getReports
}