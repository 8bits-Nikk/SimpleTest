import React from 'react';
import TextScreen from '../TextScreen';
import 'react-native';
import {renderWithNavigation} from '../../helper/renderWithNavigation';

describe('TextScreen tests', () => {
  it('should render correctly', () => {
    const tree = renderWithNavigation(<TextScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have text', () => {
    const tree = renderWithNavigation(<TextScreen />);
    const text = tree.queryByText('Hello Tests');
    expect(text).not.toBeNull();
  });

  it('should have text find by TestId', () => {
    const tree = renderWithNavigation(<TextScreen />);
    const text = tree.queryByTestId('text');
    expect(text?.children[0]).toBe('Hello Tests');
  });
});
