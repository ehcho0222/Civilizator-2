var food = 10;
var prod = 1;
var prodpt = 2;
var pop = 10;
var popCap = 25;
var science = 1;
var scipt = 1;
var culture = 1;
var culpt = 1;
var gold = 10;
var goldCap = 100;
var goldpt = 10;
var era = 0;
var eras = ['Ancient Era', 'Classical Era', 'Medieval Era', 'Renaissance Era', 'Industrial Era', 'Modern Era', 'Future'];
var buildingBonus = [0, 0, 0, 0, 0, 0];

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
var curScience = document.querySelector('.cursci');
curScience.textContent = scipt;
var scienceIncome = document.querySelector('.science');
scienceIncome.textContent = science;
var curCulture = document.querySelector('.curcul');
curCulture.textContent = culture;
var cultureIncome = document.querySelector('.cpt');
cultureIncome.textContent = culpt;
var curGold = document.querySelector('.curgold');
curGold.textContent = culture;
var maxGold = document.querySelector('.maxgold');
curGold.textContent = goldCap;
var goldIncome = document.querySelector('.gpt');
goldIncome.textContent = goldpt;

function incrementResources() {
	pop += food / 20;
	if (pop > popCap) {
		pop = popCap;
	}
	prod += prodpt;
	science += scipt;
	culture += culpt;
	gold += goldpt;
	if (gold > goldCap) {
		gold = goldCap;
	}
}

function displayResources() {
	curPop.textContent = Math.round(pop * 10) / 10;
	maxPop.textContent = popCap;
	foodIncome.textContent = Math.round(food * 10) / 10;
	if (food < 0) {
		foodIncome.style.color = 'red';
	} else if (food === 0) {
		foodIncome.style.color = '#ffe000';
	} else if (food / pop < 0.6) {
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
	curProd.textContent = Math.round(prod * 10) / 10;
	prodIncome.textContent = Math.round(prodpt * 10) / 10;
	curScience.textContent = Math.round(science * 10) / 10;
	scienceIncome.textContent = Math.round(scipt * 10) / 10;
	curCulture.textContent = Math.round(culture * 10) / 10;
	cultureIncome.textContent = Math.round(culpt * 10) / 10;
	curGold.textContent = Math.round(gold);
	maxGold.textContent = Math.round(goldCap);
	goldIncome.textContent = Math.round(goldpt);
	curEra.textContent = eras[era];
}

function calcResources() {
	food = 10 - (pop / 10) + buildingBonus[0];
	prodpt = 1 + (pop / 10) + buildingBonus[1];
	scipt = 0.5 + (pop / 20) + buildingBonus[2];
	culpt = 0.5 + (pop / 20) + buildingBonus[3];
	goldpt = 10 + (pop * buildingBonus[4]);
}

function nextTurn() {
	incrementResources();
	calcResources();
	displayResources();
}

function setButtons() {
	var endTurn = document.querySelector('.endturn');
	endTurn.addEventListener('click', nextTurn);
}

displayResources();
setButtons();