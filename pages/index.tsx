import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';

// React Icons
import { VscCircleFilled } from 'react-icons/vsc';

// Parallax
import { useParallax } from 'react-scroll-parallax';

// Typewriter
import Typewriter from 'typewriter-effect';

// Components
import Paragraph from '../components/Paragraph';
import Section from '../components/Section';

// Data
import data from '../util/modalities.json';

// Styles
import styles from '../styles/Home.module.css';
import Layout from '../components/layouts/title';
import { getWindowSize, getWindowSizeStatic } from '../lib/getWindowSize';

const Home: NextPage = () => {
  const { ref } = useParallax<HTMLDivElement>({
    speed: 30,
  });
  const { ref: ref2 } = useParallax<HTMLDivElement>({
    speed: 20,
  });

  const windowWidth = getWindowSize().width;

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add(styles.show);
        else entry.target.classList.remove(styles.show);
      });
    });

    const hiddenElements = document.querySelectorAll(`.${styles.hidden}`);
    hiddenElements.forEach(element => {
      observer.observe(element);
    });
  });

  const modalities = data.$modalities;

  const height = getWindowSize().height;

  return (
    <Layout title={'Home'}>
      <Box pt={'4rem'}>
        <Section>
          <Box
            background={`url(/works/home_thumbnail.jpg)`}
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
              <Heading
                paddingX={{ base: '0.3rem' }}
                fontSize={{ base: '1.75rem', md: '2rem', lg: '2.5rem' }}
                ref={ref}
                textShadow={'0px 0px 10px rgba(0, 0, 0, 0.5)'}
                color={'rgba(255, 255, 255, 0.9)'}
              >
                <Typewriter
                  onInit={typewriter => {
                    typewriter
                      .typeString(
                        'It is all a consciousness that you must experience!'
                      )
                      .start();
                  }}
                />
              </Heading>
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
        </Section>

        <Container
          maxW={{
            base: 'container.sm',
            md: 'container.md',
            lg: 'container.xl',
          }}
          overflow={'hidden'}
        >
          <Box
            ref={ref2}
            display={'flex'}
            flexDir={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            minH={'100vh'}
          >
            <Box py={'1rem'}>
              <Heading
                as={'h2'}
                size={'xl'}
                fontSize={{ base: '1.75rem', md: '2rem', lg: '2.5rem' }}
              >
                What is {windowWidth < 768 && <br />}
                <span className={styles['text-gradient']}>
                  Resonate with Yourself?
                </span>
              </Heading>
            </Box>
            <Box
              py={'2rem'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              flexDir={'column'}
            >
              <Box maxW={'540px'}>
                <Text
                  textAlign={['left', 'justify']}
                  textIndent={'1em'}
                  fontSize={'1.2rem'}
                >
                  Resonate with Yourself is based on a{' '}
                  <span
                    style={{
                      color: 'rgba(250, 175, 58, 1)',
                    }}
                  >
                    Holistic Therapy
                  </span>{' '}
                  including physical, emotional, mental, and spiritual level,
                  where everything is connected as a single body.
                </Text>
                <Text
                  textAlign={['left', 'justify']}
                  textIndent={'1em'}
                  fontSize={'1.2rem'}
                >
                  The base is{' '}
                  <span
                    style={{
                      color: 'rgba(250, 175, 58, 1)',
                    }}
                  >
                    Bodywork De Armoring, Authentic Massage, Trauma Release,
                    Emotional Release, Breathwork and Sound Healing{' '}
                  </span>
                  .as a key that helps to unlock bodies ours.The sessions vary
                  from person to person.Every session is adapted to the
                  individual.We work with your rhythm by being ourselves heal.
                </Text>
              </Box>
              <Divider
                my={'2rem'}
                width={{ base: '100%', md: '110%', lg: '120%' }}
              />
              <Box>
                <Paragraph>
                  The{' '}
                  <span
                    style={{
                      textDecoration: 'underline',
                      textDecorationColor: 'rgba(250, 175, 58, 1)',
                      textUnderlineOffset: '0.2rem',
                    }}
                  >
                    modalities
                  </span>{' '}
                  of reaching the state of resonating with yourself are:{' '}
                </Paragraph>

                <Box py={'1rem'}>
                  {modalities.map((modality, index) => (
                    <Box key={index} className={styles.hidden} display={'flex'}>
                      <List>
                        <ListItem fontSize={'1.2rem'} textIndent={'1rem'}>
                          <ListIcon
                            as={VscCircleFilled}
                            color={'rgba(250, 175, 58, 1)'}
                          />
                          {modality.name}
                        </ListItem>
                      </List>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box py={'2rem'}>
                <Link href={'/about'} _hover={{ textDecoration: 'none' }}>
                  <Button
                    variant={'outline'}
                    minW={'240px'}
                    borderColor={'rgba(250, 175, 58, 1)'}
                  >
                    Connect with me
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default Home;
