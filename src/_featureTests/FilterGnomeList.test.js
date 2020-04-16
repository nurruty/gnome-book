import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import GnomesList from '../components/GnomesList/GnomesList';
import mockProps, { gnomes } from '../lib/mockProps';
import { findByTestAtrr } from '../../test';

describe('Feature Test :: Filter Gnome List', () => {

    const props = mockProps();
    props.gnomes = gnomes();
    const wrapper = shallow(<GnomesList {...props} />);

   
    it('Sholud empty the list with filter', () => {
         
        const e = {target: { value: "T"}};
        const input = wrapper.find('.input');
        input.simulate( 'change', e)
        expect(wrapper.find('.empty').length).to.be.equal(1)

    })

    it('Sholud not empty the list with filter', () => {
         
        const e = {target: { value: "Gnome"}};
        const input = wrapper.find('.input');
        input.simulate( 'change', e)
        expect(wrapper.find('.notEmpty').length).to.be.equal(1)

    })


    it('Sholud filter 1 Gnome', () => {
         
        const e = {target: { value: "Gnome 2"}};
        const input = wrapper.find('.input');
        input.simulate( 'change', e)
        const list = findByTestAtrr(wrapper, 'GnomesList')
        expect(list.children().length).to.be.equal(1)

    })
   


})