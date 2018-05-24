describe('Thermostat', function(){
  beforeEach(function() {
    var thermotat = new Thermostat();
  })

  it('starts with 20 dgree', function(){
    expect(thermostat.temperature).toEqual(20)
  })
  it('increase temperature', function(){
    thermostat.up()
    expect(thermostat.temperature).toEqual(21)
  })
  it('decrese temperature', function(){
    thermostat.down()
    expect(thermostat.temperature).toEqual(19)
  })
  it('throw error when min temp reached', function(){
    for (var i = 0; i <= 9; i++) {
      thermostat.down()
    }
    expect( function(){ thermostat.down(); } ).toThrow(new Error("minimum temperature reached"));
    })
    it('has a default maximum temperature 25(powerSaving on)', function(){
      expect(thermostat.maximumTemperature).toEqual(25)
    })
    it('changes to maximum temperature to 32 on powerSaving called(powerSaving off)', function(){
      thermostat.powerSaving()
      expect(thermostat.maximumTemperature).toEqual(32)
    })
    it('goes back to 25 if pressed againg 4 times cycle (powerSaving on)', function(){
      for (var i = 0; i <= 3; i++) {
      thermostat.powerSaving()
      }
      expect(thermostat.maximumTemperature).toEqual(25)
    })
    it('resets temperature', function(){
      for (var i = 0; i <= 3; i++) {
      thermostat.down()
      }
      thermostat.reset()
      expect(thermostat.temperature).toEqual(20)
    })
    it('return low usage for 16', function(){
      for (var i = 0; i <= 3; i++) {
      thermostat.down()
      }
      expect(thermostat.currentUsage()).toEqual('low usage')
    })
    it('return high usage for 26', function(){
      thermostat.powerSaving()
      for (var i = 0; i <= 5; i++) {
      thermostat.up()
      }
      expect(thermostat.currentUsage()).toEqual('high usage')
    })
    it('return medium usage for 20', function(){
      expect(thermostat.currentUsage()).toEqual('medium usage')
    })
    it('throw error when max temp reached', function(){
      for (var i = 0; i <= 4; i++) {
        thermostat.up()
      }
      expect( function(){ thermostat.up(); } ).toThrow(new Error("maximum temperature reached"));
      })
})
