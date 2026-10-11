import React from "react";

const THEMES = {
  pink: {
    gradient: "bg-gradient-to-br from-pink-500/25 via-slate-900/80 to-slate-950",
    border: "border-pink-400/80 hover:border-pink-300/70",
    text: "bg-gradient-to-r from-pink-200 to-pink-400 bg-clip-text text-transparent",
    shadow: "shadow-lg shadow-pink-500/20 hover:shadow-xl hover:shadow-pink-500/40",
    glow: "bg-pink-500/30",
    chip: "bg-pink-500/15 text-pink-300 ring-1 ring-pink-400/30",
  },
  purple: {
    gradient: "bg-gradient-to-br from-purple-500/25 via-slate-900/80 to-slate-950",
    border: "border-purple-400/80 hover:border-purple-300/70",
    text: "bg-gradient-to-r from-purple-200 to-purple-400 bg-clip-text text-transparent",
    shadow: "shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40",
    glow: "bg-purple-500/30",
    chip: "bg-purple-500/15 text-purple-300 ring-1 ring-purple-400/30",
  },
  green: {
    gradient: "bg-gradient-to-br from-emerald-500/25 via-slate-900/80 to-slate-950",
    border: "border-emerald-400/80 hover:border-emerald-300/70",
    text: "bg-gradient-to-r from-emerald-200 to-emerald-400 bg-clip-text text-transparent",
    shadow: "shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/40",
    glow: "bg-emerald-500/30",
    chip: "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30",
  },
  amber: {
    gradient: "bg-gradient-to-br from-amber-500/25 via-slate-900/80 to-slate-950",
    border: "border-amber-400/80 hover:border-amber-300/70",
    text: "bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent",
    shadow: "shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/40",
    glow: "bg-amber-500/30",
    chip: "bg-amber-500/15 text-amber-300 ring-1 ring-amber-400/30",
  },
}

function StatsCard({ label, value, icon, color = "pink" }) {
  const theme = THEMES[color]

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border-2 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 ${theme.gradient} ${theme.border} ${theme.shadow}`}
    >
      <div
        className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full blur-3xl transition duration-300 group-hover:scale-125 ${theme.glow}`}
      />

      <div className="relative flex items-start justify-between">
        <p className="text-sm font-medium text-slate-300">{label}</p>
        {icon && (
          <span className={`flex h-9 w-9 items-center justify-center rounded-xl text-lg ${theme.chip}`}>
            {icon}
          </span>
        )}
      </div>

      <p className={`relative mt-4 text-4xl font-extrabold tracking-tight ${theme.text}`}>
        {value}
      </p>
    </div>
  )
}
export default StatsCard;