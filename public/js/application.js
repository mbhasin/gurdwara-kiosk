function addNews(){
  $.getJSON( "js/tweets.json", function(news) {
    for ( var i = start; i < end; i++ ) {
      var newItem = Mustache.render($('#news-item').html(), news[i]);
      $(newItem).appendTo('#news-item');
    }
  });
}

$(function () {
  addNews();
});