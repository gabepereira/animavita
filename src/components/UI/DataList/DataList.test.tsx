import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import DataList from './DataList';

describe('<DataList />', () => {
  describe('Rendering', () => {
    it('should render the <DataList> component', () => {
      const { getByTestId } = render(
        <ThemeProvider theme={theme}>
          <DataList />
        </ThemeProvider>
      );

      expect(getByTestId('DataList')).toBeInTheDocument();
    });
  });
});
