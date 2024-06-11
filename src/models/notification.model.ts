import mongoose from "mongoose";

const notificationShema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    body: {
      type: String,
      require: true,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Notification =
  mongoose.models.notification ||
  mongoose.model("notification", notificationShema);
export default Notification;
