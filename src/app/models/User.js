import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        _id: {
        type: String,
        required: true,
        unique: true,
        },
        name: {
        type: String,
        required: true,
        },
        email: {
        type: String,
        required: true,
        unique: true,
        },
        image: {
        type: String,
        default: "",
        required:false,
        },
        createdAt: {
        type: Date,
        default: Date.now,
        },
    },
    {
        timestamps: true,
    }
    );

    const User = mongoose.models.User || mongoose.model("User", UserSchema);


    export default User;  