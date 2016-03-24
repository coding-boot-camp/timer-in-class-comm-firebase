// var queryURL = 'https://api.spotify.com/v1/search?q=%22guitar%20madness%22&type=track';
var baseURL = 'https://api.spotify.com/v1/search?q=';

function makeRequest(songValue){
	var queryURL = baseURL + songValue + '&type=track';

	$.ajax({url: queryURL, method: 'GET'}).done(function(response){
		alert('done!');
		console.log(response);
		console.log(response.tracks.items[0].name);
		console.log(response.tracks.items[0].artists[0].name);
		console.log(response.tracks.items[0].preview_url);

	});
	}

$('#search').on('click', function(){
	var songValue = $('#query').val().replace(' ', '').trim();

	makeRequest(songValue);

	return false;
});






