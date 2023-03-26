const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema(
    {
        _id: Schema.Types.ObjectId,
        name: { type: String },
        userName: { type: String },
        passWord: { type: String },
    }
)
module.exports = mongoose.model('Account', Account)