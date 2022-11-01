import {renderWithNavigation} from '../../helper/renderWithNavigation';
import FlatListScreen, {Data} from '../FlatListScreen';
import {fireEvent, waitFor} from '@testing-library/react-native';

describe('FlatScreen Tests', () => {
  it('should render correctly', () => {
    const tree = renderWithNavigation(<FlatListScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have FlatList', () => {
    const tree = renderWithNavigation(<FlatListScreen />);
    const list = tree.getByTestId('FlatList');
    expect(list).not.toBeNull();
  });

  it('should have 30 Items', () => {
    const tree = renderWithNavigation(<FlatListScreen />);
    const list = tree.getByTestId('FlatList');
    expect(list.props.data.length).toBe(30);
  });

  it('should have Item Name', async () => {
    const tree = renderWithNavigation(<FlatListScreen />);
    const list = tree.getByTestId('FlatList');
    const eventData = {
      nativeEvent: {
        contentOffset: {
          y: 500,
        },
        contentSize: {
          // Dimensions of the scrollable content
          height: 500,
          width: 100,
        },
        layoutMeasurement: {
          // Dimensions of the device
          height: 100,
          width: 100,
        },
      },
    };
    await waitFor(() => {
      fireEvent.scroll(list, eventData);
      const items = tree.getAllByTestId('FlatList-ItemName');
      expect(items.length).toBe(30);
      items.forEach((value, index) => {
        expect(value.props.children).toBe(Data[index].name);
      });
    });
  });

  it('should render Items', async () => {
    const tree = renderWithNavigation(<FlatListScreen />);
    const list = tree.getByTestId('FlatList');
    const eventData = {
      nativeEvent: {
        contentOffset: {
          y: 500,
        },
        contentSize: {
          // Dimensions of the scrollable content
          height: 500,
          width: 100,
        },
        layoutMeasurement: {
          // Dimensions of the device
          height: 100,
          width: 100,
        },
      },
    };

    await waitFor(() => {
      fireEvent.scroll(list, eventData);
      const items = tree.getAllByTestId('FlatList-Item');
      console.log(items.length);
      expect(items.length).toBe(30);
      items.forEach(value => {
        expect(value).not.toBeNull();
        fireEvent.press(value);
      });
    });
  });
});
