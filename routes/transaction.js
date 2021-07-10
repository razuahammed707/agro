var express = require('express');
var router = express.Router();
const {createTransaction,getAllTransactions}=require("../controllers/transactionController")

/* GET home page. */
router.get('/',getAllTransactions);

router.post('/',createTransaction);

module.exports = router;
