$.get("https://www.omdbapi.com/?i=tt3896198&apikey=d4428604", function(data,status){
    $(".carousel-item:first").css("background-image", "url(" + data.Poster + ")");
});

// $.get("https://www.omdbapi.com/?i=tt0120338&apikey=d4428604", function(data,status){
//     console.log($(".card-img:first"));
//     $(".card-img-top:first").attr("src", data.Poster);
// });

var movies = ["tt0120338", "tt1291150", "tt0172495", "tt0128853", "tt7547410", "tt3896198"];

for(var i = 0; i < 6; i++){
    $.get("https://www.omdbapi.com/?i=" + movies[i] + "&apikey=d4428604", function(data, status){
        var index = movies.indexOf(data.imdbID); 
        var portfolio = $(".portfolio-item").eq(index);
        
        portfolio.find(".card-img-top").attr("src", data.Poster);
        portfolio.find(".card-title a").text(data.Title);
        portfolio.find(".card-text").text(data.Plot);
        portfolio.find("a").attr("href", "movie.html?id=" + data.imdbID);
    });
}

