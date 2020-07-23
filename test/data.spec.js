import {showData, champDescriptionDesk, champDescription, filterData, sortData} from '../src/data.js';
import data from '../src/data/lol/lol.js';

describe('showData', () => {
  it('is a function', () => {
    expect(typeof showData).toBe('function');
  });

  it('returns `lolDataHTML`', () => {
    expect(typeof showData(data)).toBe('string');
  });
});

describe('champDescriptionDesk', () => {
  it('is a function', () => {
    expect(typeof champDescriptionDesk).toBe('function');
  });

  it('returns `champDescriptionHTMLdesk`', () => {
    expect(champDescriptionDesk(data, 133)).toBe(`<div class = "champDescriptionDesk">
    <br>
    <img class ="imageChampionDesk" src = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg">
    <div class "titleAndDescription">
    <div class "champTitlesDesk">
      <h1>Aatrox: the Darkin Blade</h1>
      </br>
    </div>
      <div class = "textDescriptionContainer">
      <h3>Fighter,Tank</h3>
      </br>
      <p>Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...</p>
    <br>
    </div>
    </div>`);
  });
});

describe('champDescription', () => {
  it('is a function', () => {
    expect(typeof champDescription).toBe('function');
  });

  it('returns `champDescriptionHTML`', () => {
    expect(champDescription(data, 133)).toBe(`<div class = "champDescription">
    <br>
      //<h1>Aatrox</h1>
      <h3>the Darkin Blade</h3>
    <br>
      <div class = "descriptionText">
        <img class = "imgSplash" src = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg">
        </br></br>
        <h3>Fighter,Tank</h3>
        <br>
        <p>Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...</p>
        </br>
        <h3>Statistics</h3>
        <p>Health Points: 537.8</p>
        <p>HP per level: 85</p>
        <p>Magic Penetration: 105.6</p>
        <p>MP per level: 45</p>
        <p>Movement Speed: 345</p>
        <p>Armor: 24.384</p>
        <p>Armor per level: 3.8</p>
        <p>Spell Block: 32.1</p>
        <p>SP per level: 1.25</p>
        <p>Attack Range: 150</p>
        <p>HP regeneration: 6.59</p>
        <p>HP regen per level: 0.5</p>
        <p>Mana regeneration: 0</p>
        <p>Mana regen per level: 0</p>
        <p>Critic chance: 0</p>
        <p>Critic chance per level: 0</p>
        <p>Attack Damage: 60.376</p>
        <p>AD per level: 3.2</p>
        <p>Attack Speed: -0.04</p>
        <p>AS per level: 3</p>
        </br>
      </div>
      <button type="button" class="backToNormal returning">Back</button>
  </div>`);
  });
});

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('returns `lolDataHTML`', () => {
expect(filterData(data, 'Support')).toBe(`<div  data-arrayposition="130" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Alistar.png">
        <h2 class = "champName">Alistar</h2>
        </div><div  data-arrayposition="128" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Anivia.png">
        <h2 class = "champName">Anivia</h2>
        </div><div  data-arrayposition="126" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Ashe.png">
        <h2 class = "champName">Ashe</h2>
        </div><div  data-arrayposition="123" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Bard.png">
        <h2 class = "champName">Bard</h2>
        </div><div  data-arrayposition="120" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Braum.png">
        <h2 class = "champName">Braum</h2>
        </div><div  data-arrayposition="106" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/FiddleSticks.png">
        <h2 class = "champName">FiddleSticks</h2>
        </div><div  data-arrayposition="96" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Heimerdinger.png">
        <h2 class = "champName">Heimerdinger</h2>
        </div><div  data-arrayposition="93" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Ivern.png">
        <h2 class = "champName">Ivern</h2>
        </div><div  data-arrayposition="92" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Janna.png">
        <h2 class = "champName">Janna</h2>
        </div><div  data-arrayposition="85" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Karma.png">
        <h2 class = "champName">Karma</h2>
        </div><div  data-arrayposition="81" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Kayle.png">
        <h2 class = "champName">Kayle</h2>
        </div><div  data-arrayposition="73" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Leona.png">
        <h2 class = "champName">Leona</h2>
        </div><div  data-arrayposition="70" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Lulu.png">
        <h2 class = "champName">Lulu</h2>
        </div><div  data-arrayposition="69" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Lux.png">
        <h2 class = "champName">Lux</h2>
        </div><div  data-arrayposition="61" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Morgana.png">
        <h2 class = "champName">Morgana</h2>
        </div><div  data-arrayposition="60" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Nami.png">
        <h2 class = "champName">Nami</h2>
        </div><div  data-arrayposition="55" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Nunu.png">
        <h2 class = "champName">Nunu</h2>
        </div><div  data-arrayposition="53" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Orianna.png">
        <h2 class = "champName">Orianna</h2>
        </div><div  data-arrayposition="34" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Sona.png">
        <h2 class = "champName">Sona</h2>
        </div><div  data-arrayposition="33" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Soraka.png">
        <h2 class = "champName">Soraka</h2>
        </div><div  data-arrayposition="31" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Syndra.png">
        <h2 class = "champName">Syndra</h2>
        </div><div  data-arrayposition="30" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/TahmKench.png">
        <h2 class = "champName">TahmKench</h2>
        </div><div  data-arrayposition="29" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Taliyah.png">
        <h2 class = "champName">Taliyah</h2>
        </div><div  data-arrayposition="27" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Taric.png">
        <h2 class = "champName">Taric</h2>
        </div><div  data-arrayposition="25" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Thresh.png">
        <h2 class = "champName">Thresh</h2>
        </div><div  data-arrayposition="1" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Zilean.png">
        <h2 class = "champName">Zilean</h2>
        </div><div  data-arrayposition="0" class = "uniqueChamp">
        <img class ="imageChampion"src = "https://www.masterypoints.com/assets/img/lol/champion_icons/Zyra.png">
        <h2 class = "champName">Zyra</h2>
        </div>`);
  });
});

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returns `lolDataHTML`', () => {
    expect(typeof sortData(data, "Attack", "Ascendente")).toBe('string');
  });
});