describe('Thermostat', function(){

  it('starts with 20 dgree', function(){
    var thermostat = new Thermostat();
    expect(thermostat.temperature).toEqual(20)
  })
  it('increse temperature', function(){
    var thermostat = new Thermostat();
    thermostat.up()
    expect(thermostat.temperature).toEqual(21)
  })
})
