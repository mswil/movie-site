
export function getMovieById(id, callback) {
    $.get("http://www.omdbapi.com/?i=" + id + "&apikey=d4428604", callback);
}

export function getMovieByIdFullPlot(id, callback) {
    $.get("http://www.omdbapi.com/?i=" + id + "&apikey=d4428604&plot=full", callback);
}
