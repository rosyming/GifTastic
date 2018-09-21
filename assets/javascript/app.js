// Make array of items
var buttonArray = ['fairy', 'dragon', 'troll']

// Function to make initial buttons and append to DOM
function makeBtn() {
    for (var i = 0; i < buttonArray.length; i++) {
        var initialBtn = $('<button>', {id:'gif-button', class:'btn btn-secondary', type:'button'});
        initialBtn.attr('button-name', buttonArray[i]);
        initialBtn.text(buttonArray[i]);
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
});





// Document Ready
$(document).ready(function() {
    makeBtn();
});







// Get Ajax URL set up

