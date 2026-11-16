document.querySelector('button').addEventListener('click', nasaLocationsWeather)

function nasaLocationsWeather() {

    // Fetch NASA data from our Express server
    const url = "/api/nasa"

    fetch(url)
        .then(res => res.json())
        .then(data => {

            console.log(data)

            let container = document.querySelector('#locations')

            // Clear previous results
            container.replaceChildren()

            // Display first 10 NASA facilities
            for (let i = 0; i < Math.min(data.data.length, 10); i++) {

                let nasaFacilityName = data.data[i][8]
                let nasaLatitudeLocation = data.data[i][20][1]
                let nasaLongitudeLocation = data.data[i][20][2]

                // Create facility name
                let nameOfLocation = document.createElement('h2')
                nameOfLocation.innerText = nasaFacilityName

                container.appendChild(nameOfLocation)

                // Fetch weather
                fetch(`https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=${nasaLatitudeLocation},${nasaLongitudeLocation}&days=1`)
                    .then(res => res.json())
                    .then(data => {

                        console.log(data)

                        let locationWeather = document.createElement('span')

                        locationWeather.innerText = ` - ${data.current.temp_f}°F`

                        nameOfLocation.appendChild(locationWeather)

                    })
                    .catch(err => {
                        console.log(`Weather error: ${err}`)
                    })
            }
        })
        .catch(err => {
            console.log(`NASA error: ${err}`)
        })
}



