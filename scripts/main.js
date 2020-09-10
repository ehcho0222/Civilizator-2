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
var eras = ['Ancient Era', 'Classical Era', 'Medieval Era', 'Renaissance Era', 'Industrial Era', 'Modern Era', 'Atomic Era', 'Future'];
var buildingBonus = [0, 0, 0, 0, 0, 0];
var commCosts = [20, 150, 800, 3500, 15000, 60000, 200000, 600000];
var comm1Effect = [2, 12, 60, 250, 1000, 3500, 10000, 30000];
var comm2Effect = [1, 5, 25, 100, 400, 1500, 4000, 12000];
var comm3Effect = [2, 10, 50, 200, 800, 3000, 8000, 24000];
var turn = 0;
var maxTurn = 150;
var score = 0;
var eventStringsAncient = ['A treasure was found.', 'There was an invasion of barbarians.', 'A poet wrote about your civilization.', 'One of your researchers made a great discovery.', 'Barbarians stole some of your gold.'];
var eventStringsClassical = ['A treasure was found.', 'There was an outbreak of plague.', 'A poet wrote about your civilization.', 'One of your researchers made a great discovery.', 'Citizens revolted and stole gold from the government.'];
var eventStringsMedieval = ['A miner found a rare jewel.', 'There was an outbreak of plague.', 'A poet wrote about your civilization.', 'One of your researchers made a great discovery.', 'Citizens revolted and stole gold from the government.'];
var eventStringsRenaissance = ['A miner found a rare jewel.', 'There was an outbreak of plague.', 'A new influential book was published.', 'One of your scientists proposed a new theory.', 'Citizens revolted and stole gold from the government.'];
var eventStringsIndustrial = ['Our industries are growing.', 'A tornado hit your city.', 'A new influential book was published.', 'One of your scientists proposed a new theory.', 'Foreign Spies managed to steal your gold.'];
var eventStringsModern = ['Our industries are growing.', 'A tornado hit your city.', 'A new musical started.', 'One of your scientists proposed a new theory.', 'Foreign Spies managed to steal your gold.'];
var eventStringsAtomic = ['Our industries are growing.', 'Terrorists attacked your city.', 'A new radio show started.', 'A new element was found.', 'Foreign Spies managed to steal your gold.'];
var eventStringsFuture = ['Our industries are growing.', 'Terrorists attacked your city.', 'A new Pokemon game was released.', 'A new particle was found.', 'Foreign Spies managed to steal your gold.'];

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

var curTurn = document.querySelector('.curturn');
curTurn.textContent = '0 / 150';

var curScore = document.querySelector('.curscore');
curScore.textContent = 15;

function incrementResources() {
	turn += 1;
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
	curTurn.textContent = turn + ' / ' + maxTurn;
	if (maxTurn - turn <= 10) {
		curTurn.style.color = 'red';
	} else if (maxTurn - turn <= 20) {
		curTurn.style.color = '#ffe000';
	} else {
		curTurn.style.color = '#e0e0e0';
	}
	curScore.textContent = Math.round(score);
}

function calcResources() {
	food = 14 - (pop * 0.4) + buildingBonus[0];
	prodpt = 1 + (pop / 10) + buildingBonus[1];
	scipt = 0.5 + (pop / 20) + buildingBonus[2];
	culpt = 0.5 + (pop / 20) + buildingBonus[3];
	goldpt = 10 + (pop * buildingBonus[4]);
	armyRealCap = Math.min(pop, armyCap);
}

function calcScore() {
	score = pop + (army * 1.2);
}

function randomEvent() {
	var index = Math.round(Math.random() * 5 - 0.5);
	var tmp;
	if (era === 0) {
		tmp = eventStringsAncient[index];
	} else if (era === 1) {
		tmp = eventStringsClassical[index];
	} else if (era === 2) {
		tmp = eventStringsMedieval[index];
	} else if (era === 3) {
		tmp = eventStringsRenaissance[index];
	} else if (era === 4) {
		tmp = eventStringsIndustrial[index];
	} else if (era === 5) {
		tmp = eventStringsModern[index];
	} else if (era === 6) {
		tmp = eventStringsAtomic[index];
	} else if (era === 7) {
		tmp = eventStringsFuture[index];
	}
	if (index === 0) {
		gold += goldpt * 1.25;
		alert(tmp + '\n+' + Math.round(goldpt * 1.25) + ' Gold');
	} else if (index === 1) {
		pop *= 0.8;
		army *= 0.8;
		alert(tmp + '\n-' + Math.round(pop * 0.25) + 'k Population\n-' + Math.round(army * 0.25) + 'k Military');
	} else if (index === 2) {
		culture += culpt;
		alert(tmp + '\n+' + Math.round(culpt) + ' Culture');
	} else if (index === 3) {
		science += scipt * 0.85;
		alert(tmp + '\n+' + Math.round(scipt * 0.85) + ' Science');
	} else if (index === 4) {
		gold *= 0.75;
		alert(tmp + '\n-' + Math.round(gold * 0.333) + ' Gold');
	}
}

function nextTurn() {
	incrementResources();
	randomEvent();
	calcResources();
	calcScore();
	displayResources();
}

function fundScientist() {
	if (gold >= commCosts[era]) {
		gold -= commCosts[era];
		science += comm1Effect[era];
		calcResources();
		calcScore();
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
		calcScore();
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
		calcScore();
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