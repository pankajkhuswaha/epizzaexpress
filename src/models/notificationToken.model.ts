import mongoose from "mongoose";

const notificationTokenShema = new mongoose.Schema(
  {
    token: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const NotificationToken =
  mongoose.models.notificationToken ||
  mongoose.model("notificationToken", notificationTokenShema);
export default NotificationToken;
