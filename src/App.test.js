import React from 'react';
import { render } from '@testing-library/react';
import CpuEdit from './CpuGame/CpuEdit';

test('renders learn react link', () => {
  const { getByText } = render(<CpuEdit />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
