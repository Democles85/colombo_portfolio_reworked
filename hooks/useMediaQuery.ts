import React from 'react';

export function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const listener = () => setMatches(mediaQuery.matches);
    mediaQuery.addEventListener('change', listener);

    return () => mediaQuery.removeEventListener('change', listener);
  }, [query]);

  return matches;
}
