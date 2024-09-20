"use client";
import ScrollToTop from "@/components/ScrollToTop";
import {
  getMessage,
  registerServiceWorker,
  requestNotificationPermission,
} from "@/configs/messaging";
import { ChildrenProps } from "@/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Providers = ({ children }: ChildrenProps) => {
  const requestPermission = async () => {
    registerServiceWorker();
    await requestNotificationPermission();
    getMessage();
  };
  useEffect(() => {
    requestPermission();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer position={"top-center"} />
      <ScrollToTop />

      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
};

export default Providers;
