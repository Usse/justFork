
var math = require('../modules/sum.js');
var $ = require('../jquery.js');


$(document).ready(function() {

	$('body').append("<h3>" + math.sum(3,4) + "</h3>");
	$('body').append("<h3>" + math.sub(3,4) + "</h3>");

});
