let add = (num1, num2) => {
	return num1 + num2;
}

let subtract = (num3, num4) => {
	return num3 - num4;
}

let multiply = (num5, num6) => {
	return num5 * num6;
}

let divide = (num7, num8) => {
	return num7 / num8;
}

let operate = (operator, num9, num10) => {
	if(operator === '+') {
		return add(num9, num10);
	} else if(operator === '-') {
		return subtract(num9, num10);
	} else if(operator === '*') {
		return multiply(num9, num10);
	} else if(operator === '/') {
		return divide(num9, num10);
	}
}

let displayValue = document.querySelector('#display');

let display = () => {
	displayValue.textContent = 
}




