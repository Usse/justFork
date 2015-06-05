// exports.simpleMath = function (a,b) { 
// 	return a+b;
// }


// exports.simpleMath = {
// 	sum: function(a,b) {
// 		return a+b;
// 	},
// 	sub : function(a,b) {
// 		return a-b;
// 	}
// };




var math = {
	adder : 10,

	sum: function(a,b) {
		return a+b+math.adder;
	},
	sub : function(a,b) {
		return a-b+math.adder;
	}
};

exports.sum = math.sum;
exports.sub = math.sub;