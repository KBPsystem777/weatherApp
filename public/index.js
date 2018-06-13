        const url = 'https://fcc-weather-api.glitch.me/api/current?';
        
        let crd = pos.coords;
        let latitude = crd.latitude;
        let longitude = crd.longitude;
        let endPoint = `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`;
        console.log(`User Location is Latitude: ${latitude}, Longitude: ${longitude}`);
        
        let options = {
            enableHighAccuracy: false
        };

        function success(pos) {
            axios.get(endPoint)
                .then(function (json) {
                    //console.log(endPoint)
                    let description = json.data.weather[0].description;
                    let temp = json.data.main.temp;
                    document.getElementById('temp').innerHTML = `${temp}&deg`;
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
        }, 2000);

        function checkTime(i) {
            if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
            return i;
        };

        function convertToF() {
            axios.get(endPoint)
                .then(function (json) {
                    //console.log(endPoint)
                    let description = json.data.weather[0].description;
                    let temp = (json.data.main.temp * 9) / 5 + 32;
                    document.getElementById('temp').innerHTML = `${temp}&deg`;
                    document.getElementById('city').innerHTML = json.data.name + ', ' + json.data.sys.country
                    document.getElementById('description').innerHTML = json.data.weather[0].main;
                });
            document.getElementById('temp').innerHTML = temp;
        };