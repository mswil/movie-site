$('.toast').toast({autohide:true, delay:2000});


$("#search-form").on("submit", function(event){
    
    event.preventDefault();

    var searchSerial = $('#search-form').serialize(); // search=dora%20the

    if($("#search-form input").val() == ""){
        $('.toast').toast('show');
    }
    else {
        location.href="search.html?" + searchSerial;
    }
    
});