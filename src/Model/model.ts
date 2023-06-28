import mongoose from "mongoose";

const tutorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'turor name']
    },
    phone:{
        type: Number,
        required: [true, 'totor phone']
    },
    email:{
        type: String,
        required: [true, 'email phone'],
        unique: [true],
        validate: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/],
        message: ['invalid email']
    },
    date_of_birth:{
        type: Date,
        required: [true, 'tutor date_of_birth']
    },
    zip_code:{
        type: Number,
        retuired: [true, 'tutor zip_code']
    },
    pets:{
        type: Array
    }

})

export default mongoose.model('Veterinara', tutorSchema)