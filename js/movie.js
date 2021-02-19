import {getMovieById, getMovieByIdFullPlot} from "./api.js";

var urlParams = new URLSearchParams(window.location.search);

getMovieById(urlParams.get("id"), function(data){
    $(".breadcrumb-item.active").text(data.Title);
    $("#title").text(data.Title);
    $("#title-year").text(data.Year);
    $("#subtext").text(data.Rated + " | " + data.Runtime + " | " + data.Genre + " | " + data.Released + " | " + data.Country);
    $("#poster").attr("src", data.Poster);
    $("#short-plot").text(data.Plot);
    $("#director").find("a").text(data.Director);
    $("#writers").find("a").text(data.Writer);
    $("#actors").find("a").text(data.Actors);
    $("#awards").text(data.Awards);
    $("#country").append(data.Country);
    $("#language").append(data.Language);
    $("#released").append(data.Released);
    $("#box-office").append(data.BoxOffice);
    $("#production").append(data.Production);
});

getMovieByIdFullPlot(urlParams.get("id"), function(data){
    $("#long-plot").text(data.Plot);
});