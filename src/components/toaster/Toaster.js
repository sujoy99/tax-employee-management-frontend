import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

class ToasterComp  {
  
 
     successToast(data = ''){
        toast.success(data, {
            position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
        })
    }

    errorToast(data = ''){
        toast.error(data, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
        })
    }
        
    
  
}

export const Toaster = new ToasterComp();
