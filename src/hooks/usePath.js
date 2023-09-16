import { useLocation } from 'react-router-dom';

export const usePath = () => {
  const location = useLocation();
  const { pathname } = location;

  const replacedPath = pathname.replace(/[/]/, (path) => {
    if (pathname === '/') {
      return path;
    }
    return '';
  });

  return replacedPath;
};
