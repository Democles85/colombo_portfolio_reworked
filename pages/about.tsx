import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

// Components
import Section from '../components/Section';

// Styles
import styles from '../styles/About.module.css';

// Layout
import Layout from '../components/layouts/title';

// Data
import data from '../util/about';
import { getWindowSize } from '../lib/getWindowSize';

const About = () => {
  const about = data.about;

  const height = getWindowSize().height;

  return (
    <Layout title={'About Me'}>
      <Box pt={'4rem'}>
        <Section>
          <Box
            background={`url(/works/colombo.png)`}
            backgroundSize={'cover'}
            backgroundPosition={'center'}
            backgroundRepeat={'no-repeat'}
            position={'relative'}
          >
            <Box
              minHeight={{
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
              <Section delay={0.5}>
                <Heading
                  color={'#fff'}
                  textAlign={'center'}
                  fontSize={{ base: '2rem', md: '3rem', lg: '4rem' }}
                >
                  About <span className={styles['text-gradient']}>Me</span>
                </Heading>
              </Section>
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
        <Section>
          <Container
            maxW={'container.lg'}
            textAlign={'justify'}
            fontSize={'1.15rem'}
          >
            <Box padding={{ base: '0', md: '3rem' }} py={{ base: '1rem' }}>
              <Box
                width={'full'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Box
                  textStyle="h1"
                  borderRadius="lg"
                  p={5}
                  // bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                  background="rgba(245,166,35,0.25)"
                  boxShadow="0 8px 32px 0 rgba(245,166,35, 0.15)"
                  border="1px solid rgba(255,255,255, 0.18)"
                  fontStyle={'italic'}
                >
                  <Text
                    fontWeight={'medium'}
                    fontSize={[18, null, 20]}
                    letterSpacing="tight"
                  >
                    "It is a sea of consciousness to be experienced with an open
                    heart, and for this we need to inform everyone."
                  </Text>
                </Box>
              </Box>
              <Heading
                as={'h3'}
                variant={'section-title'}
                letterSpacing={'wider'}
                fontSize={{ base: '1.75rem', md: '2rem' }}
                // fontFamily={"'Silkscreen', cursive"}
              >
                My Journey
              </Heading>
              <Container maxW={'container.md'}>
                {about.map((data, _index) => (
                  <Box
                    key={_index}
                    position={'relative'}
                    display={'flex'}
                    borderLeft={'2px rgba(200, 200, 200, 0.2) solid'}
                  >
                    <Box mb={10} ml={4}>
                      <Box
                        position={'absolute'}
                        w={2}
                        h={2}
                        bg={'#FFAF36'}
                        borderRadius={'full'}
                        mt={'1.15rem'}
                        left={'-0.3rem'}
                      />
                    </Box>
                    <Text
                      py={'0.5rem'}
                      fontSize={{ base: '1rem', md: '1.2rem' }}
                    >
                      {data.paragraph}
                    </Text>
                  </Box>
                ))}
              </Container>
              <Box py={'2rem'}>
                <span
                  style={{
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    color: '#FFAF36',
                  }}
                >
                  The definition is that there is no definition,
                </span>{' '}
                you simply experience what the universe is. It is not you, but
                it is the universe itself that will flow through you.
              </Box>
            </Box>
          </Container>
        </Section>
      </Box>
    </Layout>
  );
};

export default About;
