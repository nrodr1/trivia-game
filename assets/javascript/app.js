$(document).ready(function(){
  $("#start-button").click(function(){
  	var number = 30;
    $("#start-button").on("click", start); 
    // This button starts the game.
    $("#submit").on("click", finish); 
    // This button finishes the game with the submission of the answers.
    $("#restart").on("click", restart); 
    // This button restarts the game.

//Game Functions
    function start(){
    	counter = setInterval(timer, 1000);
    	showMe(".question");
    	showMe(".answers");
    	showMe("#submit");
	    hideMe("#start-button");
	    hideMe(".rules");
	    hideMe("#restart");
	    hideMe("#results");
    }

    function timer(){
      number--
      // Decreases the timer by 1 second.
      $("#show-number").html("<h2>" + number + "</h2>" );
      if (number === 0){
        alert("Alex says time is up!")
        stop();
        // Stop function initiates.
      }
    }

    function stop(){
    	clearInterval(counter);
    	$("#results").show();
    	$("#restart").show();
		  $(".question").hide();
		  $(".answers").hide();
		  $("#submit").hide();
      }

    function finish(){
    	number = 1;
    	clearInterval(counter);
    	timer();
    }

    function restart(){
    	number = 30;
    	start();
    }

    function hideMe(e) {
    	$(e).hide();
    }
    function showMe(e) {
    	$(e).show();
    }

  	start(); 
    //Start function is initiated.
  });
});