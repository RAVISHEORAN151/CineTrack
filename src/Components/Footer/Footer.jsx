import React from 'react'
import Container from "../Container/Container.jsx"
import { NavLink } from 'react-router-dom';
import Logo from '../Logo.jsx';


function Footer() {
  return (
   <footer className="fixed inset-x-0 bottom-0 z-40 flex h-20 items-center justify-center bg-slate-900/95 py-2.5 shadow-[0_-8px_24px_rgba(15,23,42,0.5)] backdrop-blur-xl">
            
     <Logo/>
     <h1 className=' text-[17px] tracking-[0.18em] text-slate-400'>` ©  {new Date().getFullYear()} CineTrack | Built with React</h1>
      
    </footer>
  );
}

export default Footer