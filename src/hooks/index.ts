import { QueryClient, QueryCache } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { ToastError } from "../components/Toast";
type ServerError = { ErrorMessage: string };

const queryCache = new QueryCache({
  onError: (error) => {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>;
      if (serverError && serverError.response && serverError.response.data) {
        ToastError(serverError.response.data.ErrorMessage);
      } else {
        ToastError("Sunucu kaynaklı bir hata oluştu");
      }
    } else {
      ToastError("Sunucu kaynaklı bir hata oluştu");
    }
  },
  onSuccess: () => {},
});

const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      staleTime: 0,
      retry: false,
    },
  },
});

export default queryClient;
