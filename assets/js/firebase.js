var dataRef = new Firebase('https://funbreak.firebaseIO.com');

var name = "";
var track = "";
var winningAudio = [];

$("#sendButton").on("click", function() {

	name = $('#studentName').val().trim();
	track = $('#trackName').val().trim();

	dataRef.push({
		name: name,
		track: track,
		dateAdded: Firebase.ServerValue.TIMESTAMP
	})

	return false;
});

dataRef.on("child_added", function(childSnapshot) {
	// console.log(childSnapshot.val().name);
	// console.log(childSnapshot.val().track);
	// console.log(childSnapshot.val().dateAdded);
	var trackAudioName = childSnapshot.val().track
	winningAudio.push(trackAudioName);
		// Items appended to well		
		$('#songRequest').append("<div class='well'><span id='name'> "+childSnapshot.val().name+" just requested </span><span id='email'> "+childSnapshot.val().track+" </span></div>")

}, function(errorObject){
	console.log("Errors handled: " + errorObject.code)
});

//needs work but keep this around
function randomAudioWin(){
	for(var i = 0; i < winningAudio.length;i++){
		var lotteryNumber = (Math.floor(Math.random() * winningAudio.length + 1));
		if (lotteryNumber == i) {
			return winningAudio[i]
		} 
	}
}

console.log();









