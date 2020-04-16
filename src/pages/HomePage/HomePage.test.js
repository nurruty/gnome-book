/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { HomePage } from './HomePage';
import mockProps, { gnomes, professions } from '../../lib/mockProps';
import { findByTestAtrr, checkProps } from '../../../test';

function setup() {
  // Mock required props
  const props = mockProps();
  props.gnomes = gnomes();
  props.professions = professions();
  props.important = gnomes();
  const wrapper = shallow(<HomePage {...props} />);

  return {
    props,
    wrapper
  };
}

describe('Unit Test :: HomePage', () => {

  describe('Check prototypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        dispatch: () => {},
        isFetching: true,
        professions: professions(),
        gnomes: gnomes()
      }

      const propsError = checkProps(HomePage, expectedProps);
      expect(propsError).to.be.undefined;
    })
  });


  describe('Render', () => {

    const { wrapper } = setup();
    
    it('Should render', () => {
      const page = findByTestAtrr(wrapper, 'HomePage')
      expect(page).to.have.length(1);
    });

  })
 
});
/* eslint-enable no-undef */
