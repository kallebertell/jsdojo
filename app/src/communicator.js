// Oh no.
// All of this is going into global scope.
// How are we going to fix this?

var messengerName = "Bob";

function createShoutMessage(msg) {
	return messengerName + ' shouts: ' + msg + '!!!!111';
}

function createSayMessage(msg) {
	return messengerName + ' says: ' + msg;
}

function shout(msg) {
	alert(createShoutMessage(msg));
}

function say(msg) {
	alert(createSayMessage(msg));
}

var communicator = {
	createShoutMessage: createShoutMessage,
	createSayMessage: createSayMessage,
	shout: shout,
	say: say
}