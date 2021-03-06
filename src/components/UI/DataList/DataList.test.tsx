import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import DataList, { Props } from './DataList';

describe('<DataList />', () => {
  const defaultProps = {
    data: [],
  };

  const setup = (props?: Props) => {
    const utils = render(
      <ThemeProvider theme={theme}>
        <DataList {...defaultProps} {...props} />
      </ThemeProvider>
    );

    return {
      ...utils,
    };
  };

  describe('Rendering', () => {
    it('should render the <DataList> component', () => {
      const { getByTestId } = setup();

      expect(getByTestId('DataList')).toBeInTheDocument();
    });
  });
});
