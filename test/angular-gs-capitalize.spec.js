describe('angular-gs-capitalize', function () {
  beforeEach(module('gs.capitalize'));

  var capitalize;

  beforeEach(inject(function (_capitalize_) {
    capitalize = _capitalize_;
  }));

  // happy path(s)
  it('capitalizes strings', function () {
    expect(capitalize('gabe')).toBe('Gabe');
    expect(capitalize('Gabe')).toBe('Gabe');
    expect(capitalize('GAbe')).toBe('GAbe');
    expect(capitalize('gAbe')).toBe('GAbe');
  });

});
