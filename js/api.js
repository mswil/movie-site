
export function getMovieById(id, callback) {
    $.get("https://www.omdbapi.com/?i=" + id + "&apikey=d4428604", callback);
}

export function getMovieByIdFullPlot(id, callback) {
    $.get("https://www.omdbapi.com/?i=" + id + "&apikey=d4428604&plot=full", callback);
}
