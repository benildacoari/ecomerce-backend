import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  locality: {
    type: String,
    required: true,
  },
  outdoorNumber: {
    type: String,
    required: true,
  },
  interiorNumber: String,
  betweenStreets: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  references: [
    {
      name: String,
      required: true,
    },
  ],
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type:Number,
    required: true,
  },
  personalContacts: [
    {
      name: String,
      required: true,
    },
  ],
});

export default mongoose.model("Customer", schema);