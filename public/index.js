
function dataRun() {

    const url = 'https://fcc-weather-api.glitch.me/api/current?';

    let options = {
        enableHighAccuracy: true
    };

    function success(pos) {
        let crd = pos.coords;
        let latitude = crd.latitude;
        let longitude = crd.longitude;
        const endPoint = `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`;
        console.log(`User Location is Latitude: ${latitude}, Longitude: ${longitude}`);
        axios.get(endPoint)
            .then(function (json) {
                let description = json.data.weather[0].description;
                document.getElementById('temp').innerHTML = json.data.main.temp + '&degC';
                document.getElementById('city').innerHTML = json.data.name + ', ' + json.data.sys.country
                document.getElementById('description').innerHTML = json.data.weather[0].main;
        });     
    };

    function error(err) {
        console.log(`ERROR(${err.code}): ${err.message}`);
    };

    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(success, error, options);
    }

};


setTimeout(
    function startTime() {
        let today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('clock').innerHTML = `Local Time: ${h}:${m}:${s}`;
        let t = setTimeout(startTime, 500);
    }, 2000
);

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
};


//Fahrenheit Converter

const fConvert = document.getElementById('fConvert');

fConvert.onclick = function(event){

    navigator.geolocation.getCurrentPosition(function(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        console.log(`Converting temperature measurement to Fahreheit...`);

        const endPoint = `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`;

        axios.get(endPoint)
            .then(function (json) {
                let description = json.data.weather[0].description;
                let temperature = (json.data.main.temp * 9) / 5 + 32;
                document.getElementById('temp').innerHTML = temperature + '&degF';
                document.getElementById('city').innerHTML = json.data.name + ', ' + json.data.sys.country
                document.getElementById('description').innerHTML = json.data.weather[0].main;
            });
        
    });

}


//Force the page to display back the degree Celsius unit
function reload() {
    location.reload(true);
}


/*
const cConvert = document.getElementById('cConvert');

cConvert.onclick = function(event) {
    navigator.geolocation.getCurrentPosition(function(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        console.log(`Converting temperature measurement to Fahreheit...`);
        const endPoint = `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`;
        axios.get(endPoint)
             .then(function (json) {
                 let description = json.data.weather[0].description;
                 let temperature = (json.data.main.temp * 9) / 5 + 32;
                 document.getElementById('temp').innerHTML = temperature + '&degC';
                 document.getElementById('city').innerHTML = json.data.name + ', ' + json.data.sys.country
                 document.getElementById('description').innerHTML = json.data.weather[0].main;
        });

    })
}

*/
