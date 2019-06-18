	var body = document.querySelector("body");
	var result = document.getElementById("result");
	var result2 = document.getElementById("difference");
	var product = document.getElementById("mulResult");
	var quotient = document.getElementById("divResult");

	var addition = document.querySelector("#addition");
	var subtraction = document.querySelector("#subtraction")
	var multiplication = document.querySelector("#multiplication")
	var division = document.querySelector("#division")

	var containerNum = document.querySelector("#containerNum");

	var arrow = document.getElementsByClassName("selBtn");
	var firstLi = document.querySelector("#first");

	window.onload = function(){
	var addButton = document.querySelector("#addButton");
	addButton.addEventListener("click", function() {
		var num1 = parseInt(document.getElementById("num1").value);
		var num2 = parseInt(document.getElementById("num2").value);
		var sum = Number(num1 + num2);
		result.value = Number(sum);
		result.classList.add("class2");
	});
}

	var subButton = document.getElementById("subButton");
	subButton.addEventListener("click", function() {
		var broj1 = parseInt(document.getElementById("broj1").value);
		var broj2 = parseInt(document.getElementById("broj2").value);
		var difference = Number(broj1 - broj2);
		result2.value = Number(difference);
		result2.classList.add("class2");
	});

	var mulButton = document.getElementById("mulButton");
	mulButton.addEventListener("click", function() {
		var int1 = parseInt(document.getElementById("int1").value);
		var int2 = parseInt(document.getElementById("int2").value);
		var differenceRes = Number(int1 * int2);
		product.value = Number(differenceRes);
		product.classList.add("class2");
	});

	var divButton = document.getElementById("divButton");
	divButton.addEventListener("click", function() {
		var br1 = parseInt(document.getElementById("br1").value);
		var br2 = parseInt(document.getElementById("br2").value);
		var quotientRes = Number(br1 / br2);
		quotient.value = Number(quotientRes);
		quotient.classList.add("class2");
	});


	var addResetBtn = document.querySelector("#addResetBtn");
	addResetBtn.addEventListener("click", function() {
		var resetArea = document.querySelectorAll("input");
		for(var i = 0; i < resetArea.length; i++) {
    		resetArea[i].value = "";
    	}   
    	result.classList.remove("class2"); 	
    	result2.classList.remove("class2");
	})

	var subResetBtn = document.querySelector("#subResetBtn");
	subResetBtn.addEventListener("click", function() {
		var resetArea = document.querySelectorAll("input");
		for(var i = 0; i < resetArea.length; i++) {
    		resetArea[i].value = "";
    	}   
    	result.classList.remove("class2"); 	
    	result2.classList.remove("class2");
	})

	var mulResetBtn = document.querySelector("#mulResetBtn");
	mulResetBtn.addEventListener("click", function() {
		var resetArea = document.querySelectorAll("input");
		for(var i = 0; i < resetArea.length; i++) {
    		resetArea[i].value = "";
    	}   
    	mulResult.classList.remove("class2"); 	
    	result2.classList.remove("class2");
	})

	var divResetBtn = document.querySelector("#divResetBtn");
	divResetBtn.addEventListener("click", function() {
		var resetArea = document.querySelectorAll("input");
		for(var i = 0; i < resetArea.length; i++) {
    		resetArea[i].value = "";
    	}   
    	divResult.classList.remove("class2"); 	
    	result2.classList.remove("class2");
	})


	addResetBtn.addEventListener("mouseover", function() {
		this.style.height = "90px";
	});

	addResetBtn.addEventListener("mouseout", function() {
		this.style.height = "50px";
	});	

	subResetBtn.addEventListener("mouseover", function() {
		this.style.height = "90px";
	});

	subResetBtn.addEventListener("mouseout", function() {
		this.style.height = "50px";
	});	

	mulResetBtn.addEventListener("mouseover", function() {
		this.style.height = "90px";
	});

	mulResetBtn.addEventListener("mouseout", function() {
		this.style.height = "50px";
	});	

	divResetBtn.addEventListener("mouseover", function() {
		this.style.height = "90px";
	});

	divResetBtn.addEventListener("mouseout", function() {
		this.style.height = "50px";
	});	

	var replaceBtn = document.getElementById("replace");
	replaceBtn.addEventListener("click", function() {
		swapContent()
	})

	function swapContent(){
	var tmp = document.getElementById("broj1").value;
		document.getElementById("broj1").value = document.getElementById("broj2").value;
		document.getElementById("broj2").value = tmp;
}

