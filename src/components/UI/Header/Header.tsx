import Link from 'next/link';
import { useScreenClass } from 'react-grid-system';
import { headerLinks, isPageActive } from 'utils/sitemap';
import { HeaderWrapper, Logo, LogoWrapper, HeaderLink } from './styles';
import SearchInput from 'components/Home/SearchInput';

// <Header> component
const Header = () => {
  const screenClass = useScreenClass();

  return (
    <HeaderWrapper data-testid="Header">
      <LogoWrapper>
        <Logo>AnimaVita</Logo>

        {/* Header nav */}
        <div>
          {headerLinks.map(({ pathname, name }) => (
            <Link key={pathname} href={pathname} passHref>
              <HeaderLink isActive={isPageActive(pathname)}>{name}</HeaderLink>
            </Link>
          ))}
        </div>
      </LogoWrapper>

      {/* Search input */}
      <SearchInput />
    </HeaderWrapper>
  );
};

export default Header;
