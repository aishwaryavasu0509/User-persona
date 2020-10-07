const express = require('express');
const app = express();
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        constrequired:true,
        min:6,
        max:255
    },
    email: {
        type: String,
        required: true,
        min:6,
        max:255
    },
    password: {
        type: String,
        required: true,
        max:1024,
        min: 6
    },
    type:
    {
        type: String,
        required: true,
        max : 1024,
        min: 6
    },
    organization: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    }
});

module.exports=mongoose.model('User',userSchema);
