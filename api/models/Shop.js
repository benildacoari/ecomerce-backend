import mongoose from "mongoose";

const schema = new mongoose.Schema({
  date: date,
  listShop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cart',
  },
});

export default mongoose.model("Shop", schema);