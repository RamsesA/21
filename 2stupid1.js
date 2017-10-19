// initialize variables
var count = 0;
var steps = 0;
var game = [];
var player = "";

do { // end at 21
	 // call counting function for user
	player = "you";
	steps = prompt("Starting at "+count+", how many steps do you count (1-3)");
	count = counting(player,count,steps);
	// call counting function for computer, at 2 steps each time
	player = "me";
	steps = 2; // temporary - computer always count 2 steps
	count = counting(player,count,steps);
}
while (count<21);

alert ("You win"); // temporary

// count and display function
function counting(player,current,steps){
	game=[];
	for (index=0;index<steps;index++) {
		game[index]=current+index+1;
	}
	alert(player+": "+game);
	current=parseInt(current)+parseInt(steps);
	return current;
}