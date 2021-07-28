(async function ($) {
    getCityWeather("Miami");

    $(".event-finder-search")
        .on("click", ".event-finder-btn", "", function ($event) {
            var searchInputValue = $(".event-finder-input").val()

            if (searchInputValue !== "") {
                var pastSearches = localStorageService.getLocalStorage("passedSearches", 'array')
                pastSearches.push(searchInputValue)
                localStorageService.setLocalStorage("passedSearches", [...new Set(pastSearches)])
                getPastSearches("passedSearches");
                getCityWeather(searchInputValue)
            }
        })
       .on("click", ".past-search-btn", "", function ($event) {
            getCityWeather($(this).html())
        })
})(jQuery);

async function getCityWeather(query) {
    var city = await openWeather.getCity(query);
    var weatherData = await openWeather.getWeather(city)

    console.log(weatherData);

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