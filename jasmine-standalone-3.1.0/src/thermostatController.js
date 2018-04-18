var t = new Thermostat();
function updateTemp() {
  var temperature = t.temperature
  document.getElementById('temperature').value = temperature
}
function increaseTemp() {
  t.up()
  updateTemp()
  currentUsage()
}
function decreseTemp() {
  t.down()
  updateTemp()
  currentUsage()
}
function powerSavingChange() {
  t.powerSaving()
  showStatus()
  updateTemp()
}
function reset() {
  t.reset()
  updateTemp()
  currentUsage()
}
function currentUsage() {
  var usage = t.currentUsage()
  document.getElementById('usage').value = usage
}
function status() {
  t.powerSavingStatus()
}
function showStatus() {
    var status = t.powerSavingStatus()
    document.getElementById('Status').innerText = status
    if (status === 'On')
    document.getElementById('Status').style.background = "green"
    else if (status === 'Off')
    document.getElementById('Status').style.background = "red"
}
