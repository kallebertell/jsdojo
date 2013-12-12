

// PRINTER FUNCTIONALITY 

function print(msg, element) {
	$(element).html(msg);
}



// CALCULATOR FUNCTIONALITY

function add(a, b) {
	return parseInt(a, 10) + parseInt(b, 10);
}

function addAndPrint(a, b, element) {
	var result = add(a, b);
	print(result, element);
}
