import mongoose, { mongo } from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subcategory: {
      type: String,
    },
    images: {
      type: Array,
      required: true,
    },
    banner: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    brand: {
      type: String,
    },
    discount: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.models.product|| mongoose.model("product", ProductSchema);
export default Product;
