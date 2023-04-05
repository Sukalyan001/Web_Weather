const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_real_val = document.getElementById("temp_real_val");

const datahide = document.querySelector(".middle_layer");


const getInfo = async (event) => {
    event.preventDefault();
    let cityval = cityName.value;

    if (cityval === "") {
        city_name.innerText = `Please write the city name before search..😑`;
        datahide.classList.add("data_hide");
        

    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=8eded9c089aca5bc98afd7a21d52a7fb`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;


            const tempMood = arrData[0].weather[0].main;
            //condition to check sunny or cloud..
            if (tempMood == "clear") {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style='color:#eccc68'></i>";
            } else if (tempMood == "clouds") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style='color:#f1f2f6'></i>";
            } else if (tempMood == "rain") {
                temp_status.innerHTML =
                    "<i class='fas fa-rain' style='color:#a4b0be'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style='color:#eccc68'></i>";
            }

            datahide.classList.remove("data_hide");

        } catch (error) {
            city_name.innerText = `Please enter the city name properly😰!!`;
            datahide.classList.add("data_hide");
            
            
        }

    }

}



submitBtn.addEventListener('click', getInfo);