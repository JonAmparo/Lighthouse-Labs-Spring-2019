var navigation = {
      x: -2,
      y: 4,
      z: 7,
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
      range: {
        low: 88,
        high: 108,
      },
      frequency: 0,
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
    if(availableModules[i].essential && availableModules[i].name == name) {
      return i;
    } 
  }
}

loadModule(findModuleIndex("propulsion"));
loadModule(findModuleIndex("navigation"));

function resetLARRY() {
  for(var i = 0; i < 10; i++) {
    LARRY.quack(); 
  }
}

resetLARRY();

findModuleIndex("communication");
loadModule(findModuleIndex("communication"));

function setMessage() {
  radio.message = JSON.stringify(navigation);
}

setMessage();

function activateBeacon() {
	radio.beacon = true;
}

activateBeacon();

function setFrequency() {
	radio.frequency = (radio.range.low + radio.range.high) / 2;
}

function initialize() {
	navigation.x = 0;
	navigation.y = 0;
	navigation.z = 0;
}

function calibrateX() {
  for(var i = 0; i < 13; i++) {
    var signal = checkSignal();
  if(signal !== undefined) {
    navigation.x = signal;
    break;
    }
  }
}

function calibrateY() {
  for(var i = 0; i < 61; i++) {
    var signal = checkSignal();
  if(signal !== undefined) {
    navigation.y = signal;
    break;
    }
  }
}

function calibrateZ() {
  for(var i = 0; i < 61; i++) {
    var signal = checkSignal();
  if(signal !== undefined) {
    navigation.z = signal;
    break;
    }
  }
}

function calibrate() {
  calibrateX();
  calibrateY();
  calibrateZ();
}
