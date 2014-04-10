function getQuestion(){
  $.getJSON( "json/supersant.json", function(data) {
    var question = $('.q-no').text() - 1;
    // var options = data[question].options;
    var question = Mustache.render($('.q-template').html(), data[question]);
    $(question).appendTo('.content').slideDown();
  });
}

function checkAnswer(){
  $('body').on('click', '.s-option', function(event){
    event.preventDefault();
    var answer = $(this).text();
    var question = $('.q-no').text() - 1;
    $.getJSON( "json/supersant.json", function(data) {
      var correct = data[question].correct
      if(answer === correct){
        console.log("Correct!!!!");
      }else{
        console.log("Incorrect!!!!");
      }
    });
  });
}

$(function () {
  getQuestion();
  checkAnswer();
});