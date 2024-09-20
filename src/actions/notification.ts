"use server";
import dbconnect from "@/configs/dbconnect";
import NotificationToken from "@/models/notificationToken.model";
import { IUser, NotificationProp, UserProp } from "@/types";
import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  });
}

export const sendNotifications = async (notification: NotificationProp) => {
  try {
    await dbconnect();
    const tokensDocument = await NotificationToken.find();
    const tokens = tokensDocument.map((token) => token.token);
    const response = await admin.messaging().sendEachForMulticast({
      tokens,
      notification: {
        title: notification.title,
        body: notification.body,
        imageUrl: notification.image,
      },
    });
    const invalidTokens: string[] = [];

    response.responses.forEach((res, idx) => {
      if (!res.success && res.error) {
        const errorCode = res.error.code;
        if (
          errorCode === "messaging/invalid-registration-token" ||
          errorCode === "messaging/registration-token-not-registered"
        ) {
          invalidTokens.push(tokens[idx]);
        }
        console.error(`Error sending to ${tokens[idx]}:`, res.error);
      } else {
        console.log(`Successfully sent to ${tokens[idx]}:`, res);
      }
    });

    if (invalidTokens.length > 0) {
      await NotificationToken.deleteMany({ token: { $in: invalidTokens } });
    }
    return invalidTokens;
  } catch (error) {
    throw new Error("Error sending message");
  }
};

export const saveNotificationToken = async (token: string) => {
  await dbconnect();
  const tokenAvaliable = await NotificationToken.findOne({ token });
  if (tokenAvaliable) {
    return {};
  }
  await NotificationToken.create({ token });
  return token;
};

export const verifyGoogleToken = async (token: string) => {
  const decryptedUser = await admin.auth().verifyIdToken(token);
  const user: UserProp = {
    name: decryptedUser.name,
    email: decryptedUser.email || "",
    role: "user",
    mobile: decryptedUser.phone_number || "",
    image: decryptedUser.picture,
  };
  return user;
};
