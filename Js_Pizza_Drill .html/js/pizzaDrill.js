/*==================================================
    Authour: Henok T.
    Pizzeria Ordering Website
====================================================
   --> A js project at The Tech-Academy PDX.
   --> Written based on an example tutorial.
====================================================*/

//==========================
//====== Receipt ===========
//==========================

function getReceipt(){
	text1 = ""; // empty strings for use on functions below.
	text2 = ""; 
	var runningTotal = 0;
	var sizeTotal = 0; 
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++){
		if(sizeArray[i].checked){
			var selectedSize = sizeArray[i].value;
			text1 += selectedSize + "<br>";
		}
	}

	if (selectedSize === "Personal Pizza"){
		sizeTotal = 6;
		text2 += sizeTotal + "<br>";
	} else if (selectedSize === "Medium Pizza"){
		sizeTotal = 10;
		text2 += sizeTotal + "<br>";
	} else if (selectedSize === "Large Pizza"){
		sizeTotal = 14;
		text2 += sizeTotal + "<br>";
	} else if (selectedSize === "Extra Large Pizza"){
		sizeTotal = 16;
		text2 += sizeTotal + "<br>";
	}

	runningTotal = sizeTotal;
	getMeat(runningTotal, text1,text2); // 3 vars to pass on to every function below.
}

// With both the meat and veggie functions each item in the array will be 1 dollar 
// but the first is going to be free so we can count the total of items in their
// array and subtract 1 to get the total item cost.

// Now we can add the item cost to our runningTotal to get the new runningTotal & pass it
// to the next function.

//==========================
//====== Meat ==============
//==========================

function getMeat(runningTotal,text1,text2){
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName ("meats");
	for (var i = 0; i < meatArray.length; i++){
		if (meatArray[i].checked){
			selectedMeat.push(meatArray[i].value);
		}
	}

	var meatCount = selectedMeat.length;
	if(meatCount > 1){
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal += meatTotal;
	for (var i = 0; i < selectedMeat.length; i++){
		text1 += selectedMeat[i] + "<br>";
		if (meatCount <=1){
			text2 += 0 + "<br>";
			meatCount = meatCount - 1;
		} else if (meatCount == 2){
			text2 += 1 + "<br>";
			meatCount = meatCount - 1;
		} else {
			text2 += 1 + "<br>";
			meatCount = meatCount - 1;
		}
	}
	getVeggie(runningTotal,text1,text2);
}

//==========================
//====== Veggies ===========
//==========================

function getVeggie(runningTotal,text1,text2){
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veggies");
	for (var i = 0; i < veggieArray.length; i++){
		if (veggieArray[i].checked){
			selectedVeggie.push(veggieArray[i].value);
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount >= 2){
		veggieTotal = (veggieCount - 1);
	} else {
		veggieCount = 0;
	}

	runningTotal += veggieTotal;
	for (var i = 0; i < selectedVeggie.length; i++){
		text1 += selectedVeggie[i] + "<br>";
		if (veggieCount <=1){
			text2 += 0 + "<br>";
			veggieCount = veggieCount - 1;
		} else if (veggieCount == 2){
			text2 += 1 + "<br>";
			veggieCount = veggieCount - 1;
		} else {
			text2 += 1 + "<br>";
			veggieCount = veggieCount - 1;
		}
	}
	getCheese(runningTotal,text1,text2);
}

//==========================
//====== Cheese ===========
//==========================

function getCheese(runningTotal,text1,text2) {
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var i = 0; i < cheeseArray.length; i++) {
		if (cheeseArray[i].checked) {
			selectedCheese = cheeseArray[i].value;
		}
		if (selectedCheese === "Extra cheese") {
			cheeseTotal = 3;
		}
	}
	runningTotal += cheeseTotal;
	text2 += cheeseTotal + "<br>";
	text1 += selectedCheese + "<br>";
	getSauce(runningTotal,text1,text2);
}

//==========================
//====== Sauce ===========
//==========================

function getSauce(runningTotal,text1,text2) {
	var sauceArray = document.getElementsByClassName("sauce");
	for (var i = 0; i < sauceArray.length; i++) {
		if (sauceArray[i].checked) {
			selectedSauce = sauceArray[i].value;
			text1 += selectedSauce + "<br>";
		}
	}
	text2 += 0 + "<br>";
	getCrust(runningTotal,text1,text2)
}
//==========================
//====== Crust ===========
//==========================

function getCrust(runningTotal,text1,text2) {
	var crustTotal = 0;
	var selectedCrust;
	var crustArray = document.getElementsByClassName("crust");
	for (var i = 0; i < crustArray.length; i++) {
		if (crustArray[i].checked) {
			selectedCrust = crustArray[i].value;
			text1 += selectedCrust + "<br>";
		}
		if (selectedCrust === "Cheese Stuffed Crust") {
			crustTotal = 3;
		}
	}
	runningTotal += crustTotal; 
	text2 += crustTotal + "<br>";

	document.getElementById("cart").style.opacity=1;
	document.getElementById("showText1").innerHTML=text1;
	document.getElementById("showText2").innerHTML=text2;
	document.getElementById("totalPrice2").innerHTML = "</h3>$"+runningTotal+".00"+"</h3>";
}

function clearAll() {
	document.getElementById("frmMenu").reset();
	document.getElementById("cart").style.opacity=0;
	location.reload();
}