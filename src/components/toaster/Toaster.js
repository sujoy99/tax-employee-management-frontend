
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { redirect, useParams, useNavigate } from "react-router-dom";

export const SuccessToast = (data = "", navigateCallBack) => {
  // const navigate = useNavigate(); // <-- use hook in component
  console.log("ME OME MEO");
  return toast.success(data, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    onClose: () => {
      console.log("toast closed");
      navigateCallBack();
    },
  });
};

export const ErrorToast = (data = "") => {
  return toast.error(data, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};


