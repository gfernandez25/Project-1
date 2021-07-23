$.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?q=Miami&units=imperial&appid=70b5cd96a908ec7ff606c26295b20d0c",
    function(data){
        console.log(data);

        var icon =
        "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
       console.log(icon)
        var temp = data.main.temp;
        var weather = data.weather[0].main;

        $(".icon").attr("src", icon);
        $(".weather").append(weather);
        $(".temp").append(temp);
    }
);