var addArrow = document.querySelector("#addArrow");
addArrow.addEventListener("click", function(){
	if(addition.style.display === "none" || subtraction.style.display ==="block"){
		addition.style.display = "block";	
	}
	else{
		addition.style.display = "none";
	}
	containerNum.style.display = "none";
	subtraction.style.display = "none";
	multiplication.style.display = "none"
	division.style.display ="none";
	addition.classList.add("class4");
	fightGame.style.display = "none"
});

var subArrow = document.querySelector("#subArrow");
subArrow.addEventListener("click", function(){
	if(subtraction.style.display === "none" || addition.style.display === "block" ){
		subtraction.style.display = "block";
	}
	else{
		subtraction.style.display = "none";
	}
	addition.style.display = "none";
	multiplication.style.display = "none"
	division.style.display ="none";
	fightGame.style.display = "none"
	containerNum.style.display = "none";
	subtraction.classList.add("class4");
});

var mulArrow = document.querySelector("#mulArrow");
mulArrow.addEventListener("click", function(){
	if(multiplication.style.display === "none"){
		multiplication.style.display = "block";
	}
	else{
		multiplication.style.display = "none";
	}
		addition.style.display = "none";
		subtraction.style.display = "none"
		division.style.display = "none"
		containerNum.style.display ="none";
		fightGame.style.display = "none"
	multiplication.classList.add("class4");
});

var divArrow = document.querySelector("#divArrow");
divArrow.addEventListener("click", function(){
	if(division.style.display === "none"){
		division.style.display = "block";
	}
	else{
		division.style.display = "none";
	}

		addition.style.display = "none";
		subtraction.style.display = "none"
		multiplication.style.display = "none"
		containerNum.style.display ="none";
		fightGame.style.display = "none"
		division.classList.add("class4");
});


var guessButton = document.querySelector("#guessButton");
guessButton.addEventListener("click", function(){
var answer = Math.floor(Math.random() * 10) + 1;
var guess = document.querySelector("#guessField").value;
    guess = Number(guess);
for(var i = 3; i > 0; i--){
			if (guess === answer) {
            report.value = "Great job, you got it!";
            break;
        }	
        
        else if (guess < answer) {
	    		report.value = guess + " is too small! Guess again!"
	    	}
	    else if (guess > answer) {
	    	report.value = guess + " is too big! Guess again!"
	    }
}
});

var	resetAllBtn = document.querySelector("#resetAllBtn");
resetAllBtn.addEventListener("click", function() {
	var resetAll = document.querySelectorAll("input");
		for(var i = 0; i < resetAll.length; i++) {
    		resetAll[i].value = "";
    	}  
    	var guess = document.querySelector("#guessField").value;
			guess = Number(guess);
    		guess.value = "";
    		guessField.value = "";
    		answer = Math.floor(Math.random() * 10) + 1;

});

var numArrow = document.querySelector("#numArrow");
numArrow.addEventListener("click", function() {
	var containerNum = document.querySelector("#containerNum");
	if(containerNum.style.display === "none"){
		containerNum.style.display = "block";
	}
	else{
		containerNum.style.display = "none";
	}
	containerNum.classList.add("class3");
	addition.style.display = "none";
	subtraction.style.display = "none";
	division.style.display = "none";
	multiplication.style.display = "none";	
	fightGame.style.display = "none"
	containerNum.style.marginLeft = "350px";
});





