//Card Values
var cards = ['queen','queen','king','king'];
var cardsInPlay = [];
var gameBoard = document.getElementById("game-board");

function createBoard(nOC)
{
	for(var i = 0;i<nOC; i++)
	{
		var newDiv = document.createElement('div');
		newDiv.className="card";
		newDiv.setAttribute('data-card', cards[i]);
		newDiv.addEventListener('click', isTwoCards);
		document.getElementById("game-board").appendChild(newDiv);
	}
}

function isTwoCards()
{
	cardsInPlay.push(this.getAttribute('data-card'));

	if(this.getAttribute('data-card') == 'king')
	{
		this.innerHTML = '<img class="cardImage" src="images/king.png" alt=""King of Spades">';
	}
	else if(this.getAttribute('data-card') == 'queen')
	{
		this.innerHTML = '<img class="cardImage" src="images/queen.png" alt="Queen of Spades">';
	}

	if(cardsInPlay.length === 2)
	{
		isMatch(cardsInPlay);

		var allCards = document.querySelectorAll(".card");


		console.log(allCards.length);

		for(var i=0;i<allCards.length; i++)
		{
			allCards[i].innerHTML = "";
		}

		cardsInPlay = [];
	}
}

function isMatch(x)
{
	if(x[0] == x[1])
	{
		alert("You found a match!");
	}
	else
	{
		alert("Sorry, try again.");
	}
}
createBoard(cards.length);