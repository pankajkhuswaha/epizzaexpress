"use client";

import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { app } from "./firebase";
import swal from "sweetalert";
import { saveNotificationToken } from "@/actions/notification";

export const requestNotificationPermission = async () => {
  const fcm_token = localStorage.getItem("fcm_token");
  if (fcm_token) {
    return fcm_token;
  }

  const permission = await Notification.requestPermission();
  try {
    if (permission == "granted") {
      const messaging = getMessaging(app);
      const token = await getToken(messaging, {
        vapidKey:
          "BPOWvZ3TyL85kjgVPFm4AZzewAgYT5UV13dVgrXI2yEFFeT_H-73yuW3RvkNl8gAIaxPG0MiNa-oQcYHWQVWLwY",
      });
      await saveNotificationToken(token);
      localStorage.setItem("fcm_token", token);

      return token;
    } else {
      alert("You denied for permission");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getMessage = () => {
  const messaging = getMessaging(app);
  onMessage(messaging, (payload) => {
    const { notification } = payload;
    swal({
      icon: "info",
      text: notification?.body,
      title: notification?.title,
    });
  });
};

export const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/firebase-messaging-sw.js")
      .then((registration) => {
        // console.log("Service worker is register successfully", registration);
      });
  }
};
