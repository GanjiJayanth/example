function wFach(){
    var x = document.getElementById("search").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${x}&appid=a2559e274bd7bb79098836baf4bdc214&units=metric`)
    .then(response => response.json())
    .then(data=>{
        var display = document.getElementById("Display")
        console.log(data)
        var temp = data.main.temp;
        display.innerHTML =`${temp}` 
    })
}