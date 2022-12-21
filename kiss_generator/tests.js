function test_one(output_array)
{
	output_array.sort();									//предварительная сортировка
	//считаем кол-во повторений каждого числа в массиве
	var result_obj = {};
	for (var i = 0; i < output_array.length; ++i)
	{
		var a = output_array[i];
		if (result_obj[a] != undefined)
			++result_obj[a];
		else
			result_obj[a] = 1;
	}

	var obj_arr = [];
	var obj_iterator = 0;
	for (var obj in result_obj) {
		obj_arr[obj_iterator] = { y: result_obj[obj] };
		obj_iterator++;
	}

	newCanvasDrawer(result_obj, obj_arr);
}

function test_two(output_array)
{
	var result = [];

	obj_arr = [];

	for (var i = 0; i < output_array.length; i++) {
		obj_arr[i] = {x: output_array[i], y: output_array[i + 1]}
	}

	canvasPoints(obj_arr);
}

function test_three(output_array)
{
	var binary_str = '';
	for (var i = 0; i < output_array.length; i++) {
		binary_str += output_array[i].toString(2);								//переводим всю последовательность в бинарный вид и записываем все в строку
	}
	return binary_str;
}

function test_three_1(output_array)
{
	var binary_str = test_three(output_array);

	var count_zero = binary_str.split(/[0]/).length - 1;						//считаем в бинарной последовательности кол-во 0
	var count_one = binary_str.split(/[1]/).length - 1;							//считаем в бинарной последовательности кол-во 1

	var result = [count_zero, count_one];
	obj_arr = [
		{label: '0', y: count_zero},
		{label: '1', y: count_one},
	]
	newCanvasDrawer(result, obj_arr);
}

function test_three_2(output_array)
{
	var binary_str = test_three(output_array);

	var count_zero_zero = binary_str.split(/[00]/).length - 1;				//считаем в бинарной последовательности кол-во пар 00
	var count_zero_one = binary_str.split(/[01]/).length - 1;
	var count_one_zero = binary_str.split(/[10]/).length - 1;
	var count_one_one = binary_str.split(/[11]/).length - 1;

	var result = [count_zero_zero, count_zero_one, count_one_zero, count_one_one];

	obj_arr = [
		{label: '00', y: count_zero_zero},
		{label: '01', y: count_zero_one},
		{label: '10', y: count_one_zero},
		{label: '11', y: count_one_one},
	]
	newCanvasDrawer(result, obj_arr);
}

function test_three_3(output_array)
{
	var binary_str = test_three(output_array);

	var count_zero_zero_zero = binary_str.split(/[000]/).length - 1;
	var count_zero_zero_one = binary_str.split(/[001]/).length - 1;
	var count_zero_one_zero = binary_str.split(/[10]/).length - 1;
	var count_zero_one_one = binary_str.split(/[011]/).length - 1;

	var count_one_zero_zero = binary_str.split(/[00]/).length - 1;
	var count_one_zero_one = binary_str.split(/[101]/).length - 1;
	var count_one_one_zero = binary_str.split(/[110]/).length - 1;
	var count_one_one_one = binary_str.split(/[111]/).length - 1;

	var result = [count_zero_zero_zero, count_zero_zero_one, count_zero_one_zero, count_zero_one_one, count_one_zero_zero, count_one_zero_one, count_one_one_zero, count_one_one_one];

	obj_arr = [
		{label: '000', y: count_zero_zero_zero},
		{label: '001', y: count_zero_zero_one},
		{label: '010', y: count_zero_one_zero},
		{label: '011', y: count_zero_one_one},
		{label: '100', y: count_one_zero_zero},
		{label: '101', y: count_one_zero_one},
		{label: '110', y: count_one_one_zero},
		{label: '111', y: count_one_one_one},
	]
	newCanvasDrawer(result, obj_arr);
}

function test_four(output_array)
{
	var binary_str = [];

	for (var i = 0; i < output_array.length; i++) {
		binary_str += output_array[i].toString(2);								//переводим всю последовательность в бинарный вид и записываем все в строку
	}
	binary_str = binary_str.split('');

	// Алгоритм Берлекэмпа-Мэсси
	var s = [];
	for (var i = 0; i < binary_str.length; i++) {
		s[i] = parseInt(binary_str[i]);
	}
	var n = s.length;
	var c = [];
	var b = [];

	for(var i = 0; i < n; i++) {
		c[i] = 0;
		b[i] = 0;
	}
	c[0] = 1;
	b[0] = 1;

	var L = 0;
	var m = -1;
	var N = 0;

	var L_arr = [];

	while (N < n) {
		var suma = 0;

		for (var i = 1; i < L + 1; i++) {
			suma = (suma + c[i] * s[N - i]) % 2;
		}
		var d = (s[N] + suma) % 2;

		if(d == 1) {
			var t = [];
			for (var i = 0; i < n; i++) {
				t[i] = c[i];
			}

			for (var j = 0; j < n - N + m; j++) {
				c[N - m + j] = (c[N - m + j] + b[j]) % 2;
			}

			if (L <= N / 2) {
				L = N + 1 - L;
				m = N;
				var b = [];
				for (var i = 0; i < n; i++) {
					b[i] = t[i];
				}
			}
		}
		L_arr[N] = L;
		N++;
	}

	newCanvasDrawer(L_arr);
}

