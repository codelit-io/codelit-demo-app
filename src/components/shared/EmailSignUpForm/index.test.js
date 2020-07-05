import React from 'react';

import ShallowRenderer from 'react-test-renderer/shallow';
import EmailSignUpForm from './index.js';

const renderer = new ShallowRenderer();

describe('EmailSignUpForm Component', () => {
  test('should match the snapshot', () => {
    renderer.render(<EmailSignUpForm />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