//FIGHT GAME 


			class Player {
			constructor(name, hitpoints,energy) {
				this.name = name;
				this.hitpoints = 100;
				this.energy = 100;
			}

			attack(opponent) {
				console.log(this.name + " just hit " + opponent.name + "!");
				opponent.hitpoints -= 10;
				this.energy -=10;
				console.log(opponent.name + " currently has " + opponent.hitpoints + " hitpoints.");
				console.log(this.name + " now has " + this.energy + " energy!");
				hp2input.value =  playerOne.hitpoints;
				energy2input.value = playerOne.energy;
				bossenergyInput.value = boss.energy;
				bosshpInput.value = boss.hitpoints;
			}
			heal(player) {
				player.hitpoints += 5;
				console.log(this.name + " has healed himself! He has " + this.hitpoints + " hitpoints!");
				hp2input.value =  playerOne.hitpoints;
				bosshpInput.value = boss.hitpoints;
			}
			ultimate(opponent) {
				console.log(this.name + " just hit " + opponent.name + " with his ultimate!");
				opponent.hitpoints -= 30;
				this.energy -=30;
				console.log(opponent.name + " currently has " + opponent.hitpoints + " hitpoints.");
				console.log(this.name + " now has " + this.energy + " energy!");
				hp2input.value =  playerOne.hitpoints;
				energy2input.value = playerOne.energy;
				bossenergyInput.value = boss.energy;
				bosshpInput.value = boss.hitpoints;
			}	
		}		
			

		var playerOne = new Player();
		var boss = new Player();
		playerOne.name = "Stefan";
		boss.name = "Boss"
		boss.hitpoints = 150;


		var playerDiv = document.querySelector("#playerDiv");
		var attackButton = document.querySelector("#attackButton");
		var healButton = document.querySelector("#healButton");
		var ultButton = document.querySelector("#ultButton");

		var bossDiv = document.querySelector("#bossDiv");
		var bossAttackButton = document.querySelector("#bossAttackButton");
		var bossHealButton = document.querySelector("#bossHealButton");

		var h3player = document.querySelector("#h3player");
		var h3boss = document.querySelector("#h3boss"); 

		var hpSpan = document.querySelector("#hpSpan");
		var energySpan = document.querySelector("#energySpan");
		var hp = document.querySelector("#hp2input");
		var energy = document.querySelector("#energy2input")
		hp2input.value =  playerOne.hitpoints;
		energy2input.value = playerOne.energy;

		var bosshpSpan = document.querySelector("#bosshpSpan");
		var bossenergySpan = document.querySelector("#bossenergySpan");
		var bossenergyInput = document.querySelector("#bossenergyInput");
		var bosshpInput = document.querySelector("#bosshpInput")
		bosshpInput.value = boss.hitpoints;
		bossenergyInput.value = boss.energy;
		

		attackButton.addEventListener("click", function() {
			if(boss.hitpoints !== 0 && playerOne.hitpoints !== 0) {
			playerDiv.classList.add("gameClass");
			h3player.classList.add("gameClass");
			h3boss.classList.add("gameClassRed");
			bossDiv.classList.add("gameClassRed");
			setInterval(function() {
				playerDiv.classList.remove("gameClass");
				h3player.classList.remove("gameClass");
				h3boss.classList.remove("gameClassRed");
				bossDiv.classList.remove("gameClassRed");
			},1500)

			playerOne.attack(boss);
			}
		});	

		healButton.addEventListener("click", function() {
			playerOne.heal(playerOne);

		});

		bossAttackButton.addEventListener("click", function() {
			if(boss.hitpoints !== 0 && playerOne.hitpoints !== 0){
			bossDiv.classList.add("gameClass2");
			bossDiv.style.position = "relative"
			bossDiv.style.left = "122px";
			h3boss.style.position = "relative"
			h3boss.style.left = "105px";
			h3boss.classList.add("gameClass2");
			h3player.classList.add("gameClassRed");
			playerDiv.classList.add("gameClassRed");
			setInterval(function() {
				bossDiv.classList.remove("gameClass2");
				bossDiv.style.left = "505px";
				h3boss.style.left = "505px";
				playerDiv.classList.remove("gameClassRed");
				h3boss.classList.remove("gameClass2");
				h3player.classList.remove("gameClassRed");
			},1000)

			boss.attack(playerOne)	}
			
		})

		bossHealButton.addEventListener("click", function() {
			boss.heal(boss);
		});

		ultButton.addEventListener("click", function() {
			playerDiv.classList.add("gameClassUlt");
			h3player.classList.add("gameClassUlt");
			h3boss.classList.add("gameClassRed");
			bossDiv.classList.add("gameClassRed");
			setInterval(function() {
				playerDiv.classList.remove("gameClassUlt");
				h3player.classList.remove("gameClassUlt");
				h3boss.classList.remove("gameClassRed");
				bossDiv.classList.remove("gameClassRed");
			},1000)
			playerOne.ultimate(boss);	
		});
		
		var resetButton = document.querySelector("#resetGameButton");
		resetButton.addEventListener("click" , function refresh() {
				alert("Game will be reseted!")
                   window .location.reload();
           })

		var fightGame = document.querySelector("#fightGame")

var gameArrow = document.querySelector("#gameArrow");
gameArrow.addEventListener("click", function() {
	var fightGame = document.querySelector("#fightGame")
	if(fightGame.style.display = "none"){
		fightGame.style.display ="block";
	}
	else{
		fightGame.style.display = "none"
	}
	addition.style.display = "none";
	subtraction.style.display = "none";
	division.style.display = "none";
	multiplication.style.display = "none";	
	containerNum.style.display = "none";
});
