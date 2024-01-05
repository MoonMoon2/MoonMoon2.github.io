

function fetchWeather() {
    var fetchURL = "http://dataservice.accuweather.com/locations/v1/search";
    let searchTerm = $("#locationSearch").text();
    let locationKey = 334227;
    $.get(fetchURL, { apikey:"pLNwycKWuGQYJYt7SVDK8N14Gl7Kf77m", q:searchTerm}, function(data){
        print(data);
        print(data.key);
        locationKey = data.Key;
    });
}