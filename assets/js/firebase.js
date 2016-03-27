var dataRef = new Firebase('https://funbreak.firebaseIO.com');

var name = "";
var track = "";

$("#sendButton").on("click", function() {

	name = $('#studentName').val().trim();
	track = $('#trackName').val().trim();

	// Code for the push
	dataRef.push({
		name: name,
		track: track,
		dateAdded: Firebase.ServerValue.TIMESTAMP
	})
	// Don't refresh the page!
	return false;
});

dataRef.on("child_added", function(childSnapshot) {
	// Log everything that's coming out of snapshot
	console.log(childSnapshot.val().name);
	console.log(childSnapshot.val().track);
	console.log(childSnapshot.val().dateAdded);
	
	// full list of items to the well
   				
		$('#songRequest').append("<div class='well'><span id='name'> "+childSnapshot.val().name+" </span><span id='email'> "+childSnapshot.val().track+" </span></div>")
  

// Handle the errors
}, function(errorObject){
	//console.log("Errors handled: " + errorObject.code)
});

