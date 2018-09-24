// Initial array of items
var topics = ['fairy', 'dragon', 'goblin'];

// Function to clear gifs
function clearGifs() {
    $('#pictures-div').empty();
};

// Function to search Giphy API using ajax and passing it to the DOM
function displayGiphy() {
    var giphy = $(this).attr('button-name');
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + giphy + '&api_key=HY47GKI5iqOwzCMpbRF5QWlTWx4IbYO3&limit=10';

    $.ajax({
        url:queryURL,
        method:'GET'
    }).then(function(response) {
        console.log(response);
        //$('#pictures-div').text(JSON.stringify(response));

        // Clearing Gifs before displaying responses from a new ajax call
        clearGifs();

        // Loop to display each gif from the Giphy response array, assigning attributes, and writing to the DOM
        for (var g = 0; g < response.data.length; g++) {

            // Creating div for each gif
            var gifDiv = $('<div>', {id:'gif-div'});

            // Append to the DOM
            $('#pictures-div').append(gifDiv);

            // Storing result of each gif's rating
            var rating = response.data[g].rating;

            // Creating paragraph tag with result of gif's rating
            var ratingText = $('<p>').text('Rating: ' + rating);

            // Retrieving URL for the image
            var imgURL = response.data[g].images.fixed_width_still.url;
            var dataStill = response.data[g].images.fixed_width_still.url;
            var dataAnimate = response.data[g].images.fixed_width.url;
            
            // Element to hold image with still and animated attributes
            var gifElement = $('<img>', {class:'gif img-responsive'});
            gifElement.attr('src', imgURL);
            gifElement.attr('data-still', dataStill);
            gifElement.attr('data-animate', dataAnimate);
            gifElement.attr('data-state', 'still');
            
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
    $("#btn-form")[0].reset();
});

// Event when buttons are clicked
$(document).on('click', '.btn-secondary', displayGiphy);
makeBtn();

// Animating gifs on clicks
$(document).on('click', '.gif', function() {
    // Saves the current state of the gif
    var state = $(this).attr('data-state');
    
    // Checks to see what the current data state is.  If the data state is still, set the attribute to animate and use the animated source url. Else, if the data state is animate, set the attribute to still and use the still source url.

    if (state === 'still') {
        $(this).attr('src', $(this).attr('data-animate'));
        $(this).attr('data-state', 'animate');
    } else {
        $(this).attr('src', $(this).attr('data-still'));
        $(this).attr('data-state', 'still');
    }
});
