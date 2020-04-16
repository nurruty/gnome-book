/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { GnomePage } from './GnomePage';
import mockProps from '../../lib/mockProps';
import { findByTestAtrr, checkProps } from '../../../test';

function setup() {
  // Mock required props
  const props = mockProps();
  const wrapper = shallow(<GnomePage {...props} />);

  return {
    props,
    wrapper
  };
}

describe('Unit Test :: GnomePage', () => {

  describe('Check prototypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        dispatch: () => {},
        isFetching: true
      }

      const propsError = checkProps(GnomePage, expectedProps);
      expect(propsError).to.be.undefined;
    })
  });


  describe('Renders', () => {

    const { wrapper } = setup();
    
    it('Sholud render page', () => {
      const page = findByTestAtrr(wrapper, 'GnomePage')
      expect(page).to.have.length(1);
    });

  })

});
/* eslint-enable no-undef */
