var spreadsheet_url = 'https://docs.google.com/spreadsheets/d/18MIzk1KwOtnBGELNjj0PNnoXTWsv7QbVSsvFt7Z7S9I/pubhtml';

function init() {
  Tabletop.init({ 
    key: spreadsheet_url,
    callback: readData,
    simpleSheet: true 
  });
}

function readData(data, tabletop) { 
  data.forEach(ep => {
    var title = '<h2>' + ep.name + '</h2>';
    var description = '<p>' + ep.description + '</p>';
    var embed = '<div class="responsive-object"><a class="embedly-card" href="' + ep.link + '">' + ep.link + '</a></div>'
    var episode = '<div class="episode">' + title + description + embed + '</div>';
    $('.episodes').append(episode);
  });
}

$(document).ready(function() {
  init();
});
