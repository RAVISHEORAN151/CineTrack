
import React from 'react'

const STACK = ["React", "Redux Toolkit", "React Router", "React Hook Form", "Tailwind CSS", "Vite"]
const FEATURES = [
  "Add, edit and delete movies",
  "Search, filter by status and sort",
  "Watchlist and live dashboard statistics",
  "Everything saved in your browser's localStorage",
]

function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold text-slate-600">About MovieList</h1>
      <p className="mt-3 text-slate-400">
        MovieList is a small app for keeping track of the movies you want to watch and the ones
        you've finished. There are no accounts. Your list is stored in this browser only.
      </p>

      <h2 className="mt-8 text-xl font-bold text-slate-600">Features</h2>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-400">
        {FEATURES.map((feature) => <li key={feature}>{feature}</li>)}
      </ul>

      <h2 className="mt-8 text-xl font-bold text-slate-600">Built with</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {STACK.map((tech) => (
          <span key={tech} className="rounded-full border border-pink-400/30 bg-pink-500/10 px-3 py-1 text-sm text-pink-300">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default About