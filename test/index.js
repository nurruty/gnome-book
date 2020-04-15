import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types';

configure({ adapter: new Adapter() });

export const findByTestAtrr = (component, atrr) => {
    const wrapper = component.find(`[data-test='${atrr}']`)
    return wrapper;
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
    return propsErr;
}