// Make array of items
var topics = ['fairy', 'dragon', 'troll']

// Function to make initial buttons and append to DOM
function makeBtn() {
    for (var i = 0; i < topics.length; i++) {
        var initialBtn = $('<button>', {id:'gif-button', class:'btn btn-secondary', type:'button'});
        initialBtn.attr('button-name', topics[i]);
        initialBtn.text(topics[i]);
        $('#buttons').append(initialBtn); 
    }
}

// Making new buttons from form entry and append to DOM
$('#btn-form').submit(function(e) {
    e.preventDefault();
    var btnName = $('#button-input').val();
    var newBtn = $('<button>', {id:'gif-button', class:'btn btn-secondary', type:'button'});
    newBtn.attr('button-name', btnName);
    newBtn.text(btnName);
    $('#buttons').append(newBtn);
    topics.push(btnName);
});

 //$('#buttons').html(btnName);

// Seacch Giphy API function and pass it to the DOM
var searchGiphy = function(btnName) {
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=faries&api_key=HY47GKI5iqOwzCMpbRF5QWlTWx4IbYO3&limit=5';
    $.ajax({
        url:queryURL,
        method:'GET'
    }).then(function(response) {
        console.log(response);
        $('#pictures-div').text(response);
    });
};

/*$('#-secondary').on('click', function() {
    var img = $('<img />', {src : });
    img.appendTo('body');
}); */

// Document Ready
$(document).ready(function() {
    makeBtn();
    searchGiphy();
});


//Key: HY47GKI5iqOwzCMpbRF5QWlTWx4IbYO3
 /*var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
xhr.done(function(data) { console.log("success got data", data); });*/
    
    
    
    //console.log(topics);
    //makeBtn();