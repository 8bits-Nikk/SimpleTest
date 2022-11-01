import {renderWithNavigation} from './src/helper/renderWithNavigation';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

global.renderWithNavigation = renderWithNavigation;