function test_five(numbers)
{
	var monotonies = [];
	const numbersLength = numbers.length;
	var currentMonotony = [];
	var isAscending = null;

	currentMonotony.push(numbers[0], numbers[1]);

	for (var i = 2; i < numbersLength; i++) {
		const current = numbers[i];
		if (isAscending === null) {
			if (currentMonotony.length >= 2) {
				if (currentMonotony[currentMonotony.length - 1] ===	currentMonotony[currentMonotony.length - 2])
				{
					isAscending = null;
					currentMonotony.push(current);
					continue;
				}
				isAscending = currentMonotony[currentMonotony.length - 1] > currentMonotony[currentMonotony.length - 2];
			} else {
				currentMonotony.push(current);
				continue;
			}
		}

		if (current === currentMonotony[currentMonotony.length - 1])
		{
			currentMonotony.push(current);
			continue;
		}

		if (current > currentMonotony[currentMonotony.length - 1])
		{
			if (isAscending) {
			  currentMonotony.push(current);
			} else {
				monotonies.push(currentMonotony);
				currentMonotony = [];
				currentMonotony.push(current);
				isAscending = null;
			}
		} else {
			if (isAscending)
			{
				monotonies.push(currentMonotony);
				currentMonotony = [];
				currentMonotony.push(current);
				isAscending = null;
			} else {
				currentMonotony.push(current);
			}
		}
	}
	monotonies.push(currentMonotony);

	var result = [];
	for (var i = 0; i < monotonies.length; i++) {
		result[i] = monotonies[i].length;
	}

	newCanvasDrawer(result);
}

function test_six(output_array)
{
	const output_arrayAfterBinaryNormalization = Array.from(
		output_array.map((x) => new Number(x).toString(2).padStart(16, "0")).join("")
	).map((x) => (Number.parseInt(x) ? 1 : -1));

	const denominatorSum = output_arrayAfterBinaryNormalization.reduce(
		(sum, num) => (sum += num ** 2),
		0
	);
	const output_arrayLength = output_arrayAfterBinaryNormalization.length;
	const shiftedNumbersArray = [];

	// получаем массив сдвигов
	for (let i = 0; i <= output_arrayLength; i++) {
		const shiftedNumbers = [];
		for (let j = 0; j < output_arrayLength; j++) {
			shiftedNumbers.push(
				output_arrayAfterBinaryNormalization[(i + j) % output_arrayLength]
			);
		}
		shiftedNumbersArray.push(shiftedNumbers);
	}

	const numerators = [];
	for (const shiftedArray of shiftedNumbersArray) {
		const numeratorSum =
			shiftedArray.reduce(
				(sum, num, i) => (sum += num * output_arrayAfterBinaryNormalization[i]),
				0
			) / denominatorSum;
		numerators.push(Math.round((numeratorSum + Number.EPSILON) * 100) / 100);
	}

	newCanvasDrawer(numerators);
}

function test_seven(output_array)
{
	var size = output_array.length;
	var m = size + ( size % 2 ); //размер выходного буфера должен быть четным
	var out = new Array( m );
	var pid = ( 2.0 * Math.PI ) / size;
	
	var r, i, w, t;

	//высчитываем среднее значение по всему интервалу
	//для последующей нормализации
	var mv = 0;
	for ( t = 0; t < size; t++ ) mv += output_array[t];
	mv = mv / size;

	for ( w = 0; w < m; w++ ) {
		var a = w * pid;
		r = 0;
		i = 0;
		for ( t = 0; t < size; t++ ) {
			//нормализация значения из интервала
			var v = output_array[t] - mv;
			var ta = a * t;
			r += v * Math.cos( ta );
			i += v * Math.sin( ta );
		}
		out[w] = Math.sqrt( r * r + i * i ) / size;
	}

	newCanvasDrawer(out);
}

function drawTest(my_array, gridScale)
{
	var myBarchart = new Barchart(
		{
			canvas:myCanvas,
			padding:30,
			gridScale:gridScale,
			gridColor: '#000',
			data:my_array,
			colors:['#bc500b','#bca500']
		}
	);
	myBarchart.draw();
}

function newCanvasDrawer(my_array, obj_arr = null)
{
	if(obj_arr == null)
	{
		var obj_arr = [];

		for (var i = 0; i < my_array.length; i++) {	//array to object
			obj_arr[i] = { y: my_array[i] };
		}
	}

	var chart = new CanvasJS.Chart("chartContainer", {
		axisY: {
			minimum: 0,
		},
		animationEnabled: true,
		exportEnabled: true,
		theme: "light", // "light1", "light2", "dark1", "dark2"
		data: [{
			type: "column",
			indexLabelFontColor: "#5A5757",
			indexLabelPlacement: "outside",
			dataPoints: obj_arr,
		}]
	});
	chart.render();
}

function canvasPoints(my_obj)
{
	var chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: false,
		axisY:{
			// minimum: 0,
		},
		data: [{
			type: "scatter",
			showInLegend: true,
			dataPoints: my_obj,
		}]
	});
	chart.render();
}