//Posición de arrays.
const arrayChamps = (data) => {
  data = Object.values(data).slice(3);
  
  //Los arrays inversos. 
  function logLolData(temp){
    data = Object.values(temp);
  } 
  data.forEach(logLolData);
  data = data.reverse();
  return data;
}

//Muestro cada uno de los campeones en HTML. 
export const showData = (data) =>{
  data = arrayChamps(data);

  let lolDataHTML = [];

  for(let i=0; i<data.length; i++){
    lolDataHTML = `
      <div data-arrayposition="${[i]}" class = "uniqueChamp">
      <img class ="imageChampion"src = "${data[i].img}">
      <h2 class = "champName">${data[i].id}</h2>
      </div>` + lolDataHTML;
  }

   return lolDataHTML;
 
}

//Descripción de cada campeón-
export const champDescriptionDesk = (data, specificChamp) => {
  data = arrayChamps(data);

  const champDescriptionHTMLdesk = `<div class = "champDescriptionDesk">
  <br>
  <img class ="imageChampionDesk" src = "${data[specificChamp].splash}">
  <div class "titleAndDescription">
  <div class "champTitlesDesk">
    <h1>${data[specificChamp].id}: ${data[specificChamp].title}</h1>
    </br>
  </div>
    <div class = "textDescriptionContainer">
    <h3>${data[specificChamp].tags}</h3>
    </br>
    <p>${data[specificChamp].blurb}</p>
  <br>
  </div>
  </div>`;

      return champDescriptionHTMLdesk;
}

//Descripción vista celular.
export const champDescription = (data, specificChamp) =>{
  data = arrayChamps(data);

  const champDescriptionHTML = `<div class = "champDescription">
  <br>
    //<h1>${data[specificChamp].id}</h1>
    <h3>${data[specificChamp].title}</h3>
  <br>
    <div class = "descriptionText">
      <img class = "imgSplash" src = "${data[specificChamp].splash}">
      </br></br>
      <h3>${data[specificChamp].tags}</h3>
      <br>
      <p>${data[specificChamp].blurb}</p>
      </br>
      <h3>Statistics</h3>
      <p>Health Points: ${data[specificChamp].stats.hp}</p>
      <p>HP per level: ${data[specificChamp].stats.hpperlevel}</p>
      <p>Magic Penetration: ${data[specificChamp].stats.mp}</p>
      <p>MP per level: ${data[specificChamp].stats.mpperlevel}</p>
      <p>Movement Speed: ${data[specificChamp].stats.movespeed}</p>
      <p>Armor: ${data[specificChamp].stats.armor}</p>
      <p>Armor per level: ${data[specificChamp].stats.armorperlevel}</p>
      <p>Spell Block: ${data[specificChamp].stats.spellblock}</p>
      <p>SP per level: ${data[specificChamp].stats.spellblockperlevel}</p>
      <p>Attack Range: ${data[specificChamp].stats.attackrange}</p>
      <p>HP regeneration: ${data[specificChamp].stats.hpregen}</p>
      <p>HP regen per level: ${data[specificChamp].stats.hpregenperlevel}</p>
      <p>Mana regeneration: ${data[specificChamp].stats.mpregen}</p>
      <p>Mana regen per level: ${data[specificChamp].stats.mpregenperlevel}</p>
      <p>Critic chance: ${data[specificChamp].stats.crit}</p>
      <p>Critic chance per level: ${data[specificChamp].stats.critperlevel}</p>
      <p>Attack Damage: ${data[specificChamp].stats.attackdamage}</p>
      <p>AD per level: ${data[specificChamp].stats.attackdamageperlevel}</p>
      <p>Attack Speed: ${data[specificChamp].stats.attackspeedoffset}</p>
      <p>AS per level: ${data[specificChamp].stats.attackspeedperlevel}</p>
      </br>
    </div>
    <button type="button" class="backToNormal returning">Back</button>
</div>`;

    return champDescriptionHTML;

}

//Permite filtrar la información. 
export const filterData = (data, condition) => {
  data = arrayChamps(data);

  let lolDataHTML = [];
  let newData = [];
  for(let i=0; i<data.length; i++){

    if(data[i].tags[0] === condition||data[i].tags[1] === condition){
      newData[i] = data[i];
      lolDataHTML = `<div  data-arrayposition="${[i]}" class = "uniqueChamp">
      <img class ="imageChampion"src = "${data[i].img}">
      <h2 class = "champName">${data[i].id}</h2>
      </div>` + lolDataHTML;
    }
    
    if(condition === "All"){
      newData[i] = data[i];
      lolDataHTML = `<div data-arrayposition="${[i]}" class = "uniqueChamp">
      <img class ="imageChampion"src = "${data[i].img}">
      <h2 class = "champName">${data[i].id}</h2>
      </div>` + lolDataHTML;
    }
    
  }
   newData.filter(Boolean);
   console.log(lolDataHTML);
  return lolDataHTML;
}

