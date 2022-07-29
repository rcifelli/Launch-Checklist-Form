// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.getElementById("launchForm");
   let itemStatus = document.getElementById("itemStatus");

   let launchStatus = document.getElementById('launchStatus');
   let pilotStatus = document.getElementById('pilotStatus');
   let copilotStatus = document.getElementById('copilotStatus');
   let fuelStatus = document.getElementById('fuelStatus');
   let cargoStatus = document.getElementById('cargoStatus');

   form.addEventListener("submit", function(event){
      event.preventDefault();

      let pilotName = document.querySelector("input[name=pilotName]");
      let pilot = pilotName.value;
      let pilotCheck = Number(pilot);

      let copilotName = document.querySelector("input[name=copilotName]");
      let copilot = copilotName.value;
      let copilotCheck = Number(copilot);

      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let fuel = fuelLevel.value;
      let fuelCheck = Number(fuel);

      let cargoMass = document.querySelector("input[name=cargoMass]");
      let cargo = cargoMass.value;
      let cargoCheck = Number(cargo);

      if(!pilot || !copilot || !fuel || !cargo){
         alert("All fields required");
      }else if(isNaN(pilotCheck) === false || isNaN(copilotCheck) === false || isNaN(fuelCheck) === true || isNaN(cargoCheck) === true){
         alert("Please enter valid information type.");
      }else{
         itemStatus.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
         if(fuel >= 10000 && cargo <= 10000){
            fuelStatus.innerHTML = `Fuel level check passed`;
            cargoStatus.innerHTML = `Cargo mass check passed`;
            launchStatus.innerHTML = "<span style='color:green'>Shuttle is ready for launch</span>";
         }else if (fuel < 10000 && cargo <= 10000){
            fuelStatus.innerHTML = `${fuel} liters is not enough fuel for launch`;
            cargoStatus.innerHTML = `Cargo mass check passed`;
            launchStatus.innerHTML = "<span style='color:red'>Shuttle not ready for launch</span>";
         }else if(cargo > 10000 && fuel >= 10000){
            fuelStatus.innerHTML = `Fuel level check passed`;
            cargoStatus.innerHTML = `${cargo} is too heavy for launch`;
            launchStatus.innerHTML = "<span style='color:red'>Shuttle not ready for launch</span>";
         }else{
            fuelStatus.innerHTML = `${fuel} liters is not enough fuel for launch`;
            cargoStatus.innerHTML = `${cargo} is too heavy for launch`;
            launchStatus.innerHTML = "<span style='color:red'>Shuttle not ready for launch</span>";
         };
      };


   });

   let json = [];
   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         const missionTarget = document.getElementById("missionTarget");
         let index = Math.floor(Math.random()*json.length);
         missionTarget.innerHTML=`
         <h2>Mission Destination</h2>
            <ul>
               <li>Name: ${json[index].name}</li>
               <li>Diameter: ${json[index].diameter}</li>
               <li>Star: ${json[index].star}</li>
               <li>Distance from Earth: ${json[index].distance}</li>
               <li>Number of Moons: ${json[index].moons}</li>
            </ul>
            <img src="${json[index].image}">`
      });
   });

});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/