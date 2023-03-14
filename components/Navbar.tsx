import NextLink from 'next/link';
import React from 'react';
import ThemeToggleSwitch from './ThemeToggleSwitch';
import Logo from './Logo';
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

// Custom Styles
import styles from '../styles/TextGradient.module.css';

interface LinkItemProps {
  href: string;
  path: string;
  _target?: string;
  children: React.ReactNode;
}

const LinkItem = ({
  href,
  path,
  _target,
  children,
  ...props
}: LinkItemProps) => {
  const active = path === href || path.includes(href + '/');
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900');

  return (
    <Link
      fontWeight={active ? 'bold' : 'normal'}
      p={2}
      color={inactiveColor}
      _hover={{ textDecoration: 'none', cursor: 'default' }}
      target={_target}
      href={href}
    >
      <Text
        position={'relative'}
        className={active ? styles['text-gradient'] : undefined}
        _after={{
          content: '""',
          position: 'absolute',
          width: '120%',
          top: '100%',
          transform: 'scaleX(0)',
          height: '2px',
          bottom: 0,
          left: '-10%',
          background:
            'linear-gradient(90deg,rgba(255, 175, 58, 1) 25%,rgba(204, 101, 0, 1) 50%,rgba(255, 165, 0, 1) 75%) 0 0 / 400% 100%',
          transformOrigin: 'left center',
          animation: 'gradient 4s linear infinite',
          transition: 'transform 0.25s ease-out',
        }}
        _hover={{
          cursor: 'pointer',
          _after: {
            transform: 'scaleX(1)',
            transformOrigin: 'right center',

            '@keyframes gradient': {
              to: {
                backgroundPosition: '400% 0',
              },
            },
          },
        }}
      >
        {children}
      </Text>
    </Link>
  );
};

const Navbar = (props: any) => {
  const { path } = props;

  return (
    <Box
      as={'nav'}
      position={'fixed'}
      w={'100%'}
      zIndex={1}
      bg={useColorModeValue('#ffffff40', '#11111180')}
      style={{ backdropFilter: 'blur(10px)' }}
      {...props}
    >
      <Container
        display={'flex'}
        p={2}
        maxW={'100%'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Flex align={'center'} mr={5}>
          <Heading as={'h1'} fontSize={'lg'} fontWeight={'normal'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'none', lg: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          mt={{ base: 4, md: 0 }}
          alignItems={'center'}
          justifyContent={'left'}
          flexGrow={1}
        >
          <LinkItem href="/" path={path} _target={''}>
            Home
          </LinkItem>
          <LinkItem href="/about" path={path} _target={''}>
            About
          </LinkItem>
          <LinkItem href="/services" path={path} _target={''}>
            Services
          </LinkItem>
          <LinkItem href="/pricing" path={path} _target={''}>
            Pricing
          </LinkItem>
          <LinkItem href="/testimonials" path={path} _target={''}>
            Testimonials
          </LinkItem>
          <LinkItem href="/contact" path={path} _target={''}>
            Contact
          </LinkItem>
        </Stack>

        <Box
          flex={1}
          display={'flex'}
          justifyContent={'right'}
          alignItems={'center'}
        >
          <ThemeToggleSwitch />

          <Box
            ml={2}
            display={{ base: 'inline-block', md: 'inline-block', lg: 'none' }}
          >
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant={'outline'}
                aria-label={'Menu'}
              />
              <MenuList
                style={{ background: useColorModeValue('#ffffff', '#111111') }}
              >
                <NextLink href={'/'} passHref>
                  <MenuItem
                    style={{
                      background: useColorModeValue('#ffffff', '#111111'),
                    }}
                  >
                    Home
                  </MenuItem>
                </NextLink>
                <NextLink href={'/about'} passHref>
                  <MenuItem
                    style={{
                      background: useColorModeValue('#ffffff', '#111111'),
                    }}
                  >
                    About
                  </MenuItem>
                </NextLink>
                <NextLink href={'/services'} passHref>
                  <MenuItem
                    style={{
                      background: useColorModeValue('#ffffff', '#111111'),
                    }}
                  >
                    Services
                  </MenuItem>
                </NextLink>
                <NextLink href={'/pricing'} passHref>
                  <MenuItem
                    style={{
                      background: useColorModeValue('#ffffff', '#111111'),
                    }}
                  >
                    Pricing
                  </MenuItem>
                </NextLink>
                <NextLink href={'/testimonials'} passHref>
                  <MenuItem
                    style={{
                      background: useColorModeValue('#ffffff', '#111111'),
                    }}
                  >
                    Testimonials
                  </MenuItem>
                </NextLink>
                <NextLink href={'/contact'} passHref>
                  <MenuItem
                    style={{
                      background: useColorModeValue('#ffffff', '#111111'),
                    }}
                  >
                    Contact
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
