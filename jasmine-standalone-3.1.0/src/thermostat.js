function Thermostat() {
  this.temperature = 20
  this.maximumTemperature = 25
  this.saver_switch = 1
}
Thermostat.prototype.up = function() {
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
  if (this.saver_switch === 1)
  this.maximumTemperature = 25
  else
  this.maximumTemperature = 32
}
