import { useState, useEffect, useRef } from 'react';

export function getWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0 as number,
    height: 0 as number,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export function getWindowSizeStatic() {
  const windowHeight = useRef(0);

  useEffect(() => {
    windowHeight.current = window.innerHeight;
  }, []);

  return windowHeight;
}
