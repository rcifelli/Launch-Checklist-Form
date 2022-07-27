// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.getElementById("launchForm");

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
      }else if(isNaN(pilot) === false || isNaN(copilot) === false || isNaN(fuel) === true || isNaN(cargo) === true){
         alert("Please enter valid information.");
      }

      
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