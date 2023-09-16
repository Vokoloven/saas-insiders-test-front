import { useEffect, useRef } from 'react';

export const useFonts = () => {
  const loadFonts = useRef(true);

  useEffect(() => {
    if (loadFonts.current) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap';
      document.head.appendChild(link);

      return () => {
        loadFonts.current = false;
      };
    }
  }, []);
};
