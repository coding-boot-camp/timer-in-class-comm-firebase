var dataRef = new Firebase('https://funbreak.firebaseIO.com');

$("#addUser").on("click", function() {

	name = $('#nameinput').val().trim();
	email = $('#emailinput').val().trim();
	age = $('#ageinput').val().trim();
	comment = $('#commentinput').val().trim();
	// Code for the push
	dataRef.push({
		name: name,
		email: email,
		age: age,
		comment: comment,
		dateAdded: Firebase.ServerValue.TIMESTAMP
	})
	// Don't refresh the page!
	return false;
});

