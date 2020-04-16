/* eslint-disable no-undef */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import GnomesList from './GnomesList';
import mockProps, { gnomes } from '../../lib/mockProps';
import { findByTestAtrr, checkProps } from '../../../test';

describe('Unit Test :: GnomesList', () => {
  
  describe('Check prototypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        gnomes: [{
          id: 0,
          name: 'Name',
          thumbnail: 'imageLink',
          age: 122,
          weigth: 39,
          height: 101,
          hair_color: 'red',
          professions: [],
          friends: []
        }]
      }

      const propsError = checkProps(GnomesList, expectedProps);
      expect(propsError).to.be.undefined;
    })
  });


  describe('Renders', () => {

    const props = mockProps();
    props.gnomes = gnomes();
    const wrapper = shallow(<GnomesList {...props} />);

    it('Should render the list', () => {
      const list = findByTestAtrr(wrapper, 'GnomesList')
      expect(list).to.have.length(1);
    });
  
    it('Should have 3 items in the list', () => {
      const list = findByTestAtrr(wrapper, 'GnomesList')
      expect(list.props().children).to.have.length(3);
    });

  })


  // it("responds to name change", done => {
  //   const handleChangeSpy = sinon.spy(GnomesList.prototype, "handleChange");
  //   const event = {target: {name: "iconified", value: "C"}};
  //   const wrap = mount(
  //     <GnomesList />
  //   );
  //   wrap.ref('iconified').simulate('change', event);
  //   expect(handleChangeSpy.calledOnce).to.equal(true);
  // })
});
/* eslint-enable no-undef */
