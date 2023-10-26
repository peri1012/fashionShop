import { toast} from "react-toastify";

const successMessage= () =>{
    return  toast.success("Successful",{
        position:"bottom-right",
        autoClose:5000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        progress:undefined,
        theme:"dark",
    });
}
export {successMessage};

const errorMessage= () =>{
    return toast.error("Try again",{
        position:"bottom-right",
        autoClose:5000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        progress:undefined,
        theme:"dark",
    });
}

export {errorMessage};