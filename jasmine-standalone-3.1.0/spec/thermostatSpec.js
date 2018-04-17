describe('Thermostat', function(){

  it('starts with 20 dgree', function(){
    var thermostat = new Thermostat();
    expect(thermostat.temperature).toEqual(20)
  })
  it('increase temperature', function(){
    var thermostat = new Thermostat();
    thermostat.up()
    expect(thermostat.temperature).toEqual(21)
  })
  it('decrese temperature', function(){
    var thermostat = new Thermostat();
    thermostat.down()
    expect(thermostat.temperature).toEqual(19)
  })
  it('throw error when min temp reached', function(){
    var thermostat = new Thermostat();
    for (var i = 0; i <= 9; i++) {
      thermostat.down()
    }
    expect( function(){ thermostat.down(); } ).toThrow(new Error("minimum temperature reached"));
    })
    it('has a default maximum temperature 25(powerSaving on)', function(){
      var thermostat = new Thermostat();
      expect(thermostat.maximumTemperature).toEqual(25)
    })
    it('changes to maximum temperature to 32 on powerSaving called(powerSaving off)', function(){
      var thermostat = new Thermostat();
      thermostat.powerSaving()
      expect(thermostat.maximumTemperature).toEqual(32)
    })
    it('goes back to 25 if pressed againg 4 times cycle (powerSaving on)', function(){
      var thermostat = new Thermostat();
      for (var i = 0; i <= 3; i++) {
      thermostat.powerSaving()
      }
      expect(thermostat.maximumTemperature).toEqual(25)
    })
})
