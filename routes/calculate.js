exports.calci = function(req, res) {
	
	var num1 = Number(req.param('num1'));	
	var num2 = Number(req.param('num2'));
	var opr = req.param('opr');
	
	if (opr === "+") {
		res.send("" + Number(num1 + num2));
	}
	if (opr === '-') {
		res.send("" + Number(num1 - num2));
	}
	if (opr === '*') {
		res.send("" + Number(num1 * num2));
	}
	if (opr === '/') {
		if (num2 === 0) {
			res.send("Division is not possible, 2nd number is 0");
		} else {
			res.send("" + Number(num1 / num2));
		}
	}
};