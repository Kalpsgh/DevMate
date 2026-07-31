import mongoose, { model, Schema } from "mongoose";


const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        trim: true,
        minlength: 2,
        maxlength: 50
    },

    lastName: {
        type: String,
        trim: true,
        maxlength: 50
    },

    emailId: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [
            /^\S+@\S+\.\S+$/,
            "Please enter a valid email address"
        ]
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 6
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [16, "You must be at least 16 years old"],
        max: [100, "Please enter a valid age"]
    },

    gender: {
        type: String,
        enum: {
            values: ["Male", "Female", "Other"],
            message: `{VALUE} is not a valid gender`
        },
        required: [true, "Gender is required"]
    },

    photoUrl: {
        type: String,
        default: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        validate: {
            validator: function (value) {
                return /^https?:\/\/.+/i.test(value);
            },
            message: "Please provide a valid URL"
        }
    },
    about: {
        type: String,
        trim: true,
        maxlength: 500,
        default: "Hey there! I'm using DevMate."
    },

    skills: {
        type: [String],
        default: [],
        validate: {
            validator: function (skills) {
                return skills.length <= 20;
            },
            message: "You can add a maximum of 20 skills"
        }
    }
});

const UserModel = model("User", userSchema);

export default UserModel;