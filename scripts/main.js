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
var curFood = document.querySelector('.curfood');
curFood.textContent = food;
var maxFood = document.querySelector('.maxfood');
maxFood.textContent = foodthr;
var foodIncome = document.querySelector('.foodincome');
maxFood.textContent = foodps;
var curWood = document.querySelector('.curwood');
curWood.textContent = wood;
var maxWood = document.querySelector('.maxwood');
maxWood.textContent = woodCap;
var woodIncome = document.querySelector('.woodincome');
woodIncome.textContent = woodps;
var curStone = document.querySelector('.curstone');
curStone.textContent = stone;
var maxStone = document.querySelector('.maxstone');
maxStone.textContent = stoneCap;
var stoneIncome = document.querySelector('.stoneincome');
stoneIncome.textContent = stoneps;
function incrementResources() {
	food += foodps / 4;
	if (food >= foodthr && pop < popCap) {
		food *= keepRatio;
		pop += 1;
	}
	curPop.textContent = pop;
	maxPop.textContent = popCap;
	curFood.textContent = food;
	maxFood.textContent = foodthr;
	foodIncome.textContent = foodps;
	if (pop >= popCap) {
		curPop.style.color = 'red';
		maxPop.style.color = 'red';
	} else {
		curPop.style.color = '#e0e0e0';
		maxPop.style.color = '#e0e0e0';
	}
	wood += woodps / 4;
	if (wood > woodCap) {
		wood = woodCap;
	}
	curWood.textContent = wood;
	maxWood.textContent = woodCap;
	woodIncome.textContent = woodps;
	if (wood >= woodCap * 0.95) {
		curWood.style.color = '#ffe000';
		maxWood.style.color = '#ffe000';
	} else {
		curWood.style.color = '#e0e0e0';
		maxWood.style.color = '#e0e0e0';
	}
	stone += stoneps / 4;
	if (stone > stoneCap) {
		stone = stoneCap;
	}
	curStone.textContent = stone;
	maxStone.textContent = stoneCap;
	stoneIncome.textContent = stoneps;
	if (stone >= stoneCap * 0.95) {
		curStone.style.color = '#ffe000';
		maxStone.style.color = '#ffe000';
	} else {
		curStone.style.color = '#e0e0e0';
		maxStone.style.color = '#e0e0e0';
	}
}
setInterval(incrementResources, 250);