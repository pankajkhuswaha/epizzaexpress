import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    comment: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
    replies: [
      {
        type: mongoose.Types.ObjectId,
        ref: "reply",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Comment =
  mongoose.models.comment || mongoose.model("comment", commentSchema);
export default Comment;
