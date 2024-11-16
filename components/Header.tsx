// Chakra Imports
import { Box, Text } from '@chakra-ui/react';

// React Imports
import React from 'react';
import { getWindowSize } from '../lib/getWindowSize';

// Styles
import styles from '../styles/Home.module.css';

interface HeaderProps {
  children: React.ReactNode;
  thumbnail: string;
}

export default function Header({ children, thumbnail }: HeaderProps) {
  const height = getWindowSize().height;

  return (
    <Box
      background={`url(/${thumbnail})`}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
      backgroundRepeat={'no-repeat'}
      position={'relative'}
    >
      <Box
        height={{
          base: `calc(${height}px - 4rem)`,
          md: 'calc(100vh - 4rem)',
        }}
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
