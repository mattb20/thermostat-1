function Thermostat() {
  this.temperature = 20
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
