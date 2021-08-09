import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import TrendingHero, { Props } from '.';

describe('<TrendingHero />', () => {
  const defaultProps = {
    data: {
      id: 'id',
      attributes: {
        description: 'description',
        coverImage: { original: 'posterImage' },
        canonicalTitle: 'title',
      },
    },
  };

  const setup = (props?: Props) => {
    const utils = render(
      <ThemeProvider theme={theme}>
        <TrendingHero {...defaultProps} {...props} />
      </ThemeProvider>
    );

    return {
      ...utils,
    };
  };

  describe('Rendering', () => {
    it('should render the <TrendingHero> component', () => {
      const { getByTestId } = setup();

      expect(getByTestId('TrendingHero')).toBeInTheDocument();
    });
  });
});
