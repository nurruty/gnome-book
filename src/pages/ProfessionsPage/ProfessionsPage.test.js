/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { ProfessionsPage } from './ProfessionsPage';
import mockProps, { professions } from '../../lib/mockProps';
import { findByTestAtrr, checkProps } from '../../../test';


function setup() {
  // Mock required props
  const props = mockProps();
  props.professions = professions();
  const wrapper = shallow(<ProfessionsPage isFetching={false} {...props} />);

  return {
    props,
    wrapper
  };
}

describe('Unit Test :: ProfessionsPage', () => {
 
  describe('Check prototypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        dispatch: () => {},
        isFetching: true,
        professions: professions(),
      }

      const propsError = checkProps(ProfessionsPage, expectedProps);
      expect(propsError).to.be.undefined;
    })
  });

  describe('Render', ()=> {
    const { wrapper } = setup();

    it('Should render', () => {
      const page = findByTestAtrr(wrapper, 'ProfessionsPage')
      expect(page).to.have.length(1);
    });
  })

});
/* eslint-enable no-undef */
