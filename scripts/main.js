var food = 0;
var foodps = 1;
var foodthr = 100;
var wood = 0;
var woodps = 1;
var woodCap = 100;
var stone = 0;
var stoneps = 1;
var stoneCap = 100;
var pop = 1;
var science = 0;
var keepRatio = 0.0;
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Ancient Era';
function incrementResources() {
	food += foodps;
	if (food >= foodthr) {
		food *= keepRatio;
		pop += 1;
	}
	wood += woodps;
	if (wood > woodCap) {
		wood = woodCap;
	}
	stone += stoneps;
	if (stone > stoneCap) {
		stone = stoneCap;
	}
}
setInterval(incrementResources, 1000);