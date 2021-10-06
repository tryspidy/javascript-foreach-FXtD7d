let colors = ['red', 'blue', 'green'];
// idx and sourceArr optional; sourceArr == colors
colors.forEach(function(color, idx, sourceArr) {
	console.log(color, idx, sourceArr)
});
// Output:
// red 0 ['red', 'blue', 'green']
// blue 1 ['red', 'blue', 'green']
// green 2 ['red', 'blue', 'green']
