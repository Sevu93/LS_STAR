const days = {
  1: { x: -750, y: -1550, zoom: 1.5, text: "1. Luukku\n\n Saavut kylmään Turkuun, kuulit uudesta seikkailusta jossa kuin" },
  2: { x: -750, y: -1550, zoom: 1.5, text: "Day 2 surprise!" },
  3: { x: -750, y: -1550, zoom: 1.5, text: "Day 3 message!" },
  4: { x: -525, y: -1750, zoom: 1.5, text: "Day 3 message!" },
  5: { x: -525, y: -1750, zoom: 1.5, text: "Day 3 message!" },
  6: { x: -525, y: -1750, zoom: 1.5, text: "Day 3 message!" },
  7: { x: -525, y: -1200, zoom: 1.5, text: "Day 3 message!" },
  8: { x: -525, y: -1200, zoom: 1.5, text: "Day 3 message!" },
  9: { x: -525, y: -1200, zoom: 1.5, text: "Day 3 message!" },
  10: { x: 800, y: 100, zoom: 2.2, text: "Day 3 message!" },
  11: { x: 800, y: 100, zoom: 2.2, text: "Day 3 message!" },
  12: { x: 800, y: 100, zoom: 2.2, text: "Day 3 message!" },
  13: { x: 800, y: 100, zoom: 2.2, text: "Day 3 message!" },
  14: { x: 800, y: 100, zoom: 2.2, text: "Day 3 message!" },
  15: { x: 800, y: 100, zoom: 2.2, text: "Day 3 message!" },
  16: { x: 800, y: 100, zoom: 2.2, text: "Day 3 message!" },
  17: { x: 800, y: 100, zoom: 2.2, text: "Day 3 message!" },
  18: { x: 800, y: 100, zoom: 2.2, text: "Day 3 message!" },
  19: { x: 800, y: 100, zoom: 2.2, text: "Day 3 message!" },
  20: { x: 800, y: 100, zoom: 2.2, text: "Day 3 message!" },
  21: { x: 800, y: 100, zoom: 2.2, text: "Day 3 message!" },
  22: { x: 800, y: 100, zoom: 2.2, text: "Day 3 message!" },
  23: { x: 800, y: 100, zoom: 2.2, text: "Day 3 message!" },
  24: { x: 800, y: 2000, zoom: 2, text: "Day 3 message!" },
  25: { x: 30, y: 0, zoom: 0.25, text: "VOITIT PELIN!" },
  26: { x: -690, y: -0, zoom: 0.85, text: "5 PÄIVÄÄ ALKUUN" },
  27: { x: -750, y: -1550, zoom: 1.5, text: "4 PÄIVÄÄ ALKUUN (TURKUTEST)" },
  28: { x: -525, y: -1750, zoom: 1.5, text: "3 PÄIVÄÄ ALKUUN (NAANTALITEST)" },
  29: { x: -525, y: -1200, zoom: 1.5, text: "2 PÄIVÄÄ ALKUUN (LAITILATEST)" },
  30: { x: 750, y: 325, zoom: 0.95, text: "1 PÄIVÄÄ ALKUUN\n\n VALMISTAUDU METSÄSTYKSEEN!" },
};

var today = new Date().getDate();  // e.g. 1–31

function alignMap(day){
  const map = document.getElementById("map");
  if(day !== 1){
    map.style.transform = `translate(${(day-1).x}px, ${(day-1).y}px) scale(${day.zoom})`;
    setTimeout(() => {
        map.style.transform = `translate(${day.x}px, ${day.y}px) scale(${day.zoom})`;
        document.getElementById("text").innerText = day.text;
    }, 2000);
  } else {
    map.style.transform = `translate(${day.x}px, ${day.y}px) scale(${day.zoom})`;
    document.getElementById("text").innerText = day.text;
  }
}

alignMap(days[today]);