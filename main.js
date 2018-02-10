alert("hi");


//Pull a random image
$.getJSON('https://www.reddit.com/r/Memes_Of_The_Dank/.json', function (data) {
//Generate random number from 0-size of array
var randomNumber = randomNumberFromRange(0, data.data.children.length);
 $('<img/>').attr('src', data.data.children[randomNumber].data.url).width(500).appendTo('#images');
});

function randomNumberFromRange(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}


//Check Validity of URL
function IsValidImageUrl(url, callback) {
    var img = new Image();
    img.onerror = function () {
        callback(url, false);
    };
    img.onload = function () {
        callback(url, true);
    };
    img.src = url;
}
