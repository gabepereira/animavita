interface HeaderNavLinks {
  pathname: string;
  name: string;
}

export const headerLinks: HeaderNavLinks[] = [
  {
    pathname: '/',
    name: 'Home',
  },
  {
    pathname: '/tvshows',
    name: 'TV Shows',
  },
  {
    pathname: '/movies',
    name: 'Movies',
  },
];

export const isPageActive = (pathname: string) => {
  if (typeof window === 'undefined') return;

  return pathname === window.location.pathname;
};
