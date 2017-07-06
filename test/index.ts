const fs = require('fs');

import 'jest';
import { $, Capuchin } from '../src/';

const fixtureNames = [
    'simple',
    'complex'
];

let fixtures: {[id: string]: Document} = {};

beforeEach(() => {
    // Load fixture HTML
    document.body.innerHTML = fs.readFileSync(`./test/fixtures/simple.html`);
});

describe('Capuchin should...', () => {

  test('be mapped to $', () => {

    expect($).toEqual(Capuchin);

  });

  test('return correct number of elements', () => {

    expect($('.foo', fixtures.simple).length).toBe(5);

  });

});
