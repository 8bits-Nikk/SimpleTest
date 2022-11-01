import {renderWithNavigation} from '../../helper/renderWithNavigation';
import ButtonScreen from '../ButtonScreen';
import {act, fireEvent, waitFor} from '@testing-library/react-native';

describe('Button Screen Tests', () => {
  it('should render correctly', () => {
    const tree = renderWithNavigation(<ButtonScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have button', () => {
    const tree = renderWithNavigation(<ButtonScreen />);
    const Btn_1 = tree.queryByTestId('Button_1');
    const Btn_2 = tree.queryByTestId('Button_2');
    const Btn_3 = tree.queryByTestId('Button_3');
    expect(Btn_1).not.toBeNull();
    expect(Btn_2).not.toBeNull();
    expect(Btn_3).not.toBeNull();
  });

  it('should fire onPress', async () => {
    const tree = renderWithNavigation(<ButtonScreen />);
    const Btn_1 = tree.getByTestId('Button_1');
    const Btn_2 = tree.getByTestId('Button_2');
    const Btn_3 = tree.getByTestId('Button_3');

    const text = tree.queryByText(' Pressed');

    await act(async () => {
      await fireEvent.press(Btn_1);
      expect(text?.props.children).toBe('Button 1 Pressed');
      await fireEvent.press(Btn_2);
      expect(text?.props.children).toBe('Button 2 Pressed');
      await fireEvent.press(Btn_3);
      expect(text?.props.children).toBe('Button 3 Pressed');
    });
  });

  // Second method for async state update
  it('should fire onPress2', async () => {
    const tree = renderWithNavigation(<ButtonScreen />);
    const Btn_1 = tree.getByTestId('Button_1');
    const Btn_2 = tree.getByTestId('Button_2');
    const Btn_3 = tree.getByTestId('Button_3');

    const text = tree.queryByText(' Pressed');

    await waitFor(() => {
      fireEvent.press(Btn_1);
      expect(text?.props.children).toBe('Button 1 Pressed');
      fireEvent.press(Btn_2);
      expect(text?.props.children).toBe('Button 2 Pressed');
      fireEvent.press(Btn_3);
      expect(text?.props.children).toBe('Button 3 Pressed');
    });
  });
});
