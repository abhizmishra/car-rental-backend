import mongoose from "mongoose";
const userShema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    GovId: {
      type: String,
      required: true,
      unique:true ,
      url:true,
    },
    age: {
       type: String,
      required: true,
      unique: true,
      range: {
      }
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    countryCode: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      length: 10,
    },
    pincode: {
      type: String,
      required: true,
      length: 6,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    city: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("User", userShema);
export default user;