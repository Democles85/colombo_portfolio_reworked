import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

// Components
import IntroImage from '../components/IntroImage';
import Section from '../components/Section';

// Styles
import styles from '../styles/About.module.css';

// Layout
import Layout from '../components/layouts/title';

// Data
import data from '../util/about';

const About = () => {
  const about = data.about;

  return (
    <Layout title={'About Me'}>
      <Box pt={'4rem'}>
        <Section>
          <IntroImage thumbnail="colombo.png">
            <Section delay={0.5}>
              <Heading color={'#fff'} textAlign={'center'}>
                Hello, my name is{' '}
                <span className={styles['text-gradient']}>Colombo</span>.
              </Heading>
            </Section>
          </IntroImage>
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
                  // width={{ base: '80%', md: '50%' }}
                  w={'fit-content'}
                  borderRadius={'lg'}
                  mb={6}
                  p={3}
                  textAlign={'center'}
                  fontStyle={'italic'}
                  bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                >
                  "It is a sea of consciousness to experience with an open heart
                  and we must all take note of it."
                </Box>
              </Box>
              <Heading
                as={'h3'}
                variant={'section-title'}
                letterSpacing={'wider'}
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
                    <Text py={'0.5rem'}>{data.paragraph}</Text>
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
                  The definition here is that there is no definition;
                </span>{' '}
                you just experience that which the universe is allowing to
                transform. It is not you, rather the universe flowing through
                you.
              </Box>
            </Box>
          </Container>
        </Section>
      </Box>
    </Layout>
  );
};

export default About;
