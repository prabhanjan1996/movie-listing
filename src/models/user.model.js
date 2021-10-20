const { Schema, model } = require("mongoose");
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { Int32 } = require('mongodb');

const schema = new Schema({
    email: { type: String},
    phone: { type: String},
    password: { type: String },
    firstName: { type: String , default:""} 
}, { timestamps: true })



// JWT Token authentication 
schema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.password;
    },
    encryptPassword: function(password) {
        if (!password) return '';
        try {
        return crypto
            .createHmac('sha1', '1234567890')
            .update(password)
            .digest('hex');
        } catch (err) {
        return '';
        }
    },
    authenticateEncrypt: function(plainText) {
        return plainText === this.password;
    }
};


module.exports = UserModel = model("user", schema)

