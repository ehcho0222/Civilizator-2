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
var popCap = 6;
var science = 0;
var keepRatio = 0.0;
var era = document.querySelector('h1');
era.textContent = 'Ancient Era';
var curPop = document.querySelector('.curpop');
curPop.textContent = pop;
var maxPop = document.querySelector('.maxpop');
maxPop.textContent = popCap;
function incrementResources() {
	food += foodps;
	if (food >= foodthr && pop < popCap) {
		food *= keepRatio;
		pop += 1;
	}
	curPop.textContent = pop;
	maxPop.textContent = popCap;
	if (pop >= popCap) {
		curPop.style.color = 'red';
		maxPop.style.color = 'red';
	} else {
		curPop.style.color = '#e0e0e0';
		maxPop.style.color = '#e0e0e0';
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