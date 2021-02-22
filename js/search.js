import { search, getMovieById, getMovieByIdFullPlot } from "./api.js";

var urlParams = new URLSearchParams(window.location.search);

search(urlParams.get("search"), function (data) {
    $("#result-count").append(data.Search.length)
    
    $("#search").text("\"" + urlParams.get("search") + "\"");
    console.log(data);

    for(let result of data.Search) {
        //jquery magic look up later. IT JUST WORKS
        var template = $($("#search-result-template").html());

        template.find(".movie-title").text(result.Title);
        template.find(".result-year").text(result.Year);
        template.find(".btn").attr("href", "movie.html?id=" + result.imdbID);

        if(result.Type == "series"){
            template.find(".result-info").append("(TV Series)");
        }

        if(result.Poster == "N/A" || result.Poster == ""){
            template.find(".poster").attr("src", "https://www.tu-chemnitz.de/physik/TPSM/bilder/noimageavailable.png");
        }
        else {
            template.find(".poster").attr("src", result.Poster);
        }
        
        $("#search-results").append(template);
    }

});



