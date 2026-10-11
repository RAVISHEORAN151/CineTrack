// Components/EmptyState/EmptyState.jsx
import React from 'react'

const CONTENT = {
    "no-movies": {
        title: "No movies yet",
        text: 'Click "+ Add Movie" in the header to add your first one.',
    },
    "no-results":{
        title: "No matching movies",
        text: "Try a different search or change the filter.",

    },
    "empty-watchlist":{
        title: "Your watchlist is empty",
        text: "Movies you haven't watched yet will show up here.",
    },
}

function EmptyState({variant="no-movies"}) {
    const { title, text} = CONTENT[variant]
    return (
        <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="text-lg font-semibold text-slate-400">{title}</p>
        <p className="mt-1 text-sm text-slate-500">{text}</p>
        </div>
    )
}

export default EmptyState