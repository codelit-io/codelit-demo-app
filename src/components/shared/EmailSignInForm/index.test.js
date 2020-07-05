import React from 'react';

import ShallowRenderer from 'react-test-renderer/shallow';
import EmailSignInForm from './index.js';

const renderer = new ShallowRenderer();

describe('EmailSignInForm Component', () => {
  test('should match the snapshot', () => {
    renderer.render(<EmailSignInForm />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
