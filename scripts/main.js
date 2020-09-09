var food = 0;
var prod = 0;
var prodpt = 1;
var stone = 0;
var stoneps = 1;
var stoneCap = 100;
var pop = 10;
var popCap = 25;
var science = 2;
var era = 0;
var eras = ['Ancient Era', 'Classical Era', 'Medieval Era', 'Renaissance', 'Industrial Era', 'Modern Era', 'Future'];

var curEra = document.querySelector('h1');
era.textContent = 'Ancient Era';
var curPop = document.querySelector('.curpop');
curPop.textContent = pop;
var maxPop = document.querySelector('.maxpop');
maxPop.textContent = popCap;
var foodIncome = document.querySelector('.foodincome');
foodIncome.textContent = food;
var curProd = document.querySelector('.curprod');
curProd.textContent = prod;
var prodIncome = document.querySelector('.prodincome');
prodIncome.textContent = prodpt;
var scienceIncome = document.querySelector('.science');
scienceIncome.textContent = science;

function incrementResources() {
	prod += prodpt;
}

function displayResources() {
	curPop.textContent = pop;
	maxPop.textContent = popCap;
	foodIncome.textContent = Math.round(food * 10) / 10;
	if (food < 0) {
		foodIncome.style.color = 'red';
	} else if (food === 0) {
		foodIncome.style.color = '#ffe000';
	} else if (pop / food > 0.6) {
		foodIncome.style.color = '#ffe000';
	} else {
		foodIncome.style.color = '#e0e0e0';
	}
	if (pop >= popCap) {
		curPop.style.color = 'red';
		maxPop.style.color = 'red';
	} else {
		curPop.style.color = '#e0e0e0';
		maxPop.style.color = '#e0e0e0';
	}
	curProd.textContent = Math.round(prod);
	prodIncome.textContent = Math.round(prodpt * 10) / 10;
	scienceIncome.textContent = Math.round(science * 10) / 10;
	curEra.textContent = eras[era];
}

function nextTurn() {
	incrementResources();
	displayResources();
}

function setButtons() {
	var endTurn = document.querySelector('.endturn');
	endTurn.addEventListener('click', nextTurn);
}

displayResources();
setButtons();