// choinka krzywa
/*
function drawTree(h) {
	for (var i = 1; i <= h; i++) {
		var star = '';
		for (var j = 1; j <= i; j++) {
			star  += '*';
		};
		console.log(star);
	}

};

drawTree(7);
*/
// choinka prosta

function drawTree(h) {
	for (var i = 1; i <= h; i++) {
		var space = '';
		var star = '';
		for (var j = 1; j <= (h - i); j++) {
			space += ' ';
		};
		for (var k = 1; k <= (2 * i - 1); k++) {
			star += '*';
		};
		console.log(space + star);
	}

};

drawTree(7); 



