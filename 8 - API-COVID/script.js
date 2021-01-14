let baseURL = "https://api.covidtracking.com";

var currentInfoDisplay = false;

function dropDownMenu() {
    var element = document.getElementById("currentInfo");
    if (!currentInfoDisplay) {
        url = "https://api.covidtracking.com/v1/us/current.json";
        element.classList.toggle("visible");
        fetch(url) 
        .then(function (result) {
            // console.log(result);
            return result.json();
        })
        .then(function (json) {
            // console.log(json);
            displayResults(json);
        })
    } else {
        element.classList.toggle("hidden");
    }
}

function displayResults(json) {

    console.log(json.response)

    document.getElementById("states").innerHTML = `${json.response}`;
    document.getElementById("positive");
    var negative = document.getElementById("negative");
    var currentlyHos = document.getElementById("currently-hos");
    var critical = document.getElementById("critical-care");
    var ventilator = document.getElementById("ventilator");
    var recovered = document.getElementById("recovered");
    var date = document.getElementById("date");
    var death = document.getElementById("death");
    var hosipit = document.getElementById("hosipit");
    var negativeInc = document.getElementById("negativeInc");
    var positiveInc = document.getElementById("positiveInc");

    console.log(states);

    // states.innerHTML = json.states;
    // positive.innerHTML = json.positive;
    // negative.innerHTML = json.negative;
    // currentlyHos.innerHTML = json.hospitalizedCurrently;
    // critical.innerHTML = json.inIcuCurrently;
    // ventilator.innerHTML = json.onVentilatorCurrently;
    // recovered.innerHTML = json.recovered;
    // date.innerHTML = json.dateChecked;
    // death.innerHTML = json.death;
    // hosipit.innerHTML = json.hospitalized;
    // negativeInc.innerHTML = json.negativeIncrease;
    // positiveInc.innerHTML = json.positiveIncrease;

    console.log(states);
}