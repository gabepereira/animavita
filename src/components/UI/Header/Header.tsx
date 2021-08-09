import Link from 'next/link';
import { useScreenClass, Hidden } from 'react-grid-system';
import { headerLinks, isPageActive } from 'utils/sitemap';
import { HeaderWrapper, Logo, LogoWrapper, HeaderLink } from './styles';
import SearchInput from 'components/Home/SearchInput';

// <Header> component
const Header = () => {
  const screenClass = useScreenClass();

  return (
    <HeaderWrapper className={screenClass} data-testid="Header">
      <LogoWrapper>
        <Logo>AnimaVita</Logo>

        <Hidden xs sm>
          {/* Header nav */}
          <div>
            {headerLinks.map(({ pathname, name }) => (
              <Link key={pathname} href={pathname} passHref>
                <HeaderLink isActive={isPageActive(pathname)}>
                  {name}
                </HeaderLink>
              </Link>
            ))}
          </div>
        </Hidden>
      </LogoWrapper>

      <Hidden xs sm>
        {/* Search input */}
        <SearchInput />
      </Hidden>
    </HeaderWrapper>
  );
};

export default Header;
