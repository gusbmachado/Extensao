import $ from "jquery";
var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox"
];

var finalName = "";

$(document).ready(function (event) {
  document.getElementById("uname").value = randName();
  var table = document.getElementById("Table");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = window.localStorage.getItem("id").toString();
  cell2.innerHTML = window.localStorage.getItem("user").toString();
  cell3.innerHTML = window.localStorage.getItem("email").toString();
});

function randName() {
  finalName = nameList[Math.floor(Math.random() * nameList.length)];
  finalName += nameList[Math.floor(Math.random() * nameList.length)];
  if (Math.random() > 0.5) {
    finalName += nameList[Math.floor(Math.random() * nameList.length)];
  }
  return finalName;
}

$("#code").change(function () {
  if (document.getElementById("code").value === "c1") {
    document.getElementById("num").placeholder = "NPA-NXX-XXXX";
  } else if (document.getElementById("code").value === "c2") {
    document.getElementById("num").placeholder = "(AAA) BBB-BB-BB";
  } else if (document.getElementById("code").value === "c3") {
    document.getElementById("num").placeholder = "AAA-XXX XX XX";
  } else if (document.getElementById("code").value === "c4") {
    document.getElementById("num").placeholder = "NNN ABC XXXX";
  } else if (document.getElementById("code").value === "c5") {
    document.getElementById("num").placeholder = "(011) xxxx-xxxx";
  } else if (document.getElementById("code").value === "c6") {
    document.getElementById("num").placeholder = "AA 9NNNN-NNNN";
  } else if (document.getElementById("code").value === "c7") {
    document.getElementById("num").placeholder = "AAAAA BBBBB";
  } else if (document.getElementById("code").value === "c8") {
    document.getElementById("num").placeholder = "(0XXX) YYYY YYYY";
  }
});
