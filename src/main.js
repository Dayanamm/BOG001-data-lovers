import {showData, filterData, champDescriptionDesk, sortData, champDescription, estructuraHTML} from './data.js';

import data from './data/lol/lol.js';

//Vista uno --> Explore
const viewOne = document.getElementsByClassName("viewOne")[0];

//Vista two --> Campeones.
const viewTwo = document.getElementsByClassName("viewTwo")[0];

//Vista two --> Campeones celular.
let here = document.getElementById("here");

//Almacena arrays con cada campeón. 
const champD = document.getElementById("champD");

//Almacena 30 Arrays por vista.
let championsView = document.getElementById("champions");
  let next = document.getElementById("next");
  next.addEventListener("click", showsNewUne);
  let back = document.getElementById("back");
  back.addEventListener("click", showsNewTwo);

//No muestra los campeones. 
viewTwo.style.display = 'none';

//Explorar: Muestra los campeones. 
const explore = document.getElementsByClassName("explore")[0];
explore.addEventListener("click", allChamps);

//Filtrar los campeones
let filterButton = document.getElementsByClassName("filterButton")[0];
filterButton.addEventListener("click", champsByCondition);

//Ordena los campeones
let sortButton = document.getElementsByClassName("sortButton")[0];
sortButton.addEventListener("click", champsByFilter);

//Muestra todos los campeones
function allChamps(){
    viewOne.style.display = 'none';
    viewTwo.style.display = 'block';
    
    //Todos los arrays de campeones.
    here.innerHTML = showData(data);

    //Información por campeón. 
    const uniqueChampDiv = document.querySelectorAll('.uniqueChamp'); 

    //Mostrar la información de cada campeón
    function individualChamp(abc){
        const specificTarget = abc.currentTarget.dataset.arrayposition;
        here.innerHTML = champDescription(data, specificTarget);
        
        let backToNormal = document.getElementsByClassName("backToNormal")[0];
        backToNormal.addEventListener("click", allChamps);
    }

    uniqueChampDiv.forEach(function(clickEvent){ 
        clickEvent.addEventListener('click', individualChamp);
      });
}

//Muestra campeones por rol. 
function champsByCondition(){
    let condition = document.getElementById("Condition").value; 
    here.innerHTML = filterData(data, condition);
    championsView.innerHTML = filterData (data, condition);
    
    const uniqueChampDiv = document.querySelectorAll('.uniqueChamp');
    
    function individualChamp(abc){
        const specificTarget = abc.currentTarget.dataset.arrayposition;
        here.innerHTML = champDescription(data, specificTarget);
        let backToNormal = document.getElementsByClassName("backToNormal")[0];
        backToNormal.addEventListener("click", champsByCondition);
    }

    uniqueChampDiv.forEach(function(clickEvent){ 
        clickEvent.addEventListener('click', individualChamp);
      });

    
}

//Muestra en orden los campeones
function champsByFilter(){
    const uniqueChampDiv = document.querySelectorAll('.uniqueChamp');
    let sortBy = document.getElementById("sortBy").value;               
    let sortOrder = document.getElementById("sortOrder").value;
    here.innerHTML = sortData(data, sortBy, sortOrder);    
    
    function individualChamp(abc){
        const specificTarget = abc.currentTarget.dataset.arrayposition;
        here.innerHTML = champDescription(data, specificTarget);
        let backToNormal = document.getElementsByClassName("backToNormal")[0];
        backToNormal.addEventListener("click", champsByCondition);
    }

    uniqueChampDiv.forEach(function(clickEvent){ 
        clickEvent.addEventListener('click', individualChamp);
      });
}

//Slider 30 campeones por vista. 
    let iteradorDataLol = 0; 
    let myArray = estructuraHTML(data);    

// Atrás
function showsNewUne(){
    if(iteradorDataLol==0){
        iteradorDataLol=5;
    }
    iteradorDataLol--;
    championsView.innerHTML = myArray[iteradorDataLol];
    //console.log(iteradorDataLol);
    let uniqueChampDiv = document.querySelectorAll(".uniqueChamp");

    function hoverChamp(abc){
        const specificTarget = abc.currentTarget.dataset.arrayposition;
        champD.innerHTML = champDescriptionDesk(data, specificTarget);
    }
    
    uniqueChampDiv.forEach(function(mouseEvent){
        mouseEvent.addEventListener('mouseover', hoverChamp);
      });
}

//Adelante
function showsNewTwo(){
    //Vista por defecto.
    champD.innerHTML = champDescriptionDesk(data, 133);

    if(iteradorDataLol==4){
        iteradorDataLol=5;
    }
    iteradorDataLol++;
    championsView.innerHTML = myArray[iteradorDataLol];
    //console.log(iteradorDataLol);

    let uniqueChampDiv = document.querySelectorAll(".uniqueChamp");

    function hoverChamp(abc){
        const specificTarget = abc.currentTarget.dataset.arrayposition;
        champD.innerHTML = champDescriptionDesk(data, specificTarget);
    }
    
    uniqueChampDiv.forEach(function(mouseEvent){
        mouseEvent.addEventListener('mouseover', hoverChamp);
      });
}

showsNewTwo();
showsNewUne();