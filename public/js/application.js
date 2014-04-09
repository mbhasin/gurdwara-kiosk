function addNews(){
  $.getJSON( "js/news.json", function(data) {
    for ( var i = 0; i < data.length; i++ ) {
      var newItem = Mustache.render($('#news-item').html(), data[i]);
      $(newItem).prependTo('.all-news').slideDown();
    }
  });
}

function addEvents(){
  $.getJSON( "js/events.json", function(data) {
    for ( var i = 0; i < data.length; i++ ) {
      var newItem = Mustache.render($('#events-item').html(), data[i]);
      $(newItem).appendTo('.content').slideDown();
    }
  });
}

function addProgram(){
  $.getJSON( "js/program.json", function(data) {
    var programs = ["monFriAM","monFriPM","weds","fri","sat","sun"]
    $(programs).each(function(index, element){
      for ( var i = 0; i < data[element].length; i++ ) {
        var newItem = Mustache.render($('.daily-item').html(), data[element][i]);
        $(newItem).appendTo('.' + element).slideDown();
      }
    });
  });
}

function changeActiveButton(){
  $('.nav-stacked a').click(function(event){
    var buttonText = $(this).text().toLowerCase();
    if(buttonText === "exit"){return};
    event.preventDefault();
    $('.content').load('fragments/' + buttonText + '.html',function(){
      addNews();
      addEvents();
      addProgram();
    });
    $('.nav-stacked a').removeClass('active');
    $(this).addClass('active');
  });
}

$(function () {
  addNews();
  addEvents();
  addProgram();
  changeActiveButton();
});