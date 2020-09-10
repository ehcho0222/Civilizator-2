var food = 10;
var prod = 1;
var prodpt = 2;
var pop = 10;
var popCap = 25;
var army = 4;
var armyCap = 10;
var armyRealCap = 10;
var armypt = 0.5;
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
var commCosts = [20, 150, 800, 3500, 15000, 60000, 200000];
var comm1Effect = [2, 12, 60, 250, 1000, 3500, 10000];
var comm2Effect = [1, 5, 25, 100, 400, 1500, 4000];
var comm3Effect = [2, 10, 50, 200, 800, 3000, 8000];

var curEra = document.querySelector('h1');
era.textContent = 'Ancient Era';

var curPop = document.querySelector('.curpop');
curPop.textContent = pop;
var maxPop = document.querySelector('.maxpop');
maxPop.textContent = popCap;
var popIncome = document.querySelector('.poppt');
popIncome.textContent = food / 20;

var curArmy = document.querySelector('.curarmy');
curArmy.textContent = army;
var maxArmy = document.querySelector('.maxarmy');
maxArmy.textContent = armyCap;
var armyIncome = document.querySelector('.armypt');
armyIncome.textContent = armypt;

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
	pop += food / 10;
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
	army += armypt;
	if (army > armyRealCap) {
		army = armyRealCap;
	}
}

function displayResources() {
	curPop.textContent = Math.round(pop * 10) / 10;
	maxPop.textContent = popCap;
	foodIncome.textContent = Math.round(food * 10) / 10;
	popIncome.textContent = Math.round(food) / 10;
	if (food < 0) {
		foodIncome.style.color = 'red';
		popIncome.style.color = 'red';
	} else if (food === 0) {
		foodIncome.style.color = '#ffe000';
		popIncome.style.color = '#ffe000';
	} else if (food / pop < 0.3) {
		foodIncome.style.color = '#ffe000';
		popIncome.style.color = '#ffe000';
	} else {
		foodIncome.style.color = '#e0e0e0';
		popIncome.style.color = '#e0e0e0';
	}
	if (pop >= popCap) {
		curPop.style.color = 'red';
		maxPop.style.color = 'red';
	} else {
		curPop.style.color = '#e0e0e0';
		maxPop.style.color = '#e0e0e0';
	}
	
	curArmy.textContent = Math.round(army * 10) / 10;
	maxArmy.textContent = Math.round(armyRealCap * 10) / 10;
	armyIncome.textContent = Math.round(armypt * 100) / 100;
	
	if (army >= armyRealCap) {
		curArmy.style.color = 'red';
		maxArmy.style.color = 'red';
	} else {
		curArmy.style.color = '#e0e0e0';
		maxArmy.style.color = '#e0e0e0';
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
	if (gold >= goldCap * 0.9) {
		curGold.style.color = '#ffe000';
		maxGold.style.color = '#ffe000';
	} else {
		curGold.style.color = '#e0e0e0';
		maxGold.style.color = '#e0e0e0';
	}
	curEra.textContent = eras[era];
}

function calcResources() {
	food = 14 - (pop * 0.4) + buildingBonus[0];
	prodpt = 1 + (pop / 10) + buildingBonus[1];
	scipt = 0.5 + (pop / 20) + buildingBonus[2];
	culpt = 0.5 + (pop / 20) + buildingBonus[3];
	goldpt = 10 + (pop * buildingBonus[4]);
	armyRealCap = Math.min(pop, armyCap);
}

function nextTurn() {
	incrementResources();
	calcResources();
	displayResources();
}

function fundScientist() {
	if (gold >= commCosts[era]) {
		gold -= commCosts[era];
		science += comm1Effect[era];
		calcResources();
		displayResources();
	}
}

function trainArmy() {
	if (gold >= commCosts[era] && army < armyRealCap) {
		gold -= commCosts[era];
		army += comm2Effect[era];
		if (army > armyRealCap) {
			army = armyRealCap;
		}
		calcResources();
		displayResources();
	}
}

function buySlave() {
	if (gold >= commCosts[era] && pop < popCap) {
		gold -= commCosts[era];
		pop += comm3Effect[era];
		if (pop > popCap) {
			pop = popCap;
		}
		calcResources();
		displayResources();
	}
}

function setButtons() {
	var endTurn = document.querySelector('.endturn');
	endTurn.addEventListener('click', nextTurn);
	var sciBuy = document.querySelector('.buyscience');
	sciBuy.addEventListener('click', fundScientist);
	var armyBuy = document.querySelector('.buyarmy');
	armyBuy.addEventListener('click', trainArmy);
	var popBuy = document.querySelector('.buypop');
	popBuy.addEventListener('click', buySlave);
}

displayResources();
setButtons();