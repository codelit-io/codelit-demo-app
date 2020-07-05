import React from 'react';

import ShallowRenderer from 'react-test-renderer/shallow';
import Courses from './index.jsx';

const renderer = new ShallowRenderer();

describe('Courses Component', () => {
  test('should match the snapshot', () => {
    renderer.render(<Courses />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
