const days = {
  1: { x: -750, y: -1550, zoom: 1.5, text: "1. Luukku - Aurajoen arvoitus\n\nMatkaaja astelee jokirannan kosteassa tuulessa. Vanha panimon mestari kuiskaa: “Tähden jäljet alkavat täältä, Aurajoesta. Maista kylän omaa olutta, ja virta näyttää tien.” Ensimmäinen hörppy kimaltaa kuin veden pinta." },
  2: { x: -750, y: -1550, zoom: 1.5, text: "2. Luukku - Kauppatorin kohtalo\n\nTorilla myyjä ojentaa savustetun makkaran ja kertoo: “Moni on lähtenyt tähteä etsimään, harva palannut.” Hän iskee silmää ja ojentaa matkaajalle huurteisen – ehkä rohkeutta matkalle." },
  3: { x: -750, y: -1550, zoom: 1.5, text: "3. Luukku - Turun linna\n\nLinnan vanhassa kellarissa on pölyinen tynnyri. Sen kyljessä lukee: “Ensimmäinen vihje löytyy aina kotikaupungista.” Tynnyrissä oleva olut johdattaa kohti seuraavaa kaupunkia."},
  4: { x: -525, y: -1750, zoom: 1.5, text: "4. Luukku - Auringon kaupungin portti\n\nNaantalin vanhassa kaupungissa aurinko lämmittää vielä talvellakin. Matkaaja maistaa paikallista nektaria ja kuulee: “Tähden löytää idästä.”" },
  5: { x: -525, y: -1750, zoom: 1.5, text: "5. Luukku - Luostarin muurit\n\nVanha munkki kertoo paneneensa olutta jo silloin, kun Afrikan tähteä etsittiin kamelilla. Hän antaa matkaajalle uusimman rohtonsa ja reseptilappusen, jossa lukee: “Tähden tie on arvaamaton.”" },
  6: { x: -525, y: -1750, zoom: 1.5, text: "6. Luukku - Itsenäisyyspäivä\n\nKultarannan portilla vahtimestari ojentaa juhlaoluen. “Maista, niin kuulet mistä löydät tähden.” \n\nOlut on yhtä elegantti kuin presidentin kesäasunto — ja sen jälkimaku osoittaa matkan kohti Laitilaa." },
  7: { x: -525, y: -1200, zoom: 1.5, text: "7. Luukku - Kukkojen kaupunki\n\nLaitilassa ensimmäinen vastaan tulija on kukkonaamariin pukeutunut panimotyöläinen. Hän ojentaa uusimman tuotoksensa: “Tämä suojelee sinua metsän hengiltä.”" },
  8: { x: -525, y: -1200, zoom: 1.5, text: "8. Luukku - Metsäsuomalaisten majatalo\n\nMajatalon isäntä tarjoaa matkaajalle oluen ja kertoo tarinan: “Aikoinaan Tähti kulki tästä. Mutta se ei jäänyt – se paloi kuin nuotio ja lensi kohti rannikkoa.”" },
  9: { x: -525, y: -1200, zoom: 1.5, text: "9. Luukku - Vanha käräjäkallio\n\nKallion juurella matkaaja löytää tyhjän tynnyrin, johon on hakattu: “PORI”, mahtaako tähti löytyä sieltä?\n\n Viimeinen Laitila-olut, antaa matkaajalle voimaa jatkaa." },
  10: { x: -500, y: -600, zoom: 1.5, text: "10. Luukku - Reposaaren tulet\n\nReposaaressa matkaaja maistaa merituulen tuimaa olutta. Kalastaja kertoo: “Oluessa on suolaa ilmasta. Mutta Tähti? Se ei taida täältä löytyä”" },
  11: { x: -500, y: -600, zoom: 1.5, text: "11. Luukku - Jazzkadun kaiku\n\nTyhjänä kaikuvalla jazzkadulla saksofonisti soittaa hiljaisen sävelen. Hän tarjoaa matkaajalle huurteisen: “Rytmi johdattaa sinua eteenpäin. Tähden rytmi on etelässä”" },
  12: { x: -500, y: -600, zoom: 1.5, text: "12. Luukku - Kirjurinluoto\n\nMatkaaja istahtaa penkille Kirjurinluodossa ja tunnustelee taskuaan, hän huomaa että Aurajoella tavattu panimomestari sujautti oluen hänen huomaamattaan sinne, mikä veijari" },
  13: { x: -500, y: -600, zoom: 1.5, text: "13. Luukku - Porin Karhun varjo\n\nKarhupatsaan alla matkaaja löytää kylmälaukun. Sisällä on olut ja lappu: “Hyvä olut ei huuda – se kertoo hiljaa mihin mennä.”" },
  14: { x: -1400, y: -2000, zoom: 1.5, text: "14. Luukku - Ruukkikylän salaisuus\n\nFiskarin ruukkialueella sepänpaja tuoksuu savulta. Seppä ojentaa paikallisen saisonin ja sanoo: “Tähti kulki tästä vain kerran – ja jätti kipinän.”" },
  15: { x: -1400, y: -2000, zoom: 1.5, text: "15. Luukku - Vanha vesitorni\n\nVesitornin portaikossa kaikuu askelia. Ylhäällä matkaaja löytää pullon olutta ja viestin: “Kipinät yhdistyvät Teijossa.”" },
  16: { x: -1200, y: -1800, zoom: 1.5, text: "16. Luukku - Jylhät kalliot\n\nTeijon kansallispuistossa tuuli ulvoo. Retkeilijät tarjoavat katajan maustamaa olutta. “Tähteä ei ole täälläkään nähty, mutta siitä on kuultu tarinoita”" },
  17: { x: -1200, y: -1800, zoom: 1.5, text: "17. Luukku - Matildedalin satama\n\nSatamassa pienpanimon isäntä antaa kuparisen pullon. “Seuraa vanhaa venevajaa… ehkä se vie sinut tähden luo”" },
  18: { x: -1200, y: -1800, zoom: 1.5, text: "18. Luukku - Venevajan varjo\n\nVenevajassa löytyy pelkkä korkki. Ei pulloa. Mutta tuoksu… tuoksu on Kemiön suuntaan." },
  19: { x: -950, y: -2000, zoom: 1.5, text: "19. Luukku - Kemiön Saaristokylä\n\nKemiön keskusaukiolla paikallinen olutmestari tarjoaa paikallisen erikoisuuden. “Tämä on lähimpänä tähteä, mitä meillä on. Mutta oikea tähti… se löytyy lännestä.”" },
  20: { x: -650, y: -1250, zoom: 1.2, text: "20. Luukku - Piikkiön Asema\n\nTienvarren kapakassa tarjoilija ojentaa oluen. Hän sanoo hiljaa: “Matka on lähes ohi. Tähti kimaltaa Turussa.”" },
  21: { x: -750, y: -1550, zoom: 1.5, text: "21. Luukku - Kupittaan käänne\n\nKupittaan puistossa matkaaja löytää puun juurelta juoman." },
  22: { x: -750, y: -1550, zoom: 1.5, text: "22. Luukku - Vanha panimorakennus\n\nOvi narisee, sisällä tuoksuu maltaalta. Panimomestari hymyilee: “Matkasi on koetellut sinua. Tässä palkinto – mutta ei vielä Tähti.”" },
  23: { x: -750, y: -1550, zoom: 1.5, text: "23. Luukku - Aurajoki yöllä\n\nJoen pinnalla heijastuu tähti. Mutta se ei ole taivaalta – se on kelluva oluttynnyri. Matkaaja avaa sen ja löytää kultaisella korkilla sinetöidyn oluen." },
  24: { x: 30, y: 0, zoom: 0.25, text: "24. Luukku - Lounais-Suomen Tähti\n\nTurun linnan tornissa matkaaja avaa viimeisen oluen. Olut on täydellistä: sopivasti maltaista, sopivasti humalaa, juuri oikean pehmeää." },
  25: { x: 30, y: 0, zoom: 0.25, text: "VOITIT PELIN!" },
  26: { x: -745, y: 50, zoom: 0.90, text: "5 PÄIVÄÄ ALKUUN" },
  27: { x: -745, y: 50, zoom: 0.90, text: "4 PÄIVÄÄ ALKUUN" },
  28: { x: -745, y: 50, zoom: 0.90, text: "3 PÄIVÄÄ ALKUUN" },
  29: { x: -745, y: 50, zoom: 0.90, text: "2 PÄIVÄÄ ALKUUN" },
  30: { x: -745, y: 50, zoom: 0.90, text: "1 PÄIVÄÄ ALKUUN\n\n VALMISTAUDU METSÄSTYKSEEN!" },
};

var today = new Date().getDate();

function alignMap(day){
  const map = document.getElementById("map");
  var yesterday = days[today - 1]

  map.style.transition = "None"

  if(day !== days[1]){
    map.style.transform = `translate(${(yesterday).x}px, ${(yesterday).y}px) scale(${yesterday.zoom})`;
    setTimeout(() => {
        map.style.transition = "transform 1s ease"
        map.style.transform = `translate(${day.x}px, ${day.y}px) scale(${day.zoom})`;
        document.getElementById("text").innerText = day.text;
    }, 2000);
  } else {
    map.style.transition = "transform 1s ease"
    map.style.transform = `translate(${day.x}px, ${day.y}px) scale(${day.zoom})`;
    document.getElementById("text").innerText = day.text;
  }
}

alignMap(days[today]);