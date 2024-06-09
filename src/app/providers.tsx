"use client";
import { ChildrenProps } from "@/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";
import { getToken } from "firebase/messaging";
import { messaging } from "@/configs/firebase";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Providers = ({ children }: ChildrenProps) => {
  const requestPermission = async () => {
   try {
     const permission = await Notification.requestPermission();
      
     if (permission == "granted") {
      const mess = await messaging()
      if(mess){
         const token = await getToken(mess, {
           vapidKey:
             "BOIpJ_ahMvel-nZVaUO1mvZpVnVEA3odPIwwtf5bge0UvCB5aKSy094lK54yJ5KphPtlXKo5-pAR0FZfB9q1EC4",
         });
         console.log(token);
         localStorage.setItem("notificationToken", token);
      }
     } else {
       alert("You denied for permission");
     }
   } catch (error) {
    console.log(error)
   }
  };
  useEffect(() => {
    requestPermission();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <ScrollToTop />

      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
};

export default Providers;
