import { shallow } from 'enzyme';
import React from 'react';

import Body2 from './body2';

const CHILDREN = 'CHILDREN';

test('Renders the default classNames', () => {
  const wrapper = shallow(<Body2>{CHILDREN}</Body2>, { disableLifecycleMethods: true });
  const expected = 'mdc-typography mdc-typography--body2';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders all classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Body2 className={CLASS_NAME}>{CHILDREN}</Body2>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-typography mdc-typography--body2 ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders the children elements', () => {
  const wrapper = shallow(<Body2>{CHILDREN}</Body2>, { disableLifecycleMethods: true });
  const expected = CHILDREN;

  const actual = wrapper.props().children;

  expect(actual).toBe(expected);
});

test('Adds extra properties that are passed in', () => {
  const DATA_QA = 'DATA_QA';
  const wrapper = shallow(
    <Body2 data-qa={DATA_QA}>{CHILDREN}</Body2>,
    { disableLifecycleMethods: true },
  );
  const expected = DATA_QA;

  const actual = wrapper.props()['data-qa'];

  expect(actual).toBe(expected);
});
