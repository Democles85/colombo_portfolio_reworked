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
              <Heading as={'h1'}>Book your session</Heading>
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
                  I offer advanced sessions for those who seek a deep experience
                  and honor that money holds less importance. My fixed rate is{' '}
                  <span
                    style={{
                      color: 'rgba(250, 175, 58, 1)',
                      fontWeight: 'bold',
                    }}
                  >
                    200 euros (€)
                  </span>{' '}
                  for 120 to 180 minutes though donations are welcomed as a sign
                  of gratitude. If finances are a concern, please reach out so
                  we can explore a suitable solution.
                </Text>
                <Text
                  textAlign={'justify'}
                  textIndent={'1em'}
                  fontSize={{ base: '1rem', md: '1.2rem' }}
                  pt={'1rem'}
                >
                  Due to the focused nature of this work, I offer only two
                  sessions per day. For this reason, it is strongly recommended
                  to secure your session and avoid last-minute cancellations.
                  <span className="italic">
                    Please only contact if you are really serious to work with
                    me and can commit to it.
                  </span>
                </Text>

                <Text className="text-justify italic pt-4 indent-[1em] text-base md:text-lg lg:text-xl">
                  Please only contact if you are really serious to work with me
                  and can commit to it.
                </Text>

                <Text
                  textAlign={'justify'}
                  fontSize={{ base: '1rem', md: '1.2rem' }}
                  pt={'1rem'}
                >
                  With lots of love,
                </Text>
                <Text
                  textAlign={'justify'}
                  fontSize={{ base: '1rem', md: '1.2rem' }}
                >
                  <span
                    style={{
                      color: 'rgba(250, 175, 58, 1)',
                      fontWeight: 'bold',
                    }}
                  >
                    - Colombo
                  </span>
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
                <Button label={'Contact Me'} />
              </Link>
            </Box>
          </Container>
        </Section>
      </Box>
    </Layout>
  );
};

export default Pricing;
