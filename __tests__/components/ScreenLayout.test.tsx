import React from 'react';
import { render } from '@testing-library/react-native';
import ScreenLayout from '@/components/ScreenLayout';

describe('<ScreenLayout />', () => {
  it('displays the correct text', () => {
    const { getAllByText } = render(<ScreenLayout text="Main App Screen" />);
    expect(getAllByText.length).toBe(2)
  });
});
