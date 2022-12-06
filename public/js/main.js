const cityName = document.getElementById("cityName")
const submitBtn = document.getElementById("submitBtn")
const city_name = document.getElementById("city_name")
const temp_real_value = document.getElementById("temp_real_value")
const temp_status = document.getElementById("temp_status")
const data_hide = document.querySelector('.middle_layer')
const daytoday = document.getElementById("daytoday")
const today_date = document.getElementById("today_date")
const month = document.getElementById("month")
const year = document.getElementById("year")


let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let d = new Date();
let day = d.getDay();
let cmonth = d.getMonth()
month.innerHTML = months[cmonth]
year.innerHTML = d.getFullYear();
today_date.innerHTML = d.getDate() 
daytoday.innerHTML = days[day];

const getInfo = async(e) => {
    e.preventDefault()
    let cityVal = cityName.value
    console.log(cityVal)

    if(cityVal === ""){
        city_name.innerText = "Plz write the name before search"
        data_hide.classList.add("data_hide")
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=689d581be4ad2ff0ee02725de752f55b`
            const response = await fetch(url)
            const data = await response.json()
            const arrData = [data]

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`
            temp_real_value.innerText = arrData[0].main.temp
            const tempMood = arrData[0].weather[0].main

            

            if(tempMood == "Clear"){
                temp_status.innerHTML = '<i class="fa-solid fa-sun" style="color: #eccc68"></i>'
            }
            else if(tempMood == "Clouds"){
                temp_status.innerHTML = '<i class="fa-solid fa-cloud" style="color: #f1f2f6"></i>'
            }else if(tempMood == "Rain"){
                temp_status.innerHTML = '<i class="fa-solid fa-cloud-rain style="color: #a4b0be" "></i>'
            }else{
                temp_status.innerHTML = '<i class="fa-solid fa-cloud" style="color: #eccc68"></i>'
            }
            data_hide.classList.remove("data_hide")
        }
        catch{
            city_name.innerText = "Plz enter the city name properly"
            data_hide.classList.add("data_hide")
        }
    }
}
submitBtn.addEventListener("click", getInfo)

