import mongoose from "mongoose";
import User from "./user.model";

const replySchema = new mongoose.Schema(
  {
    commentId: {
      type: mongoose.Types.ObjectId,
      ref: "comment",
    },
    reply: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Reply = mongoose.models.reply || mongoose.model("reply", replySchema);
export default Reply;
