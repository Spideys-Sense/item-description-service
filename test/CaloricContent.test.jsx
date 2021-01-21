/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import App from '../client/components/App.jsx';
import CaloricContent from '../client/components/CaloricContent.jsx';

Enzyme.configure({ adapter: new Adapter() });

// If I were to test my service, I would want to test the following items:
// - Test to make sure that once data is returned from the server, the 'loader' state is false
// - Test to make sure that descriptionIsClicked is true once data is returned from server
// - Test to make sure that clicking different headers (Nutritional Info, Feeding instructions) will result in making those states true.
// - Test to make sure hyperlink redirects to correct place (in my case, just to 'null' which is where hyperlink is set to redirect to)

describe('CaloricContent', () => {
  it('CaloricContent should have title', () => {
    const wrapper = shallow(<CaloricContent />);
    const temp = wrapper.find('div .title');
    expect(temp.text()).toBe('Caloric Content');
  });
});