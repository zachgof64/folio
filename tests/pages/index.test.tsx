import React from 'react';
import Index from '../../pages/index';
import {render} from '@testing-library/react';

test('IndexPage', () => {
  const index = render(<Index/>);
  const q = index.getAllByTestId('index-pg').length;
  expect(q).toBeGreaterThan(0);
});
