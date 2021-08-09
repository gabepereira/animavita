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
    pathname: '/manga',
    name: 'Manga',
  },
  {
    pathname: '/characters',
    name: 'Characters',
  },
];

export const isPageActive = (pathname: string) => {
  if (typeof window === 'undefined') return;

  return pathname === window.location.pathname;
};
