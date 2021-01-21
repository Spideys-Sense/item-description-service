/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });



// const { describe, it, expect } = require('jest');

describe('App', () => {
  it('foo should be true', () => {
    const foo = true;
    expect(foo).toBe(true);
  });
  it('foo should be false', () => {
    const foo = false;
    expect(foo).toBe(false);
  });
});
