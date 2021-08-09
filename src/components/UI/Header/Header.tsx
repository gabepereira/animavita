import Link from 'next/link';
import { headerLinks, isPageActive } from 'utils/sitemap';
import {
  HeaderWrapper,
  Logo,
  LogoWrapper,
  HeaderNav,
  HeaderLink,
} from './styles';
import SearchInput from 'components/Home/SearchInput';

// <Header> component
const Header = () => {
  return (
    <HeaderWrapper data-testid="Header">
      <LogoWrapper>
        <Logo>AnimaVita</Logo>

        {/* Header nav */}
        <HeaderNav>
          {headerLinks.map(({ pathname, name }) => (
            <Link key={pathname} href={pathname} passHref>
              <HeaderLink isActive={isPageActive(pathname)}>{name}</HeaderLink>
            </Link>
          ))}
        </HeaderNav>
      </LogoWrapper>

      {/* Search input */}
      <SearchInput />
    </HeaderWrapper>
  );
};

export default Header;
