import { Box, Container, Heading, Text } from '@chakra-ui/react';

import Link from 'next/link';

// Components
import Layout from '../components/layouts/title';
import Section from '../components/Section';
import { Button } from '../components/Button';

// Styles
import styles from '../styles/Packages.module.css';

const Pricing = () => {
  return (
    <Layout title={'Pricing'}>
      <Box pt={'4rem'}>
        <Section>
          <Container maxW={'container.lg'}>
            <Box textAlign={'center'} py={'4rem'}>
              <Heading as={'h1'}>
                What we offer at{' '}
                <span className={styles['text-gradient']}>
                  Resonate with Yourself.
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
                  Resonate with Yourself is based on a{' '}
                  <span
                    style={{
                      color: 'rgba(250, 175, 58, 1)',
                      fontWeight: 'bold',
                    }}
                  >
                    Holistic Therapy
                  </span>{' '}
                  including physical, emotional, mental, and spiritual level,
                  where everything is connected as a single body.
                </Text>
                <Text
                  textAlign={'justify'}
                  textIndent={'1em'}
                  fontSize={{ base: '1rem', md: '1.2rem' }}
                  pt={'1rem'}
                >
                  The base is{' '}
                  <span
                    style={{
                      color: 'rgba(250, 175, 58, 1)',
                      fontWeight: 'bold',
                    }}
                  >
                    Bodywork De Armoring, Authentic Massage, Trauma Release,
                    Emotional Release, Breathwork and Sound Healing{' '}
                  </span>
                  are techniques used to unlock the body's potential. Sessions
                  vary from person to person. Sessions vary from person to
                  person. Each session is advanced and adapted to the individual
                  which lasts from{' '}
                  <span
                    style={{
                      color: 'rgba(250, 175, 58, 1)',
                      fontWeight: 'bold',
                    }}
                  >
                    2 - 3 hours
                  </span>{' '}
                  costs{' '}
                  <span
                    style={{
                      color: 'rgba(250, 175, 58, 1)',
                      fontWeight: 'bold',
                    }}
                  >
                    360&euro;
                  </span>
                  . We work with your rhythm, allowing you to selfheal
                  naturally.
                </Text>
              </Box>
            </Box>

            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              py={'3rem'}
            >
              <Link href={'/contact'}>
                <Button label={'Contact me'} />
              </Link>
            </Box>
          </Container>
        </Section>
      </Box>
    </Layout>
  );
};

export default Pricing;
