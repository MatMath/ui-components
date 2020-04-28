import * as React from 'react';
import { mount } from 'enzyme';

import { ColoredPassword } from './ColoredPassword';

describe('<ColoredPassword />', () => {
  it('should render default', () => {
    const coloredPassword = mount(
      <ColoredPassword value='D4$hlan3*feat$DuNk-C1ub' />
    );

    expect(coloredPassword).toMatchSnapshot();
  });

  it('should render correct colors', () => {
    const coloredPassword = mount(<ColoredPassword value='ok42$$' />);

    expect(coloredPassword.find('.letter').text()).toEqual('ok');
    expect(coloredPassword.find('.number').text()).toEqual('42');
    expect(coloredPassword.find('.special').text()).toEqual('$$');
  });
});
