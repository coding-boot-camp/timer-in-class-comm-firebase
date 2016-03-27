var baseURL = 'https://api.spotify.com/v1/search?q=';

function makeRequest(songValue){
	var queryURL = baseURL + songValue + '&type=track';

	$.ajax({url: queryURL, method: 'GET'}).done(function(response){
		for (var i = 0; i < response.tracks.items.length; i++) {
			// console.log(response.tracks.items[i]);
			// console.log(response.tracks.items[i].artists[0].name);
			// console.log(response.tracks.items[i].name)
			// console.log(response.tracks.items[i].preview_url);
			$('#songSearchResults').append('<h2>Artist: ' + response.tracks.items[i].artists[0].name + '</h2>');
			$('#songSearchResults').append('<button class="modalSearch"> ' + response.tracks.items[i].name + '</button>');
			$('#songSearchResults').append('<audio controls>' + '<source src=' + response.tracks.items[i].preview_url + '>' + '</audio>');

		}
		// console.log(queryURL);
		// console.log(response);
		});
	}

function requestWinningAudio(){
	var winningAudio = randomAudioWin();
	var queryURL = baseURL + winningAudio + '&type=track';
	$.ajax({url: queryURL, method: 'GET'}).done(function(response){

	})
}	
	
$('#search').on('click', function(){
	$('#songSearchResults').empty();
	var songValue = $('#query').val().replace(' ', '').trim();

	makeRequest(songValue);

	return false;
});

//Features:
	//In track search, contain all characteristics in objects
		//choose "this" and we should be able to direct our "preview_url" bank
		//we need an array of all "preview_urls" (this will allow us to push this link to our audio constructor and set it as the winning song)
		//Clear search results so when I go search again there is nothing there
	//Create form for fun facts (connect with firebase and output results)
	//Customize timer input time
		//Create dropdown of all available timer options
	//Styling to timer, each tab page, modal
	//Design logo for funBreak, have these logos across different areas of the page as click buttons


// mySound = new Audio(['https://p.scdn.co/mp3-preview/f59a6b5f638815d9116c84d21d8bbf01ffda0892']);
// function playAudio(){
// 	mySound.play();
// }






