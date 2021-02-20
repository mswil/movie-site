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
        template.find(".poster").attr("src", result.Poster);
        
        $("#search-results").append(template);
    }

});



