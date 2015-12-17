$(document).ready(function() {

  var random_number = Math.floor(Math.random() * 101),
      answer = random_number,
      guesses = 0;

  $("form").on("submit", function(e) {
    e.preventDefault();
    var guess = +$("#guess").val(),
        message = "";

    guesses++;
    if (guess < 0 || guess > 100 || isNaN(guess)) {
      message = "Please enter a valid number.";
    } else if (guess > answer) {
      message = "My number is lower than " + guess;
    } else if (guess < answer) {
      message = "My number is higher than " + guess;
    } else {
      message = "You win! My number is " + answer + "!<br>" + 
      "It took you " + guesses + " guesses to get it right!";
    }
    $("p").html(message);
    $("#guess").val("");
  });

  $("a").on("click", function(e) {
    e.preventDefault();
    answer = random_number;
    guesses = 0;
    $("p").html("Guess a number from 1 to 100");
  });

});