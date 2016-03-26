var baseURL = 'https://api.spotify.com/v1/search?q=';

function makeRequest(songValue){
	var queryURL = baseURL + songValue + '&type=track';

	$.ajax({url: queryURL, method: 'GET'}).done(function(response){
		alert('done!');
		//response.items[itterate]
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
		$('.modalSearch').on('click', function(event){
		console.log(this);

		});
	});
	}

$('#search').on('click', function(){
	$('#songSearchResults').empty();
	var songValue = $('#query').val().replace(' ', '').trim();

	makeRequest(songValue);

	return false;
});

//Features:
	//Contain each search result in a div and make that div clickable
	//Div is clicked, I want to redirect to the main page with the text already filled out ready to search
		//Div click should close the modal
		//Clear search results so when I go search again there is nothing there
	//User submits data, I want to capture with firebase
	//Data captured by firebase I want to send back to application 
		//Send data in a div to show all the requested songs by students
		//Contain results in array and randomize selection and send selection to be timer audio
	//Create form for fun facts
	//Send data to firebase
	//Send data back to show in a div
	//Customize timer input time
		//Create dropdown of all available timer options
	//Create nav tabs to seperate pages

// mySound = new Audio(['https://p.scdn.co/mp3-preview/f59a6b5f638815d9116c84d21d8bbf01ffda0892']);
// function playAudio(){
// 	mySound.play();
// }






