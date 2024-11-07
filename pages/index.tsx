import {
  Box,
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
import { Button } from '../components/Button';

// Data
import data from '../util/modalities.json';

// Styles
import styles from '../styles/Home.module.css';
import Layout from '../components/layouts/title';
import { getWindowSize, getWindowSizeStatic } from '../lib/getWindowSize';
import Header from '../components/Header';

const Home: NextPage = () => {
  const { ref } = useParallax<HTMLDivElement>({
    speed: 30,
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
            {/* Make it responsive for mobile browsers knowing the navigation bar */}
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
            />
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
            ref={ref}
            display={'flex'}
            flexDir={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            minH={'100vh'}
          >
            <Box
              textStyle="h1"
              borderRadius="lg"
              p={5}
              // bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              background="rgba(245,166,35,0.25)"
              boxShadow="0 8px 32px 0 rgba(245,166,35, 0.15)"
              border="1px solid rgba(255,255,255, 0.18)"
              maxW="container.md"
              marginBottom={'1rem'}
            >
              <Text
                fontWeight={'medium'}
                fontSize={[18, null, 20]}
                letterSpacing="tight"
              >
                “All this is a journey that is expanding our consciousness. A
                great Sea of Energy where we have to bathe without stopping to
                understand who we are, because always on this journey we will
                change who we are.”
              </Text>
            </Box>
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
                  textAlign={'justify'}
                  textIndent={'1em'}
                  fontSize={{ base: '1rem', md: '1.2rem' }}
                >
                  Resonate with Yourself is a{' '}
                  <span
                    style={{
                      color: 'rgba(250, 175, 58, 1)',
                      fontWeight: 'bold',
                    }}
                  >
                    sacred sanctuary
                  </span>{' '}
                  —a temple where I guide each person to reconnect with their
                  inner essence, helping them to resonate with their true self
                  and activate their own healing, for the cure lies within.
                  Rooted in a holistic therapy, I engage the physical,
                  emotional, mental, and spiritual layers, treating them as one
                  interconnected system.
                </Text>
                <Text
                  textAlign={'justify'}
                  textIndent={'1em'}
                  fontSize={{ base: '1rem', md: '1.2rem' }}
                  pt={'1rem'}
                >
                  Core techniques include{' '}
                  <span
                    style={{
                      color: 'rgba(250, 175, 58, 1)',
                      fontWeight: 'bold',
                    }}
                  >
                    Advanced Bodywork Massage, De-Armoring, Authentic Massage,
                    Trauma Clearing, Emotional Release, Breathwork, and Sound
                    Healing{' '}
                  </span>
                  —advanced practices designed to unlock your body’s deepest
                  potential.
                </Text>
                <Text
                  textAlign={'justify'}
                  textIndent={'1em'}
                  fontSize={{ base: '1rem', md: '1.2rem' }}
                  pt={'1rem'}
                >
                  Each session is a unique journey, crafted with heart and
                  intention to honor your individuality. I am here with true
                  care and dedication, using only the techniques that resonate
                  deeply with your body and spirit in a way that is entirely
                  yours, gifting pure, not-alike sessions despite having offered
                  more than 1500sessions.
                </Text>
                <Text
                  textAlign={'justify'}
                  textIndent={'1em'}
                  fontSize={{ base: '1rem', md: '1.2rem' }}
                  pt={'1rem'}
                >
                  I believe that our body holds the full story of our life .
                  It's our most intimate memory keeper. Everything that has ever
                  happened to and around us is encoded in our physical being,
                  shaping us in response to life's journey. If your life has
                  flowed with joy and ease, that joy is woven into the very
                  fabric of your being; but if it's been marked by pain or
                  struggle, those energies are held within you, waiting to be
                  seen, heard, and released.
                </Text>
                <Text
                  textAlign={'justify'}
                  textIndent={'1em'}
                  fontSize={{ base: '1rem', md: '1.2rem' }}
                  pt={'1rem'}
                >
                  The most effective way to approach your body is to cleanse,
                  liberate, expand, and bring more joy and love into it. I
                  intuitively integrate energy, awareness, massage, de-armoring,
                  breathwork, and sound healing through my energy field,
                  alchemically unify all these elements to offer you a
                  profoundly deep & advanced session. Depending on the energy
                  level and needs of your body, I intuitively design each
                  session for you. Some bodies are already in balance, with
                  little to unlock, release, or clear, and for them, our focus
                  is on uplifting the energy, allowing the vibration of the body
                  to create a deeply unique experience.
                </Text>
                <Text
                  textAlign={'justify'}
                  textIndent={'1em'}
                  fontSize={{ base: '1rem', md: '1.2rem' }}
                  pt={'1rem'}
                >
                  In the initial sessions, when the body is on an energetic
                  density, it may release deeply held pain or trauma. As we move
                  forward in the subsequent sessions, I guide you in cultivating
                  your energetic body, allowing every cell to vibrate freely,
                  embracing its natural state of liberation. This transformation
                  infuses your being with new energy, fostering a profound
                  cellular experience of self-love, joy, and growth, which then
                  radiates outward, bringing greater vitality, clarity, and
                  success into your life.
                </Text>
                <Text
                  textAlign={'justify'}
                  textIndent={'1em'}
                  fontSize={{ base: '1rem', md: '1.2rem' }}
                  pt={'1rem'}
                >
                  The work is designed to help you release the weight of past
                  energies, guiding you towards falling in love with yourself,
                  your heart, and your sensuality, while gently clearing any
                  lingering shame or guilt. Through this process, you are
                  invited to experience life more fully, becoming more alive,
                  present, and productive. After years of dedicated practice,
                  study, and deep self-work, I’ve developed highly authentic,
                  advanced, and enlivening sessions. These sessions go deep,
                  engaging the body’s energetic and biological rhythms and
                  typically lasting between 2 to 3 hours, sometimes extending up
                  to 4 if energy calls for it. This is an in-depth and conscious
                  energetic surgery infused with love, responsibility, and
                  seriousness, designed for anyone ready to resonate with
                  themselves through Resonate with Yourself.
                </Text>
              </Box>
              {/* <Divider
                my={'2rem'}
                width={{ base: '100%', md: '110%', lg: '120%' }}
              /> */}
              <Box pt={'3rem'}>
                <Paragraph>
                  The{' '}
                  <span
                    style={{
                      textDecoration: 'underline',
                      textDecorationColor: 'rgba(250, 175, 58, 1)',
                      color: 'rgba(250, 175, 58, 1)',
                      textUnderlineOffset: '0.2rem',
                      fontWeight: 'bold',
                    }}
                  >
                    modalities
                  </span>{' '}
                  of reaching the state of resonating with yourself are:{' '}
                </Paragraph>

                <Box py={'1rem'}>
                  {modalities.map((modality, index) => (
                    <Box
                      key={index}
                      className={styles.hidden}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'flex-start'}
                      pl={'1rem'}
                    >
                      <List>
                        <ListItem
                          fontSize={{ base: '1rem', md: '1.2rem' }}
                          textIndent={'1rem'}
                        >
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
                  <Button label="Connect with me" />
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
