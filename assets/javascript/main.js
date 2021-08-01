(async function ($) {
    getCityWeather("Miami");
    getPastSearches("passedSearches")
    $(".event-finder")
        .on("click", ".event-finder-btn", "", function ($event) {
            var searchInputValue = $(".event-finder-input").val()

            if (searchInputValue !== "") {
                var pastSearches = localStorageService.getLocalStorage("passedSearches", 'array')
                pastSearches
                    .push(searchInputValue.toLowerCase())
                localStorageService.setLocalStorage("passedSearches", [...new Set(pastSearches)])
                getPastSearches("passedSearches");
                getCityWeather(searchInputValue)
                templateService.buildForecastHeader(searchInputValue)
            }
        })
       .on("click", ".past-search-btn", "", function ($event) {
            getCityWeather($(this).html())
           var searchInputValue = $(this).html();
           templateService.buildForecastHeader(searchInputValue)

        })
})(jQuery);

async function getCityWeather(query) {
    var city = await openWeather.getCity(query);
    var weatherData = await openWeather.getWeather(city)

    console.log(weatherData);

    console.log(city.name)
/*
    $(document).click(function(event) {
        var text = $(event.target);
        console.log(text)
    });*/

    $(".event-finder-input").val(city.name);


    //templateService.buildCurrentWeather(weatherData.current, city);
    templateService.getCityWeather5DayForecast(weatherData.forecast5Days)
}

function getPastSearches(key) {
    var pastSearches = localStorageService.getLocalStorage(key, 'array')

    $(".past-searches .past-search-btn").remove();

    for (var i = 0; i < pastSearches.length; i++) {
        templateService.buildPastSearches(pastSearches[i])
    }
}