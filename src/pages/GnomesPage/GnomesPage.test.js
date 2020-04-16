/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { GnomesPage } from './GnomesPage';
import mockProps, { gnomes } from '../../lib/mockProps';
import { findByTestAtrr, checkProps } from '../../../test';


function setup() {
  // Mock required props
  const props = mockProps();
  const wrapper = shallow(<GnomesPage gnomes={gnomes()} isFetching={false} {...props} />);

  return {
    props,
    wrapper
  };
}

describe('GnomesPage', () => {

  describe('Check prototypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        dispatch: () => {},
        isFetching: true
      }

      const propsError = checkProps(GnomesPage, expectedProps);
      expect(propsError).to.be.undefined;
    })
  });

  describe('Render', () => {

    const { wrapper } = setup();
    
    it('should render', () => {
      const page = findByTestAtrr(wrapper, 'GnomesPage')
      expect(page).to.have.length(1);
    });
  })
 
});
/* eslint-enable no-undef */
