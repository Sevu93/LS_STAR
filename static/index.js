const days = {
  1: { x: 550, y: 1400, zoom: 1.5, text: "1. Luukku\n\n Saavut kylmään Turkuun, kuulit uudesta seikkailusta jossa kuin" },
  2: { x: 400, y: 300, zoom: 1.5, text: "Day 2 surprise!" },
  3: { x: 800, y: 100, zoom: 2.2, text: "Day 3 message!" },
  4: { x: 800, y: 100, zoom: 2.2, text: "Day 3 message!" },
  5: { x: 800, y: 100, zoom: 2.2, text: "Day 3 message!" },
  6: { x: 800, y: 100, zoom: 2.2, text: "Day 3 message!" },
  7: { x: 800, y: 100, zoom: 2.2, text: "Day 3 message!" },
  8: { x: 800, y: 100, zoom: 2.2, text: "Day 3 message!" },
  9: { x: 800, y: 100, zoom: 2.2, text: "Day 3 message!" },
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
  25: { x: 0, y: 0, zoom: 0.3, text: "6 PÄIVÄÄ ALKUUN" },
  26: { x: 810, y: 0, zoom: 1, text: "5 PÄIVÄÄ ALKUUN" },
  27: { x: 810, y: 0, zoom: 1, text: "4 PÄIVÄÄ ALKUUN" },
  28: { x: 810, y: 0, zoom: 1, text: "3 PÄIVÄÄ ALKUUN" },
  29: { x: 810, y: 0, zoom: 1, text: "2 PÄIVÄÄ ALKUUN" },
  30: { x: 810, y: 0, zoom: 1, text: "1 PÄIVÄÄ ALKUUN\n\n VALMISTAUDU METSÄSTYKSEEN!" },
};

var today = new Date().getDate();  // e.g. 1–31
var d = days[today];

if (d) {
  const map = document.getElementById("map");
  map.style.transform = `translate(-${d.x}px, -${d.y}px) scale(${d.zoom})`;
  document.getElementById("text").innerText = d.text;
} else {
  document.getElementById("text").innerText =
    "The calendar isn't ready for today!";
}
