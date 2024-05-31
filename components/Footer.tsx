import {
  Box,
  Heading,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box opacity={0.6} borderTop={'1px solid rgba(255, 255, 255, 0.3)'}>
      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center text-justify mt-6">
        <Box className="col-span-1 items-center w-[24rem] max-w-sm mx-auto">
          <Text as="h2" className="text-lg font-semibold">
            What is{' '}
            <span style={{ color: 'rgba(255, 175, 58, 1)' }}>
              Resonate with Yourself?
            </span>
          </Text>
          <Text as="p">
            Resonate with Yourself is based on a Holistic Therapy including
            physical, emotional, mental, and spiritual level, where everything
            is connected as a single body.
          </Text>
        </Box>

        <Box className="col-span-1 items-center w-[24rem] max-w-sm mx-auto my-4 mb:my-0">
          <Text as="h2" className="text-lg font-semibold">
            Navigate through{' '}
            <span style={{ color: 'rgba(255, 175, 58, 1)' }}>
              Resonate with Yourself?
            </span>
          </Text>
          <UnorderedList>
            <ListItem>
              <Link href={'/about'}>About Me</Link>
            </ListItem>
            <ListItem>
              <Link href={'/services'}>Services</Link>
            </ListItem>
            <ListItem>
              <Link href={'/pricing'}>Pricing</Link>
            </ListItem>
            <ListItem>
              <Link href={'/testimonials'}>Testimonials</Link>
            </ListItem>
            <ListItem>
              <Link href={'/contact'}>Contact Me</Link>
            </ListItem>
          </UnorderedList>
        </Box>

        <Box className="col-span-1 justify-center items-center w-[24rem] max-w-sm mx-auto">
          <Text as="h2" className="text-lg font-semibold">
            Contact with me
          </Text>
          <Link href={'mailto:resonatewithyourself@gmail.com'}>
            resonatewithyourself@gmail.com
          </Link>
          <Image
            src={'/works/home_thumbnail.jpg'}
            h={'140px'}
            className="hidden md:flex"
          />
        </Box>
      </Box>
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
