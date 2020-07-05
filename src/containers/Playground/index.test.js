import React from 'react';

import ShallowRenderer from 'react-test-renderer/shallow';
import Playground from './index.js';

const renderer = new ShallowRenderer();

describe('Playground Component', () => {
  test('should match the snapshot', () => {
    renderer.render(<Playground />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
