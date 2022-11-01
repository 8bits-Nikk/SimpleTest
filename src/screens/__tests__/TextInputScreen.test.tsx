import {renderWithNavigation} from '../../helper/renderWithNavigation';
import TextInputScreen from '../TextInputScreen';
import {fireEvent, waitFor} from '@testing-library/react-native';

describe('TextInputScreen Tests', () => {
  it('should render correctly', () => {
    const tree = renderWithNavigation(<TextInputScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have TextInput', () => {
    const tree = renderWithNavigation(<TextInputScreen />);
    const input = tree.queryByPlaceholderText('Name');
    expect(input).not.toBeNull();
  });

  it('should enter name', async () => {
    const tree = renderWithNavigation(<TextInputScreen />);
    const input = tree.getByTestId('TextInput');
    await waitFor(() => {
      fireEvent.changeText(input, 'Tests');
      expect(input.props.value).toBe('Tests');
    });
  });
});
