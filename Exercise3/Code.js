/**
 *   @author Michael Allen
 *   @version 0.0.2
 *   @summary Code demonstration: Math 
 */

"use strict";
const PROMPT = require('readline-sync');

let MAX_PICKS = 9;
let continueResponse, computerPicks, humanPicks, colorName;
let numberRight = 0

function main() {
	for (let i = 0; i <= MAX_PICKS; i++)		{
        setComputerNumber();
		setHumanNumber();
		setCheck();
		
    }
    printGoodbye();
}

main();

function setComputerNumber() {
    computerPicks = Math.floor(Math.random() * 5);
    if (computerPicks === 0){
      colorName = "red";
    }
    else if (computerPicks === 1){
      colorName = "green";
    }
    else if (computerPicks === 2){
      colorName = "blue";
    }
    else if (computerPicks === 3){
      colorName = "orange";
    } else if (computerPicks === 4){
      colorName = "yellow";
    }
}

function setHumanNumber() {
    humanPicks = Number(PROMPT.question(`\nPlease select a color. \n[0-Red 1-Green 2-Blue 3-Orange 4-Yellow]`));
}

function setCheck() {
  if (computerPicks === humanPicks){
	  console.log(`\nYou were correct! I am Impressed by your ESP skills`);
	  numberRight = numberRight + 1
	} else {
			console.log(`\nYou are not special at all. The correct answer is ${colorName}. Have fun you non ESP normie`)
	}	
}

function printGoodbye() {
    console.log(`\n\tYou answered ${numberRight} correct. Farewell.`);
}

