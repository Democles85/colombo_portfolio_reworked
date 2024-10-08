import {
  Box,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box opacity={0.6} borderTop={'1px solid rgba(255, 255, 255, 0.3)'}>
      <Box
        display={'flex'}
        flexDir={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        fontSize={'small'}
        my={6}
      >
        <Text>
          &copy; 2021 - {new Date().getFullYear()} Resonate with Yourself.
        </Text>
        <Text>All Rights Reserved. </Text>
      </Box>
    </Box>
  );
}
