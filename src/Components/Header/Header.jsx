import React from 'react'
import Container from "../Container/Container.jsx"
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo.jsx';
import { useDispatch } from "react-redux";
import { openAddMovieModel } from "../../store/uiSlice";
import { useState } from "react"
import {Button} from "../index"

const navLink = [
    {to:'/', label:"Home", end:"true"},
    {to: '/movies', label: "Movies"},
    {to: '/watchlist', label: "Watchlist"},
    {to: '/about', label: "about"}
]


function Header() {
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false)

  const openAdd = () => {
    setMenuOpen(false)
    dispatch(openAddMovieModel())
  }

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-xl shadow-[0_8px_24px_rgba(15,23,42,0.5)] py-4.5 h-20">
            
      <Container>
      <nav className='flex items-center justify-between'>
        <NavLink to="/" className='flex items-center gap-2.5'>
          <Logo/>
          <div className='flex flex-col leading-tight'>
            <h1 className='bg-gradient-to-r from-red-500 to-rose-300 bg-clip-text text-2xl font-extrabold tracking-wide text-transparent'>CineTrack</h1>
            <span className='text-[10px] tracking-[0.18em] text-slate-400'>SEARCH • WATCH • REMEMBER</span>
          </div>
           </NavLink>


           <ul className="hidden items-center gap-1 md:flex">
          {navLink.map(link=>(
            <NavLink
            key={link.to}
            to={link.to}
            end={link.end === "true"} 
            className="px-3 py-2 hover:bg-gradient-to-r from-red-400 to-rose-600 text-amber-50 px-0.1 rounded-lg active:bg-gradient-to-r from-green-400 to-green-600 text-amber-50 px-0.1 rounded-lg">
                {link.label}
            </NavLink>
          ))}
          </ul>
          <button 
            type="button"
            
            onClick={()=> dispatch(openAddMovieModel())}
            className= "rounded-lg bg-gradient-to-r from-red-400 to-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_14px_rgba(236,72,153,0.35)] transition hover:from-red-500 , hover:to-pink-700 hidden md:inline-flex"
           >
                +Add Movies
            </button>

            <Button
            type="button"
            aria-label = "Toggle menu"
            aria-expanded = {menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            variant="ghost"
            >
              {menuOpen ? '✕' : '☰' }
            </Button>  
        </nav>
        {
          menuOpen && (
            <div className="mb-3 flex flex-col gap-1 rounded-2xl border border-white/10 bg-slate-900 p-3 md:hidden">
              {navLink.map(link=>(
            <NavLink
            key={link.to}
            to={link.to}
            end={link.end === "true"}
            onclick={() => setMenuOpen(false)} 
           className={({ isActive }) =>`rounded-lg px-3 py-2 text-amber-50 transition-colors ${
            isActive
              ? "bg-gradient-to-r from-red-400 to-rose-600"
              : "hover:bg-white/10"
          }`
        }
        >
              {link.label}
            </NavLink>
          ))}
          <Button type="button" className="mt-2" onClick={openAdd}>
              + Add Movie
            </Button>
            </div>

          )
        }
      </Container>
    </header>
  );
}

export default Header;