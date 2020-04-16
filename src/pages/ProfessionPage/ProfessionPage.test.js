/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { ProfessionPage } from './ProfessionPage';
import mockProps, { professions } from '../../lib/mockProps';
import GnomesList from '../../components/GnomesList/GnomesList';
import { findByTestAtrr, checkProps } from '../../../test';

function setup() {
  // Mock required props
  const props = mockProps();
  const wrapper = shallow(<ProfessionPage professions={professions()} isFetching={false} {...props} />);

  return {
    props,
    wrapper
  };
}

describe('Unit Test :: ProfessionPage', () => {

  describe('Check prototypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        dispatch: () => {},
        isFetching: true,
        professions: professions(),
        params: {}
      }

      const propsError = checkProps(ProfessionPage, expectedProps);
      expect(propsError).to.be.undefined;
    })
  });

  describe('Render', ()=> {
    const { wrapper } = setup();

    it('Should render', () => {
      const page = findByTestAtrr(wrapper, 'ProfessionPage')
      expect(page).to.have.length(1);
    });
  })
  
});
/* eslint-enable no-undef */
