function xn_generator(start_value, length)
{
	xn = [];
	x = start_value;
	xn.push(x);
	for (var i = 0; i < length - 1; i++) {
		x = (69069 * x + 1) % 2 ** 32;
		xn.push(x);
	}
	console.log('xn = ' + xn);
	return xn;
}

function un_generator(start_value, length)
{
	un = [];
	u = start_value;			//u(n-1)
	cn = 2*u % 2**32;			//rand cn
	un.push(u);
	for (var i = 0; i < length - 1; i++) {
		u2 = (2*u + cn) % 2**32;		//u(n-2)
		u = (2*u + u2 + cn) % 2 ** 32;
		un.push(u);
	}
	console.log('un = ' + un);
    return un;
}

function start()
{
	const start_value = parseInt(document.getElementById('start_value').value|0);
	const length = parseInt(document.getElementById('length').value|0);
	const test_number = parseInt(document.getElementById('test_number').value);
	xn_arr = xn_generator(start_value, length);
	un_arr = un_generator(start_value, length);

	const result = [];

	for (var i = 0; i < length; i++)
	{
		const x = xn_arr[i] === undefined ? 0 : xn_arr[i];
		const u = un_arr[i] === undefined ? 0 : un_arr[i];

		result.push((x + u) % 2 ** 32);
	}

	switch(test_number) {
		case 1:
			test_one(result);
			break;
		case 2:
			test_two(result);
			break;
		case 31:
			test_three_1(result);
			break;
		case 32:
			test_three_2(result);
			break;
		case 33:
			test_three_3(result);
			break;
		case 4:
			test_four(result);
			break;
		case 5:
			test_five(result);
			break;
		case 6:
			test_six(result);
			break;
		case 7:
			test_seven(result);
			break;
		default:
			alert('Error');
	}
}