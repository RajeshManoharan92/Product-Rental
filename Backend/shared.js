const { MongoClient } = require('mongodb')

// to connect mongodb Atlas

module.exports = {
    selecteddb: {},

    async connect() {
        try {
            const response = await MongoClient.connect("mongodb+srv://mentor:BVJTLsZbBW668yRK@cluster0.n7jmf.mongodb.net/?retryWrites=true&w=majority")
            this.selecteddb = response.db("productrental")
           
        }
        catch (err) {
            console.log(err)
        }
    }
}