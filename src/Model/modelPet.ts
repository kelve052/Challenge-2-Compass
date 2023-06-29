import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const petSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  name: {
    type: String,
    required: [true, "pet name"],
  },
  species: {
    type: String,
    required: [true, "pet species"],
  },
  carry:{
    type: String,
    required: [true, "pet carry"]
  },
  weight:{
    type: Boolean,
    required: [true, "pet weight"]
  },
  date_of_birth: {
    type: Date,
    required: [true, "pet date_of_birth"],
  }
});

export default {"Pets": petSchema};
