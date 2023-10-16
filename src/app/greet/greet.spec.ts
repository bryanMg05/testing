import { greet } from './greet';

describe('greet test suite', () => {
  it('Should include the name in the message', () => {
    expect (greet('fhason')).toBe('Welcome fhason');
  })

});