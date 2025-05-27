// TASK 1 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//1
// window.open("https://www.example.com", "newWindow", "width=300,height=300,left=300,top=300");
//2
//     setTimeout(function() {
//     window.open("https://www.example.com", "newWindow", "width=500,height=500,left=300,top=300");
// }, 2000);
//3
// setTimeout(function(){
//     const newOpenWindow = window.open("https://www.example.com", "newWindow", "width=500,height=500,left=300,top=300");
//     if(newOpenWindow){
//         newOpenWindow.moveTo(200,200);
//     } else {
//         alert("You are looser!");
//     }
// },2000);
//4

// setTimeout(function(){
//     const newOpenWindow = window.open("https://www.example.com", "newWindow", "width=500,height=500,left=300,top=300");
//     if(newOpenWindow && !newOpenWindow.closed){
//         newOpenWindow.close();
//         newOpenWindow.moveTo(200,200);
//     } else {
//         alert("You are looser!");
//     }
// },2000);

// TASK 2 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function changeCSS(){
//     const paragraphElement = document.getElementById('text');
//     if (paragraphElement) {
//         paragraphElement.style.color = 'orange';
//         paragraphElement.style.fontSize = '20px';
//         paragraphElement.style.fontFamily = 'Comic Sans MS';
//         alert("Good job");
//     } else {
//         alert("Error");
//     }
// }

//TASK 3 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function changeBackgroundColor(color) {
//   document.body.style.backgroundColor = color;
// }

// const button1 = document.getElementById("button1");
// if (button1) {
//   button1.onclick = function () {
//     changeBackgroundColor("blue");
//   };
// }

// const button2 = document.getElementById("button2");
// if (button2) {
//   button2.ondblclick = function () {
//     changeBackgroundColor("pink");
//   };
// }

// const button3 = document.getElementById("button3");
// if (button3) {
//   button3.onmousedown = function () {
//     changeBackgroundColor("brown");
//   };
//   button3.onmouseup = function () {
//     changeBackgroundColor("white");
//   };
// }

// const myLink = document.getElementById("myLink");
// if (myLink) {
//   myLink.onmouseover = function () {
//     changeBackgroundColor("yellow");
//   };
//   myLink.onmouseout = function () {
//     changeBackgroundColor("white");
//   };
// }

// TASK 4 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function removeSelectedOpion(){
//     const selectElement = document.getElementById('mySelect');
//     if (selectElement && selectElement.selectedIndex !== -1) {
//         selectElement.remove(selectElement.selectedIndex);
//     } else {
//         alert("Yo Yo");
//     }
// }

//TASK 5 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const button = document.getElementById('myButton');
//     const messageOutput = document.getElementById('messageOutput');
//    function displayMessage(message){
//     messageOutput.textContent = message;
//    }
//    if (button) {
//     button.onclick = function(){
//         displayMessage("I was pressed");
//     };
//     button.onmouseover = function(){
//         displayMessage("Mouse on me");
//     };
//     button.onmouseout = function(){
//         displayMessage("mouse is not on me");
//     };
//    }

// TASK 6 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const widthOutput = document.getElementById('widthOutput');
//         const heightOutput = document.getElementById('heightOutput');
//         function updateWindowSize() {
//             widthOutput.textContent = window.innerWidth;
//             heightOutput.textContent = window.innerHeight;
//         }
//         updateWindowSize();
//         window.addEventListener('resize', updateWindowSize);
        

// TASK 7 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const citiesByCountry = {
    usa: ["New-York", "Washington", "Chicago", "Boston"],
    germany: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
    ukraine: ["Kyiv", "Lviv", "Odesa", "Dnipro"]
};

const countrySelect = document.getElementById('country');
const citySelect = document.getElementById('cities');
const selectionOutput = document.getElementById('selectionOutput');

function updateCities() {
    const selectedCountry = countrySelect.value;
    citySelect.innerHTML = '<option value="">-- Виберіть місто --</option>';

    if (selectedCountry) {
        citySelect.disabled = false;
        const cities = citiesByCountry[selectedCountry];
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city.toLowerCase().replace(/\s+/g, '-');
            option.textContent = city;
            citySelect.appendChild(option);
        });
    } else { 
        citySelect.disabled = true;
    }
    updateSelectionOutput();
}

function updateSelectionOutput() {
    const selectedCountryName = countrySelect.options[countrySelect.selectedIndex].textContent;
    const selectedCityName = citySelect.options[citySelect.selectedIndex].textContent;

    if (selectedCountryName && selectedCountryName !== "-- Виберіть країну --") {
        let outputText = `Країна: ${selectedCountryName}`;
        if (selectedCityName && selectedCityName !== "-- Виберіть місто --") {
            outputText += `, Місто: ${selectedCityName}`;
        }
        selectionOutput.textContent = outputText;
    } else {
        selectionOutput.textContent = '';
    }
}

countrySelect.addEventListener('change', updateCities);
citySelect.addEventListener('change', updateSelectionOutput);
updateCities()