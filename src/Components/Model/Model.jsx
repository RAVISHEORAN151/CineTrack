import React, {useEffect, useRef} from 'react';
import {createPortal} from "react-dom";
import Button from "../Button/Button.jsx"; 


function Model({
  isOpen, onClose, title, children
  }) {

  const dialogRef = useRef(null);
  useEffect(()=>{
    if(!isOpen) return;

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {document.body.style.overflow = previous}
    const onKeyDown = (e) => {

      if(e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  },[isOpen, onClose])

  if(!isOpen) return null;

  return createPortal(

    <div 
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
    onClick={(e) => {
      if(e.target === e.currentTarget) onClose();
    }}
    >
      <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      className="w-full max-w-md rounded-2xl border border-pink-400/20 bg-slate-900/95 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl"
      >
        <div
         className="mb-4 flex items-center justify-between">
          <h2
           className="text-lg font-bold text-slate-100">
            {title}
           </h2>

           <Button
            onClick={onClose}
            aria-label = "close"
            variant ="ghost"
            className = "rounded-lg h-10 w-10"
            >
               ✕
           </Button>
           </div>
            {children}

           </div>

      </div>,
      document.body
  );
}

export default Model;