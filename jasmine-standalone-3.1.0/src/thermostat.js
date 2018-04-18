function Thermostat() {
  this.temperature = 20
  this.maximumTemperature = 25
  this.saver_switch = 1
}
Thermostat.prototype.up = function() {
  if (this.temperature >= this.maximumTemperature)
  throw new Error("maximum temperature reached")
  else
  this.temperature += 1;
}
Thermostat.prototype.down = function() {
  var minimumTemperature = 10
  if (this.temperature <= minimumTemperature)
  throw new Error("minimum temperature reached")
  else
  this.temperature -= 1;
}
Thermostat.prototype.powerSaving = function(){
  this.saver_switch = Math.abs(this.saver_switch - 1)
  if (this.saver_switch === 1 && this.temperature > 25){
    this.maximumTemperature = 25
    this.temperature = 25
  } else if (this.saver_switch === 1) {
    this.maximumTemperature = 25
  } else {
    this.maximumTemperature = 32
  }
}
Thermostat.prototype.reset = function() {
  this.temperature = 20;
}
Thermostat.prototype.currentUsage = function() {
  if (this.temperature < 18)
  return "low usage"
  else if (18 < this.temperature && this.temperature < 25)
  return "medium usage"
  else
  return "high usage"
}
Thermostat.prototype.powerSavingStatus = function() {
  if (this.maximumTemperature === 25)
  return 'On'
  else
  return 'Off'
}
