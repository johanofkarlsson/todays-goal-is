
//A list of goals that will randomize when the user refreshes the site
let goalsList = [
					"Tell someone something you love about them!", 
					"Write that text, e-mail or, better yet, make that call you've been putting off.",
					"Take a long walk today, and if you can, take a picture of something beautiful.",
					"Make a list of at least three things you are thankful for. Put your list on a post-it where you'll see it often.",
					"Make a list of five people (alive, dead or fictional) that you admire. Learn as much as possible about number one on your list.",
					"Write down everything you buy or pay for today. Review your notes at the end of the day. Note how it makes you feel.",
					"Write down everything you eat and drink today. Review your notes at the end of the day. Note how it makes you feel.",
					"Read a book for at least five minutes today. If you liked what you read, schedule five minutes reading time for tomrrow.",
					"Do at least one push-up, one squat and one sit-up today. Try to do two of each tomorrow.",
					"Spend at least ten minutes today cleaning or organizing your living or working space.",
					"Help someone today. It might be as simple as holding the door for someone or carry something for them."

];

//A list of quotes that will randomize when the user refreshes the site
let quotesList = [
				'"If you fail to plan, you plan to fail" - Benjamin Franklin',
				'"Don\'t let yesterday take up too much of today" - Will Rogers',
				'"The best preparation for tomorrow is doing your best today" - H. Jackson Brown, Jr',
				'"To know thyself is the beginning of wisdom" - Socrates',
				'"Let food be thy medicine and medicine be thy food" - Hippocrates',
				'"An expert is a man who has med all the mistakes which can be made in a very narrow field" - Niels Bohr'	
]

//En funktion som sätter ett nytt mål och ett nytt citat.

function setGoalAndQuote(){

let newGoal =
goalsList[Math.floor(Math.random()*goalsList.length)];

document.getElementById("todaysGoal").innerHTML = newGoal;

let newQuote =
quotesList[Math.floor(Math.random()*quotesList.length)];

document.getElementById("inspQuote").innerHTML = newQuote;
}

setGoalAndQuote();

//Fungernade version av koden i form av lös kod

//let setGoal =
//goalsList[Math.floor(Math.random()*goalsList.length)];

//document.getElementById("todaysGoal").innerHTML = setGoal;

//let setQuote =
//quotesList[Math.floor(Math.random()*quotesList.length)];

//document.getElementById("inspQuote").innerHTML = setQuote;




//function setGoal(){
//	goalsList[Math.floor(Math.random()*goalsList.length)];

//}

//function setGoal(){
//	document.getElementById("todaysGoal").innerHTML = goalsList[1];
//}

//function setQuote(){
//	document.getElementById("inspQuote").innerHTML = quotesList[0];
//}

//setGoal();
//document.getElementById("todaysGoal").innerHTML = setGoal;
//setQuote();