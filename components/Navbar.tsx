import NextLink from 'next/link';
import React from 'react';
import ThemeToggleSwitch from './ThemeToggleSwitch';
import Logo from './Logo';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Link,
  Stack,
  StackDivider,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

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
            <Button rightIcon={<HamburgerIcon />} onClick={onOpen} />

            <Drawer
              isOpen={isOpen}
              size="full"
              onClose={onClose}
              // @ts-ignore
              initialFocusRef={firstField}
            >
              <DrawerOverlay height="100% !important" />
              <DrawerContent
                bg={useColorModeValue(
                  'rgb(240, 231, 219, 0.95)',
                  'rgb(32, 32, 35, 0.95)'
                )}
                height="100% !important"
              >
                <DrawerHeader>
                  <Text textAlign="center" color="#fcb03b">
                    Resonate With Yourself
                  </Text>
                  <DrawerCloseButton />
                </DrawerHeader>

                {/* Drawer Body */}
                <DrawerBody>
                  <VStack
                    divider={
                      <StackDivider
                        borderColor={useColorModeValue('#202023', '#fcb03b')}
                      />
                    }
                    spacing={5}
                    align="center"
                    fontSize="lg"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                  >
                    <NextLink href="/" passHref>
                      <Button onClick={onClose} variant="link" width="100%">
                        Home
                      </Button>
                    </NextLink>
                    <NextLink href="/about" passHref>
                      <Button onClick={onClose} variant="link" width="100%">
                        About Me
                      </Button>
                    </NextLink>

                    <Accordion allowToggle border="transparent" width="100%">
                      <AccordionItem>
                        <AccordionButton
                          padding="0"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Box
                            textAlign="center"
                            color={useColorModeValue('#718096', '#e2e8f0')}
                          >
                            <Text fontWeight="600">Services</Text>
                          </Box>
                          <Box>
                            <AccordionIcon
                              color={useColorModeValue('#718096', '#e2e8f0')}
                            />
                          </Box>
                        </AccordionButton>

                        <AccordionPanel
                          display="flex"
                          flexDir="column"
                          alignItems="center"
                          justifyContent="center"
                          textAlign="center"
                        >
                          <NextLink passHref href="/services/bodywork">
                            <Button
                              variant="link"
                              onClick={onClose}
                              width="100%"
                              py="2"
                              fontWeight="light"
                              fontSize="18px"
                            >
                              Bodywork
                            </Button>
                          </NextLink>
                          <NextLink passHref href="/services/de-armouring">
                            <Button
                              variant="link"
                              onClick={onClose}
                              width="100%"
                              py="2"
                              fontWeight="light"
                              fontSize="18px"
                            >
                              De-armouring
                            </Button>
                          </NextLink>
                          <NextLink passHref href="/services/authentic-tantra">
                            <Button
                              variant="link"
                              onClick={onClose}
                              width="100%"
                              py="2"
                              fontWeight="light"
                              fontSize="18px"
                            >
                              Authentic Tantra
                            </Button>
                          </NextLink>
                          <NextLink
                            passHref
                            href="/services/advanced-energetic-bodywork"
                          >
                            <Button
                              variant="link"
                              onClick={onClose}
                              width="100%"
                              py="2"
                              fontWeight="light"
                              fontSize="18px"
                            >
                              Advanced Energetic Bodywork
                            </Button>
                          </NextLink>
                          <NextLink passHref href="/services/sound-healing">
                            <Button
                              variant="link"
                              onClick={onClose}
                              width="100%"
                              py="2"
                              fontWeight="light"
                              fontSize="18px"
                            >
                              Sound Healing
                            </Button>
                          </NextLink>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>

                    <NextLink href="/pricing" passHref>
                      <Button onClick={onClose} variant="link" width="100%">
                        Pricing
                      </Button>
                    </NextLink>
                    <NextLink href="/testimonials" passHref>
                      <Button onClick={onClose} variant="link" width="100%">
                        Testimonials
                      </Button>
                    </NextLink>
                    <NextLink href="/contact" passHref>
                      <Button onClick={onClose} variant="link" width="100%">
                        Contact
                      </Button>
                    </NextLink>
                  </VStack>
                </DrawerBody>

                <DrawerFooter
                  width="100%"
                  textAlign="center"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Button onClick={onClose}>Close</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
