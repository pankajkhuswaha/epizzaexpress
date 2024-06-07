import mongoose from "mongoose";

const contactusShema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "No Remarks",
    },
  },
  {
    timestamps: true,
  }
);

const ContactUs =
  mongoose.models.contactus || mongoose.model("contactus", contactusShema);
export default ContactUs;
