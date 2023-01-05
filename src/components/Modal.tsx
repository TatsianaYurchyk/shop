import React from "react";

interface ModalProps {
    children:React.ReactNode
}

interface Modaltitle{
    title:string
}

export function Modal ({children}:ModalProps, props:Modaltitle) {
    return(
        <>
        <div className="modalBg"/>
        <div className="modalWindow"> 
        <h1>{props.title}</h1>

        {children}
       
       </div>
        </>
    )
}