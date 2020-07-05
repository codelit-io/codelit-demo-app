import React from 'react';

import ShallowRenderer from 'react-test-renderer/shallow';
import CodeEditor from './index.js';

const renderer = new ShallowRenderer();

describe('CodeEditor Component', () => {
  test('should match the snapshot', () => {
    renderer.render(<CodeEditor />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
