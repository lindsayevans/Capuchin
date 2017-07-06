const fs = require('fs');

import 'jest';
import { $, Capuchin } from '../src/';

beforeEach(() => {
    // Load fixture HTML
    document.body.innerHTML = fs.readFileSync(`./test/fixtures/simple.html`);
});

describe('Capuchin should...', () => {

  test('be mapped to $', () => {

    expect($).toEqual(Capuchin);

  });

  test('return correct number of elements', () => {

    expect($('.foo').length).toBe(5);

  });

  test('check if a collection has an element with a class', () => {

    expect($('.foo').hasClass('bar')).toBeTruthy();

  });

  test('check if a collection doesn\'t have an element with a class', () => {

    expect($('.foo').hasClass('nope')).toBeFalsy();

  });

  test('add a class to elements', () => {

    $('.foo').addClass('bar');

    expect(document.querySelector('.foo').classList.contains('bar')).toBeTruthy();

  });

  test('remove class from elements', () => {

    $('.foo').removeClass('remove-me');

    expect(document.querySelectorAll('.remove-me').length).toBe(0);

  });

  test('toggle a class off & then back on', () => {

    $('.foo').toggleClass('toggled');
    expect(document.querySelector('.foo').classList.contains('toggled')).toBeTruthy();

    $('.foo').toggleClass('toggled');
    expect(document.querySelector('.foo').classList.contains('toggled')).toBeFalsy();

  });

});
