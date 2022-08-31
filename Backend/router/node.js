const express = require('express');
const router = express.Router();
const nodemodule = require('../module/node')

// to get product details

router.get('/get', nodemodule.getproductdetails);

//to get total product count

router.get('/gettotalproductcount', nodemodule.gettotalproductcount);

// to get contact us details

router.get('/getcontactusdetails', nodemodule.getcontactusdetails);

// to post product datas

router.post('/post',nodemodule.postproductdata);

// to post contactus datas

router.post('/contactus',nodemodule.postcontactusdata);

// to update product data

router.put('/update/:id',nodemodule.Updateproductdata);

// to delete product data

router.delete('/delete/:id',nodemodule.deleteproductdata);

module.exports = router
