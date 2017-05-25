
$.getJSON('//freegeoip.net/json/?callback=?', function(data) {

$(document).ready(function() {
  loadWeather(data.city,''); //@params location, woeid
});

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'c',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.alt.temp+'&deg;f</li></ul>';  
      console.log(location);
      console.log(weather.text);
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}
});

// in case you I want to work extra for changing the background based on weather
// https://gist.github.com/bzerangue/805520