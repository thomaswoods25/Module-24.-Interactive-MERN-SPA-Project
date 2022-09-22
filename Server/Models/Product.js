const mongoose = require("mongoose");
// const AutoIncrement = require("mongoose-sequence")(mongoose);
const productSchema = new mongoose.Schema(
  {
    thumbnail: {
      type: String,
      required: true,
    },
    shoeName: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    retailPrice: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
