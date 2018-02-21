function dwarfRollCall(dwarves) {
  var numberedDwarves = [];
  for (let i = 0; i < dwarves.length; i++) {
    numberedDwarves.push(`${[i + 1]}. ${dwarves[i]} `);
  }
  var dwarvesListTogether = numberedDwarves.join('');
  return dwarvesListTogether;
}

function summonCaptainPlanet(planeteerCalls){
  var loudAndProud = [];
  for (let i = 0; i < planeteerCalls.length; i++){
    var tempCapName = planeteerCalls[i].toUpperCase()
    loudAndProud.push(tempCapName + "!");
    }
  return loudAndProud;
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    var answer = Boolean(words[i].length > 4)
  }
  return answer;
}

function findTheCheese(foods) {
  var cheFound = foods.find(function(element){
    return element === "cheddar" || element === "gouda" || element === "camembert"
  });
  if ((cheFound === "cheddar") || (cheFound === "gouda") || (cheFound === "camembert")) {
    return cheFound;
  } else {
    return "no cheese!";
  }
}
