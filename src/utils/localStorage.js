const STORAGE_KEY = "CineTrack:movies"

function isValidMovie(movie) {
       return (
        movie !== null && 
        typeof movie === "object" &&
        movie.id !== undefined &&
        typeof movie.title === "string"
       ) 
}

export function loadMovies() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        if(raw === null) return []

        const parsed = JSON.parse(raw)

        return Array.isArray(parsed) ? parsed.filter(isValidMovie) : []
        
    } catch (error) {
        console.error("Could not read saved movies, starting empty.", error)
        return []
        
    }
}

export function saveMovies(movies){
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(movies))
        
    } catch (error) {
        console.error("Could not save movies.", error)
        
    }
}

