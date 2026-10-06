# 🚀 Project: Complex NASA API
Description

The NASA Facilities Weather App is a web application that displays NASA facility locations along with the current temperature at each location.

The project uses data from the NASA Facilities API to get NASA facility names and coordinates. The latitude and longitude from the NASA data are then used to make a second API request to WeatherAPI to retrieve the current temperature for each facility.

What the App Does

When the user clicks the "Show all locations" button, the application:

Fetches NASA facility data from the NASA API.

Loops through the NASA facilities.

Gets the name, latitude, and longitude of each facility.

Uses the latitude and longitude to make a request to the WeatherAPI.

Gets the current temperature in Fahrenheit.

Displays the NASA facility name and its current temperature on the webpage.

This project demonstrates how data returned from one API can be used to make a request to a second API.

🛠️ Tech Stack

HTML

HTML is used to create the structure of the webpage, including the heading, button, and section where the NASA facilities are displayed.

CSS

CSS is used to style the application, including the background image, text, and layout.

JavaScript

JavaScript handles the functionality of the application. It listens for the button click, makes API requests using fetch(), loops through the NASA facility data, creates HTML elements, and displays the results on the page.

NASA Facilities API

The NASA API provides information about NASA facilities, including facility names and geographic coordinates.

WeatherAPI

WeatherAPI uses the latitude and longitude from the NASA data to return current weather information for each facility.
<img width="2662" height="3697" alt="history-in-hd-e5eDHbmHprg-unsplash" src="https://github.com/user-attachments/assets/0a9c9473-b53e-4022-b7c8-4ed9bfcbb194" />
```

