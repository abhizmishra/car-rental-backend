import mongoose from "mongoose";
const carSchema = new mongoose.Schema({
  carName: {
    type: String,
    required: true,
    unique: true,
  },
  model: {
    type: String,
    required: true,
    unique: true,
  },
  mark: { type: String, required: true },
  year: { type: String, required: true },
  doors: {
    type: String,
    required: true,
    enum: ["two", "three", "four", "five", "six"],
  },
  type: { type: String, required: true, enum: ['Sedan', 'SUV', 'XUV', 'Hatchback', 'Coupe' ,'Convertible', 'Minivan' , 'Wagon'] },
  seats: { type: String, required: true, enum: ["2", "3", "4", "5", "6", "7"] },
  ac: {
    type: Boolean,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
    enum: ["automatic", "mannual"],
  },
  fuel: { type: String, required: true, unique: true },
  rentPerDay: { type: String, required: true, unique: true },
});

const car = mongoose.model("Car", carSchema);
export default car;
