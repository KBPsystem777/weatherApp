//import axios from '../node_modules/axios';
/*
const http = require('http');
const fs = require('fs');

const page = fs.readFileSync('index.html');

const port = 8080;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(page);
}).listen(port);
console.log(`Listening on http://localhost:${port}`);
*/

//Geolocation

const url = 'https://fcc-weather-api.glitch.me/api/current?';

let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    let crd = pos.coords;
    let latitude = crd.latitude;
    let longitude = crd.longitude;
    let endPoint = `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`;
    axios.get(endPoint)
        .then(function (json) {
            console.log(endPoint)
            console.log(latitude, longitude)
            document.getElementById('temp').innerHTML = json.data.main.temp + '&deg';
            document.getElementById('city').innerHTML = json.data.name;
            document.getElementById('country').innerHTML = json.data.sys.country;
            document.getElementById('location').innerHTML = `${latitude}, ${longitude}`;
        });
};

function error(err) {
    console.log(`ERROR(${err.code}): ${err.message}`);
};

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(success, error, options);
}


