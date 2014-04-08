function addNews(){
  $.getJSON( "js/news.json", function(news) {
    for ( var i = 0; i < news.length; i++ ) {
      var newItem = Mustache.render($('#news-item').html(), news[i]);
      $(newItem).prependTo('#all-news').slideDown();
    }
  });
}

function addEvents(){
  $.getJSON( "js/events.json", function(events) {
    for ( var i = 0; i < events.length; i++ ) {
      var newItem = Mustache.render($('#events-item').html(), events[i]);
      $(newItem).appendTo('#events-container').slideDown();
    }
  });
}

$(function () {
  addNews();
  addEvents();
});