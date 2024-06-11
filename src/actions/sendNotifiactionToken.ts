"use server";
import dbconnect from "@/configs/dbconnect";
import NotificationToken from "@/models/notificationToken.model";

export const saveNotificationToken = async (token: string) => {
    await dbconnect();
    const tokenAvaliable = await NotificationToken.findOne({ token });
    if (tokenAvaliable) {
      return {};
    }
    await NotificationToken.create({ token });
    return token;
};
