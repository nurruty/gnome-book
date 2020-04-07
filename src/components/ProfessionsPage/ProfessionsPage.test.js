/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { ProfessionsPage } from './ProfessionsPage';
import mockProps, { professions } from '../../lib/mockProps';

// Make a setup() helper that passes props and renders the component with shallow rendering
function setup() {
  // Mock required props
  const props = mockProps();
  const wrapper = shallow(<ProfessionsPage professions={professions()} isFetching={false} {...props} />);

  return {
    props,
    wrapper
  };
}

describe('ProfessionsPage', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.ProfessionsPage')).to.have.length(1);
  });
});
/* eslint-enable no-undef */
