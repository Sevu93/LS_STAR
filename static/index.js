const days = {
  1: { x: -750, y: -1550, zoom: 1.5, text: "1. Luukku - Aurajoen arvoitus\n\nMatkaaja astelee jokirannan kosteassa tuulessa. Vanha panimon mestari kuiskaa: “Tähden jäljet alkavat täältä, Aurajoesta. Maista kylän omaa olutta, ja virta näyttää tien.” Ensimmäinen hörppy kimaltaa kuin veden pinta." },
  2: { x: -750, y: -1550, zoom: 1.5, text: "2. Luukku - Kauppatorin kohtalo\n\nTorilla myyjä ojentaa savustetun makkaran ja kertoo: “Moni on lähtenyt tähteä etsimään, harva palannut.” Hän iskee silmää ja ojentaa matkaajalle huurteisen – ehkä rohkeutta matkalle." },
  3: { x: -750, y: -1550, zoom: 1.5, text: "3. Luukku - Turun linna\n\nLinnan vanhassa kellarissa on pölyinen tynnyri. Sen kyljessä lukee: “Ensimmäinen vihje löytyy aina auringosta.” Tynnyrissä oleva olut johdattaa kohti seuraavaa kaupunkia."},
  4: { x: -525, y: -1750, zoom: 1.5, text: "4. Luukku - Auringon kaupungin portti\n\nNaantalin vanhassa kaupungissa aurinko lämmittää vielä talvellakin. Matkaaja maistaa paikallista nektaria ja kuulee kuiskauksen: “Tähti on idässä”" },
  5: { x: -525, y: -1750, zoom: 1.5, text: "5. Luukku - Luostarin muurit\n\nVanha munkki kertoo paneneensa olutta jo silloin, kun Afrikan tähteä etsittiin kamelilla. Hän antaa matkaajalle uusimman rohtonsa ja reseptilappusen, jossa lukee: “Tähden tie on arvaamaton.”" },
  6: { x: -525, y: -1750, zoom: 1.5, text: "6. Luukku - Itsenäisyyspäivä\n\nKultarannan portilla vahtimestari ojentaa juhlaoluen. “Maista, niin kuulet mistä löydät tähden.” \n\nOlut on yhtä elegantti kuin presidentin kesäasunto — ja sen jälkimaku osoittaa suunnan kohti pohjoista" },
  7: { x: -525, y: -1200, zoom: 1.5, text: "7. Luukku - Kukkojen kaupunki\n\nLaitilassa ensimmäinen vastaantulija on kukkonaamariin pukeutunut panimotyöläinen. Hän ojentaa uusimman tuotoksensa: “Tämä suojelee sinua metsän hengiltä.”" },
  8: { x: -525, y: -1200, zoom: 1.5, text: "8. Luukku - Metsäsuomalaisten majatalo\n\nMajatalon isäntä tarjoaa matkaajalle oluen ja kertoo tarinan: “Aikoinaan Tähti kulki tästä. Mutta se ei jäänyt – se paloi kuin nuotio ja lensi kohti rannikkoa.”" },
  9: { x: -525, y: -1200, zoom: 1.5, text: "9. Luukku - Vanha käräjäkallio\n\nKallion juurella matkaaja löytää tyhjän tynnyrin, johon on hakattu: “PORI”, mahtaako tähti löytyä sieltä?\n\n Viimeinen Laitila-olut, antaa matkaajalle voimaa jatkaa kohti pohjoista." },
  10: { x: -500, y: -600, zoom: 1.5, text: "10. Luukku - Reposaaren tuulet\n\nReposaaressa matkaaja maistaa merituulen tuimaa olutta. Kalastaja kertoo: “Oluessa on suolaa ilmasta. Mutta Tähti? Se ei taida täältä löytyä”" },
  11: { x: -500, y: -600, zoom: 1.5, text: "11. Luukku - Jazzkadun kaiku\n\nTyhjänä kaikuvalla jazzkadulla saksofonisti soittaa hiljaisen sävelen. Hän tarjoaa matkaajalle huurteisen: “Rytmi johdattaa sinua eteenpäin. Tähden rytmi on etelässä”" },
  12: { x: -500, y: -600, zoom: 1.5, text: "12. Luukku - Kirjurinluoto\n\nMatkaaja istahtaa penkille Kirjurinluodossa ja tunnustelee taskuaan, hän huomaa että Aurajoella tavattu panimomestari sujautti oluen hänen huomaamattaan sinne" },
  13: { x: -500, y: -600, zoom: 1.5, text: "13. Luukku - Porin Karhun varjo\n\nKarhupatsaan alla matkaaja löytää kylmälaukun. Sisällä on olut ja lappu: “Miksi Porin karhu pannaan nykyään keravalla? No onneksi on vielä muita panimoita”" },
  14: { x: -1400, y: -2000, zoom: 1.5, text: "14. Luukku - Ruukkikylän salaisuus\n\nFiskarin ruukkialueella sepänpaja tuoksuu savulta. Seppä ojentaa paikallisen saisonin ja sanoo: “Tähti ei ole täällä käynyt, mutta meillä on oma kipinämme.”" },
  15: { x: -1400, y: -2000, zoom: 1.5, text: "15. Luukku - Vanha vesitorni\n\nVesitornin portaikossa kaikuu askelia. Ylhäällä matkaaja löytää pullon olutta ja viestin: “Teijon aarre odottaa löytäjäänsä”" },
  16: { x: -1200, y: -1800, zoom: 1.5, text: "16. Luukku - Jylhät kalliot\n\nTeijon kansallispuistossa tuuli ulvoo. Retkeilijät tarjoavat katajan maustamaa olutta. “Teijon aarre on jossain lähellä”" },
  17: { x: -1200, y: -1800, zoom: 1.5, text: "17. Luukku - Matildedalin satama\n\nSatamassa pienpanimon isäntä antaa kuparisen pullon. “Seuraa vanhaa venevajaa… ehkä se vie sinut aarteen luo”" },
  18: { x: -1200, y: -1800, zoom: 1.5, text: "18. Luukku - Venevajan varjo\n\nVenevajassa löytyy tyhjä arkku ja kirje edelliseltä matkaajalta. “Löysin aarteen ensin, mutta ota lohdutukseksi tämä tekemäni olut”" },
  19: { x: -950, y: -2000, zoom: 1.5, text: "19. Luukku - Kemiön Saaristokylä\n\nKemiön keskusaukiolla paikallinen olutmestari tarjoaa paikallisen erikoisuuden. “Tämä on lähimpänä tähteä, mitä meillä on. Mutta oikea tähti… se löytyy lännestä.”" },
  20: { x: -650, y: -1250, zoom: 1.2, text: "20. Luukku - Piikkiön Asema\n\nTienvarren kapakassa tarjoilija ojentaa paikallisen oluen. Hän sanoo hiljaa: “Matka on lähes ohi. Tähti kimaltaa Turussa.”" },
  21: { x: -750, y: -1550, zoom: 1.5, text: "21. Luukku - Kupittaan käänne\n\nKupittaan puistossa matkaaja löytää puun juurelta juoman. Puisto on hiljainen, täydellinen sää pussikaljalle." },
  22: { x: -750, y: -1550, zoom: 1.5, text: "22. Luukku - Vanha panimorakennus\n\nOvi narisee, sisällä tuoksuu maltaalta. Panimomestari hymyilee: “Matkasi on koetellut sinua. Tässä palkinta, mutta se ei ole etsimäsi Tähti.”" },
  23: { x: -750, y: -1550, zoom: 1.5, text: "23. Luukku - Aurajoki yöllä\n\nJoen pintaan heijastuu tähden pilke. Mutta se ei ole taivaalta, vaan kelluva oluttynnyri. Matkaaja avaa sen ja löytää kultaisella korkilla sinetöidyn oluen." },
  24: { x: 30, y: 0, zoom: 0.25, text: "24. Luukku - Lounais-Suomen Tähti\n\nTurun linnan tornissa matkaaja avaa viimeisen oluen. Olut on täydellistä: sopivasti maltaista, sopivasti humalaa, juuri oikean pehmeää." },
  25: { x: 30, y: 0, zoom: 0.25, text: "VOITIT PELIN!" },
  26: { x: -745, y: 50, zoom: 0.90, text: "5 PÄIVÄÄ ALKUUN" },
  27: { x: -745, y: 50, zoom: 0.90, text: "4 PÄIVÄÄ ALKUUN" },
  28: { x: -745, y: 50, zoom: 0.90, text: "3 PÄIVÄÄ ALKUUN" },
  29: { x: -745, y: 50, zoom: 0.90, text: "2 PÄIVÄÄ ALKUUN" },
  30: { x: -745, y: 50, zoom: 0.90, text: "1 PÄIVÄ ALKUUN\n\n VALMISTAUDU METSÄSTYKSEEN!" },
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