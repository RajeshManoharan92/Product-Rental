const { ObjectId } = require("mongodb")
const mongo = require("../shared")

// to get product datas

module.exports.getproductdetails = async (req, res) => {
    try {
        const response = await mongo.selecteddb.collection("mainpage").find().toArray()
        res.send(response)
    }
    catch (err) {
        console.log(err)
    }
}

// to get total product count

module.exports.gettotalproductcount = async (req, res) => {
    try {
        const response = await mongo.selecteddb.collection("mainpage").aggregate([
            {
                $group: {
                    _id: "$userId",
                    Totalcount: { "$sum": 1 }
                }
            }, {
                $project: { _id: 0 }
            }
        ]).toArray()
        res.send(response)
    }
    catch (err) {
        console.log(err)
    }
}


// to get contact us details

module.exports.getcontactusdetails = async (req, res) => {
    try {
        const response = await mongo.selecteddb.collection("contactus").find().toArray()
        res.send(response)
    }
    catch (err) {
        console.log(err)
    }
}

// to post product data

module.exports.postproductdata = async (req, res) => {
    try {
        const response = await mongo.selecteddb.collection('mainpage').insertOne(req.body)
        res.send(response)
    }
    catch (err) {
        console.log(err)
    }
}

// to post contact us data

module.exports.postcontactusdata = async (req, res) => {
    try {
        const response = await mongo.selecteddb.collection('contactus').insertOne(req.body)
        res.send(response)
    }
    catch (err) {
        console.log(err)
    }
}

// to update product data

module.exports.Updateproductdata = async (req, res) => {
    try {
        const response = await mongo.selecteddb.collection('mainpage').findOneAndUpdate({ _id: ObjectId(req.params.id) },
            { $set: { ...req.body } },
            { runValidators: true, new: true })
        res.send(response)
    }
    catch (err) {
        console.log(err)
    }
}

// to delete product data

module.exports.deleteproductdata = async (req, res) => {
    try {
        const response = await mongo.selecteddb.collection('mainpage').remove({ _id: ObjectId(req.params.id) })
        res.send(response)
    }
    catch (err) {
        console.log(err)
    }
}