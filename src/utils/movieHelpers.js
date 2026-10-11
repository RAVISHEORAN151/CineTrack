
export function filterMovies(movies, searchText, statusFilter){

    const query = searchText.trim().toLowerCase()

    return movies.filter((movie) => {
        const matchesSearch = query === "" || movie.title.toLowerCase().includes(query) || movie.genres?.some((g) => g.toLowerCase().includes(query));

        const matchesStatus = statusFilter === "all" || (statusFilter === "watched" && movie.watched) || (statusFilter === "unwatched" && !movie.watched)

        return matchesSearch && matchesStatus
    })
}

export function sortMovies(movies, sortBy){
    const copy = [...movies];

    switch(sortBy){
        case "title":
            return copy.sort((a,b) => a.title.localeCompare(b.title))
        
        case "year":
            return copy.sort((a,b) => b.year-a.year)

        case "rating":
            return copy.sort((a,b) => b.Rating - a.Rating)

        case "newest":
        
        default:
            return copy.sort((a,b) => b.id - a.id)
    }


}

export function CalculateStats(movies){
    const totalMovies = movies.length;
    const watchedMovies = movies.filter((movie)=> movie.watched).length;
    const wantToWatchMovies = totalMovies - watchedMovies
    
    const ratedMovies = movies.filter((movie) => Number.isFinite(movie.Rating));

    const averageRating = (ratedMovies.length === 0 ? 0 : ratedMovies.reduce((sum, movie) => sum + Number(movie.Rating),0))/ totalMovies

    return {
        totalMovies,
        watchedMovies,
        wantToWatchMovies,
        averageRating: Number(averageRating.toFixed(1)),
    };

}

export function getRecentMovies(movies, count = 4){
    return [...movies]
    .sort((a,b) => (b.createdAt ?? b.id) - (a.createdAt ?? a.id))
    .slice(0, count)
}