//Permite ordenar la información.
export const sortData = (data, sortBy, sortOrder) => {
  data = arrayChamps(data);

  let lolDataHTML;


  //Attack

  if(sortBy=="Attack" && sortOrder=="Ascendente"){

    data.sort(function(a, b){
      return a.info.attack-b.info.attack
  })
  }

  if(sortBy=="Attack" && sortOrder=="Descendente"){

    data.sort(function(a, b){
      return b.info.attack-a.info.attack
  })
  }
  
  //Defense
  if(sortBy=="Defense" && sortOrder=="Ascendente"){

    data.sort(function(a, b){
      return a.info.defense-b.info.defense
  })
  }

  if(sortBy=="Defense" && sortOrder=="Descendente"){

    data.sort(function(a, b){
      return b.info.defense-a.info.defense
  })
  }

  //magic
  if(sortBy=="Magic" && sortOrder=="Ascendente"){

    data.sort(function(a, b){
      return a.info.magic-b.info.magic
  })
  }

  if(sortBy=="Magic" && sortOrder=="Descendente"){

    data.sort(function(a, b){
      return b.info.magic-a.info.magic
  })
  }

  //Difficulty
  if(sortBy=="Difficulty" && sortOrder=="Ascendente"){

    data.sort(function(a, b){
      return a.info.difficulty-b.info.difficulty
  })
  }

  if(sortBy=="Difficulty" && sortOrder=="Descendente"){

    data.sort(function(a, b){
      return b.info.difficulty-a.info.difficulty
  })
  }

  for(let i=0; i<data.length; i++){
  lolDataHTML = `
  <div data-arrayposition="${[i]}" class = "uniqueChamp">
  <img class ="imageChampion"src = "${data[i].img}">
  <h2 class = "champName">${data[i].id}</h2>
  <p class = "statics">Attack: ${data[i].info.attack}  Magic: ${data[i].info.magic}  Defense: ${data[i].info.defense}  Difficulty: ${data[i].info.difficulty}</p>
  </div>` + lolDataHTML;}

  return lolDataHTML;
}

//Estructura 30 campeones
export const estructuraHTML = (data) => {
  data = arrayChamps(data);

  let lolDataHTML1 = [];
  let lolDataHTML2 = [];
  let lolDataHTML3 = [];
  let lolDataHTML4 = [];
  let lolDataHTML5 = [];

  for(let i=104; i<134; i++){
    lolDataHTML1 = `
      <div data-arrayposition="${[i]}" class = "uniqueChamp">
      <img class ="imageChampion"src = "${data[i].img}">
      <h2 class = "champName">${data[i].id}</h2>
      </div>` + lolDataHTML1;
  }
   for(let i=74; i<104; i++){
     lolDataHTML2 = `
       <div data-arrayposition="${[i]}" class = "uniqueChamp">
       <img class ="imageChampion"src = "${data[i].img}">
       <h2 class = "champName">${data[i].id}</h2>
       </div>` + lolDataHTML2;
   }
  for(let i=44; i<74; i++){
    lolDataHTML3 = `
      <div data-arrayposition="${[i]}" class = "uniqueChamp">
      <img class ="imageChampion"src = "${data[i].img}">
      <h2 class = "champName">${data[i].id}</h2>
      </div>` + lolDataHTML3;
  }
  for(let i=14; i<44; i++){
    lolDataHTML4 = `
      <div data-arrayposition="${[i]}" class = "uniqueChamp">
      <img class ="imageChampion"src = "${data[i].img}">
      <h2 class = "champName">${data[i].id}</h2>
      </div>` + lolDataHTML4;
  }
  for(let i=0; i<14; i++){
    lolDataHTML5 = `
      <div data-arrayposition="${[i]}" class = "uniqueChamp">
      <img class ="imageChampion"src = "${data[i].img}">
      <h2 class = "champName">${data[i].id}</h2>
      </div>` + lolDataHTML5;
  }
let myArray = [lolDataHTML1, lolDataHTML2, lolDataHTML3, lolDataHTML4, lolDataHTML5];
return myArray
}