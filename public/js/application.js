function addNews(){
  $.getJSON( "js/news.json", function(news) {
    for ( var i = 0; i < news.length; i++ ) {
      var newItem = Mustache.render($('#news-item').html(), news[i]);
      $(newItem).appendTo('#news-container');
    }
  });
}

$(function () {
  addNews();
});