import mongoose from "mongoose"

const UserSchama = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
    },
    email : {
        type : String,
        unique : true,
        match : [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Please enter valid email"],
    },
    internshipType : {
        type : String,
    },
    mobileNo : {
        type : String,
        unique : true,
        required : true,
    },
    duration : {
        type : String,
    },
    qualification : {
        type : String,
        enum: ["B.Tech", "M.Tech", "B.Sc", "M.Sc"],
    },
    branch : {
        type : String,
        enum : ['computer science','information technology'],
        required : true,
    },
    experience : {
        type : Number,
        min : 0,
    },
    collegeOrUniversity : {
        type : String,
        required : true,
    },
    location : {
        type : String,
    },
    city : {
        type : String,
        required : true,
    },
    fromDate : {
        type : Date,
        required : true,
        default : Date.now,
    },
    tillDate : {
        type : Date,
        required : true,
    },
    message : {
        type : String
    }
})

const User = mongoose.model("User", UserSchama);

export default User;