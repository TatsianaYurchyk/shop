import React from "react";

interface ModalProps {
    children:React.ReactNode
    title:string
    onClose: () => void
    
}



export function Modal ({children,title,onClose}:ModalProps) {
    return(
        <>
        <div className="modalBg" onClick={onClose}/>
        <div className="modalWindow"> 
        <h1 className="text-center">{title}</h1>

        {children}
       
       </div>
        </>
    )
}