/* eslint-disable no-undef */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ProfessionList from './ProfessionList';
import mockProps, { professions } from '../../lib/mockProps';
import { findByTestAtrr, checkProps } from '../../../test';

describe('ProfessionList', () => {

  describe('Check prototypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps ={
        professions: {
          'Baker': ['Gnome1'],
          'Driver': []
        }
      }
    
      const propsError = checkProps(ProfessionList, expectedProps);
      expect(propsError).to.be.undefined;
    })
  });

  describe('Renders', () => {


    const props = mockProps();
    props.professions = professions();
    const wrapper = shallow(<ProfessionList {...props} />);
  
    it('Sholud render the list', () => {
      const list = findByTestAtrr(wrapper, 'ProfessionList')
      expect(list).to.have.length(1);
    });
  
    it('Sholud have 2 items in the list', () => {
      expect(wrapper.find('.list').props().children).to.have.length(2);
    })


  })
 

});
/* eslint-enable no-undef */
