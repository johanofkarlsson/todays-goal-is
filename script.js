
//A list of goals that will randomize when the user refreshes the site
let goalsList = ["Tell someone something you love about them!", 
					"Write that text, e-mail or, better yet, make that call you've been putting off!",
					"Take a long walk and if you can, take a picture of something beautiful"						
];

//A list of quotes that will randomize when the user refreshes the site
let quotesList = [
				'"If you fail to plan, you plan to fail" - Benjamin Franklin',
				"Don't let yesterday take up too much of today",
				"The best way to prepare for tomorrow is to do your best today"	
]


function setGoal(){
	document.getElementById("todaysGoal").innerHTML = goalsList[1];
}

function setQuote(){
	document.getElementById("inspQuote").innerHTML = quotesList[0];
}

setGoal();
setQuote();