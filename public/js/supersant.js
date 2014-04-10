function getQuestion(question_number){
  $("#question-container").html( "<%= partial :'supersant/question' %>", function(){
    $.getJSON( "json/supersant.json", function(data) {
      if (question_number === data.length) {
        $('.question').remove();
        $('WELL DONE').replaceAll('.content h3');
      }else{
        var question = Mustache.render($('.q-template').html(), data[question_number]);
        $(question).replaceAll('.question');
      }
    });
  });
}

function checkAnswer(){
  $('body').on('click', '.s-option', function(event){
    event.preventDefault();
    var answer = $(this).text();
    var question_number = $('.q-no').text()-1;
    $.getJSON( "json/supersant.json", function(data) {
      var correct = data[question_number].correct
      if(answer === correct){
        $('.q-no').html(question_number+2);
        getQuestion(question_number+1);
      }else{
        console.log("Incorrect!!!!");
      }
    });
  });
}



$(function () {
  getQuestion(0);
  checkAnswer();
});