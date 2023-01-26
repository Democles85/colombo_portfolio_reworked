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
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';

// React Icons
import { VscCircleFilled } from 'react-icons/vsc';

// Parallax
import { useParallax } from 'react-scroll-parallax';

// Typewriter
import Typewriter from 'typewriter-effect';
import IntroImage from '../components/IntroImage';
import Paragraph from '../components/Paragraph';
import Section from '../components/Section';

// Styles
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { ref } = useParallax<HTMLDivElement>({
    speed: 30,
  });
  const { ref: ref2 } = useParallax<HTMLDivElement>({
    speed: 20,
  });

  const [windowSize, setWindowSize] = useState({
    width: 0 as number,
    height: 0 as number,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const modalities = [
    'Self Awareness',
    'Bodywork',
    'De-Armouring',
    'Breathwork',
    'Shadows',
    'Prana',
    'Reiki',
    'Emotional Release',
    'Trauma Release',
    'Duality & Non Duality',
    'Feminine & Masculine Polarity',
    'Sound Healing',
  ];

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

  return (
    <Box pt={'4rem'}>
      <Section>
        <IntroImage thumbnail="home_thumbnail.jpg">
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
        </IntroImage>
      </Section>

      <Container
        maxW={{ base: 'container.sm', md: 'container.md', lg: 'container.xl' }}
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
              What is {windowSize.width < 768 && <br />}
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
              <Paragraph>
                Resonate with Yourself is based on a{' '}
                <span
                  style={{
                    textDecoration: 'underline',
                    textDecorationColor: 'rgba(250, 175, 58, 1)',
                    textUnderlineOffset: '0.2rem',
                  }}
                >
                  Holistic Therapy
                </span>{' '}
                including physical, emotional, mental, and spiritual level,
                where everything is connected as a single body.
              </Paragraph>
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
                        {modality}
                      </ListItem>
                    </List>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box className={styles.hidden} py={'2rem'}>
              <Link href={'/about'} _hover={{ textDecoration: 'none' }}>
                <Button
                  variant={'outline'}
                  minW={'240px'}
                  borderColor={'rgba(250, 175, 58, 1)'}
                >
                  Learn More
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
