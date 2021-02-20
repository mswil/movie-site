
$("#search-form").on("submit", function(event){
    
    event.preventDefault();

    var searchSerial = $('#search-form').serialize(); // search=dora%20the

    location.href="search.html?" + searchSerial;

});