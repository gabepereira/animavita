import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import SearchInput from './SearchInput';

describe('<SearchInput />', () => {
  describe('Rendering', () => {
    it('should render the <SearchInput> component', () => {
      const { getByTestId } = render(
        <ThemeProvider theme={theme}>
          <SearchInput />
        </ThemeProvider>
      );

      expect(getByTestId('SearchInput')).toBeInTheDocument();
    });
  });
});
