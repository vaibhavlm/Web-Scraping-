const Mongoose = require("mongoose")
const Schema = Mongoose.Schema;

const newSchema = new Schema({
    amount: {
        type: Number
    },
    pgcnt: {
        type :[String],
        required : true
    }
        
});

module.exports = Mongoose.model("PgContent", newSchema);