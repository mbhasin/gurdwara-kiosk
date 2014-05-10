function addNewsOrEvents(pathname, template, container){
  $.getJSON( pathname, function(data) {
    for ( var i = 0; i < data.length; i++ ) {
      var newItem = Mustache.render($(template).html(), data[i]);
      $(newItem).prependTo(container).slideDown();
    }
  });
}

function addProgram(){
  $.getJSON( "json/program.json", function(data) {
    var programs = ["monFriAM","monFriPM","weds","fri","sat","sun"];
    $(programs).each(function(index, element){
      for ( var i = 0; i < data[element].length; i++ ) {
        var newItem = Mustache.render($('.daily-item').html(), data[element][i]);
        $(newItem).appendTo('.' + element).slideDown();
      }
    });
  });
}

$(function () {
  addNewsOrEvents("json/news.json",'#news-item','.all-news');
  addNewsOrEvents("json/events.json",'#events-item','.content');
  addProgram();
});