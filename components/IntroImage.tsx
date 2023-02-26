// Chakra Imports
import { Box } from '@chakra-ui/react';

// React Imports
import React from 'react';

// Styles
import styles from '../styles/Home.module.css';

interface IntroImageProps {
  children: React.ReactNode;
  thumbnail: string;
}

export default function IntroImage({ children, thumbnail }: IntroImageProps) {
  return (
    <Box
      background={`url(/works/${thumbnail})`}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
      backgroundRepeat={'no-repeat'}
      position={'relative'}
    >
      <Box
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
