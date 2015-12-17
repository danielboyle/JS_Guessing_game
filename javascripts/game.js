$(document).ready(function() {

  var answer = Math.floor(Math.random() * 101),
      guesses = 0;

  $("form").on("submit", function(e) {
    e.preventDefault();
    var guess = +$("#guess").val(),
        message = "";

    guesses++;
    if (guess > answer) {
      message = "My number is lower than " + guess;
    } else if (guess < answer) {
      message = "My number is higher than " + guess;
    } else {
      message = "You win! It took you " + guesses + " guesses to get it right!";
    }
    $("p").text(message);
  });

  $("a").on("click", function(e) {
    e.preventDefault();
    answer = Math.floor(Math.random() * 101);
    guesses = 0;
    $("p").text("Guess a number from 1 to 100");
  });

});