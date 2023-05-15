import { Box, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box
      display={'flex'}
      flexDir={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      opacity={0.4}
      fontSize={'small'}
      my={6}
    >
      <Text>
        &copy; 2021 - {new Date().getFullYear()} Resonate with Yourself.
      </Text>
      <Text>
        All Rights Reserved.{' '}
        <span
          style={{
            color: '#FFAF36',
            fontWeight: 'bold',
            textDecoration: 'underline',
          }}
        >
          Created by{' '}
          <a href="https://sixhei-tartari.vercel.app/" target="_blank">
            Sixhei Tartari
          </a>
        </span>
      </Text>
    </Box>
  );
}
