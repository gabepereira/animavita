import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import TrendingCard, { Props } from '.';

describe('<TrendingCard />', () => {
  const defaultProps = {
    data: {
      id: 'id',
      attributes: {
        posterImage: { small: 'posterImage' },
        canonicalTitle: 'title',
      },
    },
  };

  const setup = (props?: Props) => {
    const utils = render(
      <ThemeProvider theme={theme}>
        <TrendingCard {...defaultProps} {...props} />
      </ThemeProvider>
    );

    return {
      ...utils,
    };
  };

  describe('Rendering', () => {
    it('should render the <TrendingCard> component', () => {
      const { getByTestId } = setup();

      expect(getByTestId('TrendingCard')).toBeInTheDocument();
    });
  });
});
