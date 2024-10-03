import { toast, ToastOptions } from "react-toastify";

const defaultOptions: ToastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
};
const ToastError = (props: any) => {
  return toast(props?.toString(), { ...defaultOptions, type: "error" });
};

const ToastSuccess = (props: any) => {
  return toast(props?.toString(), { ...defaultOptions, type: "success" });
};
export { ToastError, ToastSuccess };
