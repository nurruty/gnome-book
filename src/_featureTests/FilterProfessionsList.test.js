import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import ProfessionList from '../components/ProfessionList/ProfessionList';
import mockProps, { professions } from '../lib/mockProps';
import { findByTestAtrr } from '../../test';


describe('Feature Test :: Filter Professions List', () => {

    const props = mockProps();
    props.professions = professions();
    const wrapper = shallow(<ProfessionList {...props} />);

   
    it('Sholud empty the list with filter', () => {
         
        const e = {target: { value: "T"}};
        const input = wrapper.find('.input');
        input.simulate( 'change', e)
        expect(findByTestAtrr(wrapper, 'empty').length).to.be.equal(1)

    })

    it('Sholud not empty the list with filter', () => {
         
        const e = {target: { value: "Medic"}};
        const input = wrapper.find('.input');
        input.simulate( 'change', e)
        expect(findByTestAtrr(wrapper, 'notEmpty').length).to.be.equal(1)

    })


    it('Sholud filter 1 Profession', () => {
         
        const e = {target: { value: "Baker"}};
        const input = wrapper.find('.input');
        input.simulate( 'change', e)
        const list = findByTestAtrr(wrapper, 'notEmpty')
        expect(list.children().length).to.be.equal(1)

    })
   


})