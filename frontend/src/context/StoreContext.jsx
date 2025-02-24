import { createContext, useEffect, useState } from "react";

export const StoreContext=createContext(null);
const StoreContextProvider=(props)=>{
    const url="https://self-project2-backend.onrender.com";
    const [token,setToken]=useState("");
    useEffect(()=>{  
        const  loadData=async()=>{    
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
            }
        }
        loadData();     
    },[])
    const contextValue={url,token,setToken};
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;
