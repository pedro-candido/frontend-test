import React from 'react';

import { render } from '@testing-library/react-native';

import { List } from '.';

describe('Product List', () => {
  it('should match snapshot', () => {
    const testRenderer = render(<List symbols={[]} />);

    expect(testRenderer).toMatchSnapshot();
  });
});
