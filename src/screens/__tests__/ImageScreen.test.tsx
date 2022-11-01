import {renderWithNavigation} from '../../helper/renderWithNavigation';
import ImageScreen from '../ImageScreen';

describe('ImageScreen Tests', () => {
  it('should render correctly', () => {
    const tree = renderWithNavigation(<ImageScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should have ImageView', () => {
    const tree = renderWithNavigation(<ImageScreen />);
    const img = tree.queryByTestId('Image');
    expect(img).not.toBeNull();
  });
  it('should have Image of url', () => {
    const tree = renderWithNavigation(<ImageScreen />);
    const img = tree.getByTestId('Image');
    expect(img.props.source.uri).toBe(
      'https://reactnative.dev/docs/assets/p_cat2.png',
    );
  });
});
