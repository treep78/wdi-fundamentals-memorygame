//Card Values
var numOfCards = 4;
var cardList = [];
var gameBoard = document.getElementById("game-board");

function setupCards(nOC)
{
	for(var i = 0;i<nOC; i++)
	{
		var newDiv = document.createElement('div');
		newDiv.className="card";
		cardList.push(newDiv);
		document.getElementById("game-board").appendChild(newDiv);
	}
}

setupCards(numOfCards);
/*if(firstCard == secondCard)
{
	alert("You found a match!");
}
else
{
	alert("Sorry, try again.");
}*/