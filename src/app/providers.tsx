"use client";
import { ChildrenProps } from "@/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "sweetalert2/src/sweetalert2.scss";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Providers = ({ children }: ChildrenProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />

      <ReactQueryDevtools initialIsOpen={false} />
      <main>{children}</main>
    </QueryClientProvider>
  );
};

export default Providers;
