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
})
