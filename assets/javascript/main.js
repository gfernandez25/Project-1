(async function ($) {
    getCityWeather("Miami");
    getPastSearches("passedSearches")
    $(".event-finder")
        .on("click", ".event-finder-btn", "", function ($event) {
            var searchInputValue = $(".event-finder-input").val()

            if (searchInputValue !== "") {
                var pastSearches = localStorageService.getLocalStorage("passedSearches", 'array')

                pastSearches = pastSearches.slice(-9)
                pastSearches
                    .push(searchInputValue.toLowerCase())
                localStorageService.setLocalStorage("passedSearches", [...new Set(pastSearches)])
                getPastSearches("passedSearches");
                getCityWeather(searchInputValue)
                getEvents(page)
            }
        })
        .on("click", ".past-search-btn", "", function ($event) {
            getCityWeather($(this).html())
            var searchInputValue = $(this).html();
            templateService.buildForecastHeader(searchInputValue)
            getEvents(page)
        })
})(jQuery);

async function getCityWeather(query) {
    var city = await openWeather.getCity(query);
    var weatherData = await openWeather.getWeather(city)

    $(".event-finder-input").val(city.name);

    templateService.buildForecastHeader(city.name)
    templateService.getCityWeather5DayForecast(weatherData.forecast5Days)
}

function getPastSearches(key) {
    var pastSearches = localStorageService.getLocalStorage(key, 'array')

    $(".past-searches .past-search-btn").remove();

    for (var i = 0; i < pastSearches.length; i++) {
        templateService.buildPastSearches(pastSearches[i])
    }
}