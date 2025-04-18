const mongoose=require('mongoose');

const trSchema=new mongoose.Schema({

    userid:{
        type: String,
        required: true
    },

    amount:{
        type: Number,
        required: true
    },

    type:{
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    refernce: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
});

const trmodel=mongoose.model('Transactions',trSchema);

module.exports=trmodel;