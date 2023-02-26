// Chakra Imports
import { Box } from '@chakra-ui/react';

// React Imports
import React, { useEffect, useRef } from 'react';

// Styles
import styles from '../styles/Home.module.css';

interface IntroImageProps {
  children: React.ReactNode;
  thumbnail: string;
}

export default function IntroImage({ children, thumbnail }: IntroImageProps) {
  const windowHeight = useRef(0);

  useEffect(() => {
    // Get the initial window height
    windowHeight.current = window.innerHeight;
  }, []);

  console.log(windowHeight.current);

  return (
    <Box
      background={`url(/works/${thumbnail})`}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
      backgroundRepeat={'no-repeat'}
      position={'relative'}
    >
      {/* Make it responsive for mobile browsers knowing the navigation bar */}
      <Box
        height={`calc(${windowHeight.current}px - 4rem)`}
        minH={'-webkit-fill-available'}
        className={styles['intro-image']}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDir={'column'}
        backdropFilter={'blur(5px)'}
      >
        {children}
      </Box>
      <Box
        className={styles['scroll-element']}
        position={'absolute'}
        bottom={'0'}
        left={'50%'}
        transform={'translateX(-50%)'}
        mb={'2rem'}
      />
    </Box>
  );
}
