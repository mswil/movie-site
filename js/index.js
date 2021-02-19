
// import {getMovieById, getMovieByIdFullPlot} from "./api.js";

// Carousel items 
$(".carousel-item:first").css("background-image", "url(https://www.denofgeek.com/wp-content/uploads/2019/04/guardians_of_the_galaxy_2_large.jpg?fit=1688%2C949)").css("background-position", "center 20%");
$(".carousel-item:eq(1)").css("background-image", "url(https://www.mkgallery.org/media/images/PayoffQuad.width-1500.jpg)").css("background-position", "center 20%");
$(".carousel-item:eq(2)").css("background-image", "url(https://images6.alphacoders.com/336/thumb-1920-336491.jpg)").css("background-position", "center 20%");

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

