var navigation = {
  x: -2,
  y: "Banana",
  z: "Beep",
  speed: "raaaaid"
};

var ship = {
  powerOn: false,
  modules: [],
  antenna: {
    active: false
  }
};

var radio = {
  frequency: "Kenneth",
  message: "Bugs are cool.",
  beacon: false
};

var essential;

function powerOn() {
  if (ship.powerOn = false) {
     ship.powerOn = true;
  }
}

function countModules() {
  return availableModules.length;
}

function countEssential() {
  for(var i = 0; i < countModules(); i++) {
    if(availableModules[i].essential) {
      essential++;
    } 
  }
  return essential;
}

function loadModule(index) { 
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index]);
}

function getLifeSupport() {
  var arrayLength = countModules();
  
  for(var i = 0; i < arrayLength; i++){
    if(availableModules[i].name == "life-support") {
      loadModule(i);
    }
  }
}

getLifeSupport();

function findModuleIndex(name) {
  for(var i = 0; i < countModules(); i++) {
    if(availableModules[i].essential&& availableModules[i].name == name) {
      return i;
    } 
  }
}

loadModule(findModuleIndex("propulsion"));





