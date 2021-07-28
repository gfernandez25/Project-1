// $.getJSON(
//     "https://api.openweathermap.org/data/2.5/weather?q=Miami&units=imperial&appid=70b5cd96a908ec7ff606c26295b20d0c",
//     function (data) {
//         console.log(data);
//
//         var icon =
//             "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
//         console.log(icon)
//         var temp = Math.floor(data.main.temp) + " Degrees";
//         var weather = data.weather[0].main;
//
//         $(".icon").attr("src", icon);
//         $(".weather").append(weather);
//         $(".temp").append(temp);
//     }
// );
//
// $.ajax({
//     type: "GET",
//     url: "https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=B5AY8mCpUnhDPbrLaWNvgsTgbeF612rO",
//     async: true,
//     dataType: "json",
//     success: function (json) {
//         console.log(json);
//         const event = json._embedded.events[0].name
//         $(".events").append(event)
//
//     },
//     error: function (xhr, status, err) {
//         // This time, we do not end up here!
//     }
// });