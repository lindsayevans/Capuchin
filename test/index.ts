// Import Jest test methods
import 'jest';

// Import module to test
import { $, Capuchin } from '../src/';

describe('Capuchin should...', () => {

  test('be mapped to $', () => {

    expect($).toEqual(Capuchin);

  });

});
