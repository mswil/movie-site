import { search, getMovieById, getMovieByIdFullPlot } from "./api.js";

var urlParams = new URLSearchParams(window.location.search);
var allSearchResults;

search(urlParams.get("search"), function (data) {

    if (data.Response == "False") {
        $("h1").text("No results matching \"" + urlParams.get("search") + "\" found")
    }

    else {
        $("#search").text("\"" + urlParams.get("search") + "\"");
        allSearchResults = data.Search;
        displaySearchResults(data.Search);
    }
});

function displaySearchResults(searchResults) {
    $("#search-results").empty();

    $("#result-count").text(searchResults.length)

    for (let result of searchResults) {
        //jquery magic look up later. IT JUST WORKS
        var template = $($("#search-result-template").html());

        template.find(".movie-title").text(result.Title);
        template.find(".result-year").text(result.Year);
        template.find(".btn").attr("href", "movie.html?id=" + result.imdbID);

        if (result.Type == "series") {
            template.find(".result-info").append("(TV Series)");
        }

        if (result.Poster == "N/A" || result.Poster == "") {
            template.find(".search-poster").attr("src", "https://www.tu-chemnitz.de/physik/TPSM/bilder/noimageavailable.png");
        }
        else {
            template.find(".search-poster").attr("src", result.Poster);
        }

        $("#search-results").append(template);
    }
};

function sortSearchResults(searchResults, sortType) {

    return searchResults.sort(function (result1, result2) {
        if (sortType == "title-a-z") {
            return result1.Title.localeCompare(result2.Title);
        }
        else if (sortType == "title-z-a") {
            return result2.Title.localeCompare(result1.Title);
        }
        else if (sortType == "year-asc") {
            return result1.Year.localeCompare(result2.Year);
        }
        else if (sortType == "year-des") {
            return result2.Year.localeCompare(result1.Year);
        }

        return result1 - result2;
    });
}

$("#title-a-z").on("click", function (event) {
    var sortedResults = sortSearchResults(allSearchResults, "title-a-z")
    displaySearchResults(sortedResults);
});

$("#title-z-a").on("click", function (event) {
    var sortedResults = sortSearchResults(allSearchResults, "title-z-a")
    displaySearchResults(sortedResults);
});

$("#year-asc").on("click", function (event) {
    var sortedResults = sortSearchResults(allSearchResults, "year-asc")
    displaySearchResults(sortedResults);
});

$("#year-des").on("click", function (event) {
    var sortedResults = sortSearchResults(allSearchResults, "year-des")
    displaySearchResults(sortedResults);
});