document.querySelector('button').addEventListener('click', nasaLocationsWeather)

function nasaLocationsWeather() {
    const url = "https://data.nasa.gov/docs/legacy/NASA_Facilities/NASA_Facilities_rows.json"
    fetch(url) //
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            let container = document.querySelector('#locations')
            container.replaceChildren()// removes elemsnts thats in container in html
            for (let i = 0; i < data.data.length; i++) {

                let nasaFacilityName = data.data[i][8]//data showed up at first with propertyname and value then after i refreshed the page turned into array labeled  numbers
                let nasaLatitudeLocation = data.data[i][20][1]
                let nasaLongitudeLocation = data.data[i][20][2]


                let nameOfLocation = document.createElement('h2')
                nameOfLocation.innerText = nasaFacilityName
                container.appendChild(nameOfLocation)

                fetch(`https://api.weatherapi.com/v1/forecast.json?key=23dae6daa1374eb7a74145036262209&q=${nasaLatitudeLocation},${nasaLongitudeLocation}&days=1`)
                    .then(res => res.json()) // parse response as JSON
                    .then(data => {


                        console.log(data)
                        let locationWeather = document.createElement('span')
                        locationWeather.innerText = data.current.temp_f
                        nameOfLocation.appendChild(locationWeather)

                    })
            }

        })

        .catch(err => {
            console.log(`error ${err}`)
        });
}



