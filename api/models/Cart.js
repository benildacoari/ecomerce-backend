import mongoose from "mongoose";

const schema = new mongoose.Schema({
  total: {
    type: Number,
    required: true,
  },
  articles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
  customer:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  }
});

export default mongoose.model("Cart", schema);