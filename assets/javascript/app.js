// Initial array of items
var topics = ['fairy', 'dragon', 'troll'];

// Function to clear gifs
function clearGifs () {
    $('#pictures-div').empty();
};

// Function to search Giphy API using ajax and passing it to the DOM
function displayGiphy () {
    var giphy = $(this).attr('button-name');
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + giphy + '&api_key=HY47GKI5iqOwzCMpbRF5QWlTWx4IbYO3&limit=10';

    $.ajax({
        url:queryURL,
        method:'GET'
    }).then(function(response) {
        console.log(response);
        //$('#pictures-div').text(JSON.stringify(response));
        clearGifs();
        for (var g = 0; g < response.data.length; g++) {

            // Creating div for each gif
            var gifDiv = $('<div>', {id:'gif-div'});

            // Append to the DOM
            $('#pictures-div').append(gifDiv);

            // Sotring result of each gif's rating
            var rating = response.data[g].rating;

            // Creating paragraph tag with result of gif's rating
            var ratingText = $('<p>').text('Rating: ' + rating);

            // Retrieving URL for the image
            var imgURL = response.data[g].images.fixed_width_still.url;
            
            // Element ot hold image
            var gifElement = $('<img>').attr('src', imgURL);
            
            // Append to the gif divs
            gifDiv.append(gifElement);
            gifDiv.append(ratingText);
            
        }
    });
}

// Function to make initial buttons and append to DOM
function makeBtn() {
    // Emptying the DOM for buttons to not reload the same buttons from array
    $('#buttons').empty();

    // Looping to make buttons for each item in the array
    for (var i = 0; i < topics.length; i++) {
        var initialBtn = $('<button>', {id:'gif-button', class:'btn btn-secondary', type:'button'});
        initialBtn.attr('button-name', topics[i]);
        initialBtn.text(topics[i]);
        $('#buttons').append(initialBtn); 
    }
}

// Making new buttons from form entry and append to DOM
$('#btn-form').submit(function(event) {
    event.preventDefault();
    var btnName = $('#button-input').val().trim();
    topics.push(btnName);
    console.log(topics);
    makeBtn();
});

// Event when buttons are clicked
$(document).on('click', '.btn-secondary', displayGiphy);
makeBtn();








//Key: HY47GKI5iqOwzCMpbRF5QWlTWx4IbYO3
 /*var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
xhr.done(function(data) { console.log("success got data", data); });*/
    
    
    
