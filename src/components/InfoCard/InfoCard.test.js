/* eslint-disable no-undef */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import InfoCard from './InfoCard';
import { findByTestAtrr, checkProps } from '../../../test';


describe('Unit Test :: InfoCard', () => {

  describe('Check prototypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        title: 'Title',
        data: 145
      }

      const propsError = checkProps(InfoCard, expectedProps);
      expect(propsError).to.be.undefined;
    })
  });


  describe('Renders', () => {
    const wrapper = shallow(<InfoCard title={'Info Card'} data={150} />);

    it('Sholud render the card', ()=> {
      const card = findByTestAtrr(wrapper, 'InfoCard');
      expect(card).to.have.length(1);
    })

    it('Sholud render title:  Info Card', () => {
      const title = findByTestAtrr(wrapper, 'InfoTitle');
      expect(title.props().children).to.be.equal('Info Card')
    });

    it('Sholud render data:150', () => {
      const data = findByTestAtrr(wrapper, 'InfoData');
      expect(data.props().children).to.be.equal(150)
    });

  })

  
});
/* eslint-enable no-undef */