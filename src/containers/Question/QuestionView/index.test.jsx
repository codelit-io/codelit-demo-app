import React from 'react';

import ShallowRenderer from 'react-test-renderer/shallow';
import Question from './index.jsx';

const renderer = new ShallowRenderer();

describe('Question Component', () => {
  test('should match the snapshot', () => {
    renderer.render(<Question />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
