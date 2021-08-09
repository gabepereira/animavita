import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import Header from './Header';

describe('<Header />', () => {
  describe('Rendering', () => {
    it('should render the <Header> component', () => {
      const { getByTestId } = render(
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      );

      expect(getByTestId('Header')).toBeInTheDocument();
    });
  });
});
