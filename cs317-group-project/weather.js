'use strict';


window.addEventListener("load", () => {

    let long;
    let lat;

    let temperatureDescription = document.getElementById("des");
    let temperatureDegree = document.getElementById('degrees');
    let location = document.getElementById("location");
    let icon = document.getElementById("icon");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude.toPrecision();
            lat = position.coords.latitude.toPrecision();

            const api = "https://api.weatherapi.com/v1/forecast.json?key=a7596ee1a7b843e68ca215719222103&q=" + lat + "," + long + "&days=1&aqi=no&alerts=no";

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);

                    let tempValue = data['current']['temp_c'];
                    temperatureDegree.innerHTML = tempValue + '&deg;C';

                    temperatureDescription.innerHTML = data['current']['condition'].text;

                    let area = data['location']['name'];
                    let city = data['location']['region'];


                    icon.innerHTML="<img src='"+data['current']['condition'].icon+"' alt='icons'>";

                    location.innerHTML = area + "/" + city;

                    if (temperatureDescription.innerHTML === "Sunny") {
                        document.getElementById("summary").innerHTML = "It's a lovely day today! Step outside for some fresh air and soak up some sunshine!";

                    } else if (temperatureDescription.innerHTML === "Clear") {
                        document.getElementById("summary").innerHTML = "It's a lovely night with nice clear skies! Make the most of this beautiful night!";

                    } else if (temperatureDescription.innerHTML === "Partly cloudy") {
                        document.getElementById("summary").innerHTML = "Hmm, its not forecast to rain but it is slightly cloudy! Take a jacket with you if you step out for some fresh air.";

                    } else if (temperatureDescription.innerHTML === "Cloudy") {
                        document.getElementById("summary").innerHTML = "Hmm, its not forecast to rain but it is cloudy! Take a jacket with you if you step out for some fresh air.";

                    } else if (temperatureDescription.innerHTML === "Overcast") {
                        document.getElementById("summary").innerHTML = "Hmm, its not forecast to rain but it is overcast! Take a jacket with you if you step out for some fresh air.";

                    } else if (temperatureDescription.innerHTML === "Mist") {
                        document.getElementById("summary").innerHTML = "Stay safe if you step out for some fresh air today! It's misty and visibility might be low.";

                    } else if (temperatureDescription.innerHTML === "Patchy rain possible") {
                        document.getElementById("summary").innerHTML = "Hmm, it might rain today. Wear a rain coat if you step out for some fresh air!";

                    } else if (temperatureDescription.innerHTML === "Patchy snow possible") {
                        document.getElementById("summary").innerHTML = "It might snow today so wrap up warm if you decide to go out for some fresh air and stay safe!";

                    } else if (temperatureDescription.innerHTML === "Patchy sleet possible") {
                        document.getElementById("summary").innerHTML = "Hmm, there may be some sleet today! Wrap up warm if you decide to go out for some fresh air and stay safe!";

                    } else if (temperatureDescription.innerHTML === "Patchy freezing drizzle possible") {
                        document.getElementById("summary").innerHTML = "The weather isn't the best today! Wrap up warm if you decide to go out for some fresh air and stay safe!" ;

                    } else if (temperatureDescription.innerHTML === "Thundery outbreaks possible") {
                        document.getElementById("summary").innerHTML = "Fresh air is important but it's probably best to stay indoors today!";

                    } else if (temperatureDescription.innerHTML === "Blowing snow") {
                        document.getElementById("summary").innerHTML = "Fresh air is important but it's probably best to stay indoors today!";

                    } else if (temperatureDescription.innerHTML === "Blizzard") {
                        document.getElementById("summary").innerHTML = "Fresh air is important but it's probably best to stay indoors today!";

                    } else if (temperatureDescription.innerHTML === "Fog") {
                        document.getElementById("summary").innerHTML = "Stay safe if you step out for some fresh air today! It's foggy and visibility might be low.";

                    } else if (temperatureDescription.innerHTML === "Freezing fog") {
                        document.getElementById("summary").innerHTML = "Stay safe if you step out for some fresh air today and wrap up warm! It's foggy and visibility might be low.";

                    } else if (temperatureDescription.innerHTML === "Patchy light drizzle") {
                        document.getElementById("summary").innerHTML = "Wear a rain coat or take an umbrella with you if you decide to step out for some fresh air today!";

                    } else if (temperatureDescription.innerHTML === "Light drizzle") {
                        document.getElementById("summary").innerHTML = "Wear a rain coat or take an umbrella with you if you decide to step out for some fresh air today!";

                    } else if (temperatureDescription.innerHTML === "Freezing drizzle") {
                        document.getElementById("summary").innerHTML = "Wrap up warm and take an umbrella with you if you decide to step out for some fresh air today!";

                    } else if (temperatureDescription.innerHTML === "Heavy freezing drizzle") {
                        document.getElementById("summary").innerHTML = "It's probably better to stay indoors today! If you do decide to go out for some fresh air, wrap up warm!";

                    } else if (temperatureDescription.innerHTML === "Patchy light rain") {
                        document.getElementById("summary").innerHTML = "Wear a rain coat or take an umbrella with you if you decide to step out for some fresh air today!";

                    } else if (temperatureDescription.innerHTML === "Light rain") {
                        document.getElementById("summary").innerHTML = "Wear a rain coat or take an umbrella with you if you decide to step out for some fresh air today!";

                    } else if (temperatureDescription.innerHTML === "Moderate rain at times") {
                        document.getElementById("summary").innerHTML = "Wear a rain coat or take an umbrella with you if you decide to step out for some fresh air today!";

                    } else if (temperatureDescription.innerHTML === "Moderate rain") {
                        document.getElementById("summary").innerHTML = "Wear a rain coat or take an umbrella with you if you decide to step out for some fresh air today!";

                    } else if (temperatureDescription.innerHTML === "Heavy rain at times") {
                        document.getElementById("summary").innerHTML = "It's okay to stay indoors today! If you do decide to go out for some fresh air, wear a rain coat or take an umbrella with you!";

                    } else if (temperatureDescription.innerHTML === "Heavy rain") {
                        document.getElementById("summary").innerHTML = "It's okay to stay indoors today! If you do decide to go out for some fresh air, wear a rain coat or take an umbrella with you!";

                    } else if (temperatureDescription.innerHTML === "Light freezing rain") {
                        document.getElementById("summary").innerHTML = "Wrap up warm and take an umbrella with you if you decide to step out for some fresh air today!";

                    } else if (temperatureDescription.innerHTML === "Moderate or heavy freezing rain") {
                        document.getElementById("summary").innerHTML = "It's okay to stay indoors today! Wrap up warm and take an umbrella with you if you decide to step out for some fresh air!";

                    } else if (temperatureDescription.innerHTML === "Light sleet") {
                        document.getElementById("summary").innerHTML = "Wrap up warm if you decide to go out for some fresh air today and stay safe!";

                    } else if (temperatureDescription.innerHTML === "Moderate or heavy sleet") {
                        document.getElementById("summary").innerHTML = "Wrap up warm if you decide to go out for some fresh air today and stay safe!";

                    } else if (temperatureDescription.innerHTML === "Patchy light snow") {
                        document.getElementById("summary").innerHTML ="Wrap up warm if you decide to go out for some fresh air today and stay safe!";

                    } else if (temperatureDescription.innerHTML === "Light snow") {
                        document.getElementById("summary").innerHTML = "Wrap up warm if you decide to go out for some fresh air today and stay safe!";

                    }else if (temperatureDescription.innerHTML === "Patchy moderate snow") {
                        document.getElementById("summary").innerHTML = "Wrap up warm if you decide to go out for some fresh air today and stay safe!";

                    }else if (temperatureDescription.innerHTML === "Moderate snow") {
                        document.getElementById("summary").innerHTML = "Wrap up warm if you decide to go out for some fresh air today and stay safe!";

                    }else if (temperatureDescription.innerHTML === "Patchy heavy snow") {
                        document.getElementById("summary").innerHTML = "It's okay to stay indoors today! Wrap up warm if you decide to step out for some fresh air and stay safe!";

                    }else if (temperatureDescription.innerHTML === "Heavy snow") {
                        document.getElementById("summary").innerHTML = "It's okay to stay indoors today! Wrap up warm if you decide to step out for some fresh air and stay safe!";

                    }else if (temperatureDescription.innerHTML === "Ice pellets") {
                        document.getElementById("summary").innerHTML = "It's okay to stay indoors today! Wrap up warm if you decide to step out for some fresh air and stay safe!";

                    }else if (temperatureDescription.innerHTML === "Light rain shower") {
                        document.getElementById("summary").innerHTML = "Wear a rain coat or take an umbrella with you if you decide to step out for some fresh air today!";

                    }else if (temperatureDescription.innerHTML === "Moderate or heavy rain shower") {
                        document.getElementById("summary").innerHTML = "Wear a rain coat or take an umbrella with you if you decide to step out for some fresh air today!";

                    }else if (temperatureDescription.innerHTML === "Torrential rain shower") {
                        document.getElementById("summary").innerHTML = "It's probably best to stay indoors today!";

                    }else if (temperatureDescription.innerHTML === "Light sleet showers") {
                        document.getElementById("summary").innerHTML = "Wrap up warm and take an umbrella with you if you decide to step out for some fresh air today!";

                    }else if (temperatureDescription.innerHTML === "Moderate or heavy sleet showers") {
                        document.getElementById("summary").innerHTML = "It's okay to stay indoors today! Wrap up warm if you decide to step out for some fresh air and stay safe!";

                    }else if (temperatureDescription.innerHTML === "Light snow showers") {
                        document.getElementById("summary").innerHTML = "It's okay to stay indoors today! Wrap up warm if you decide to step out for some fresh air and stay safe!";

                    }else if (temperatureDescription.innerHTML === "Moderate or heavy snow showers") {
                        document.getElementById("summary").innerHTML = "It's okay to stay indoors today! Wrap up warm if you decide to step out for some fresh air and stay safe!";

                    }else if (temperatureDescription.innerHTML === "Light showers of ice pellets") {
                        document.getElementById("summary").innerHTML = "It's okay to stay indoors today! Wrap up warm if you decide to step out for some fresh air and stay safe!";

                    }else if (temperatureDescription.innerHTML === "Moderate or heavy showers of ice pellets") {
                        document.getElementById("summary").innerHTML = "Fresh air is important but it's probably best to stay indoors today!";

                    }else if (temperatureDescription.innerHTML === "Patchy light rain with thunder") {
                        document.getElementById("summary").innerHTML = "Fresh air is important but it's probably best to stay indoors today!";

                    }else if (temperatureDescription.innerHTML === "Moderate or heavy rain with thunder") {
                        document.getElementById("summary").innerHTML = "Fresh air is important but it's probably best to stay indoors today!";

                    }else if (temperatureDescription.innerHTML === "Patchy light snow with thunder") {
                        document.getElementById("summary").innerHTML = "Fresh air is important but it's probably best to stay indoors today!";

                    }else if (temperatureDescription.innerHTML === "Moderate or heavy snow with thunder") {
                        document.getElementById("summary").innerHTML = "Fresh air is important but it's probably best to stay indoors today!";

                    }

                });


        });

    }

});




