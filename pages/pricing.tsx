import {
  Box,
  Card,
  Container,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';

import Link from 'next/link';
import React from 'react';

// Components
import Layout from '../components/layouts/title';
import Section from '../components/Section';
import { Button } from '../components/Button';

// Styles
import styles from '../styles/Packages.module.css';

// Data
import data from '../util/pricing';
import CircularBackground from '../components/CircularBackground';

const Pricing = () => {
  const packages = data.pricing;

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
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {packages.map((packageItem, _index) => (
                <Card
                  key={_index}
                  maxW={'lg'}
                  rounded={'lg'}
                  overflow={'hidden'}
                  border={'1px solid rgba(253, 173, 58, 1)'}
                  boxShadow={'0 0 10px 0 rgba(0, 0, 0, 0.1)'}
                  bg={useColorModeValue('white', '#202023')}
                >
                  <Box px={6} py={3}>
                    <Text
                      fontSize={{ base: '2xl', lg: '3xl' }}
                      pt={'1rem'}
                      textAlign={'center'}
                      fontWeight={500}
                      color={useColorModeValue('#000', '#fff')}
                      className={styles['text-gradient']}
                    >
                      {packageItem.title}
                    </Text>

                    <Box py={'2rem'}>
                      {packageItem.attributes.map((attribute, _index) => (
                        <Text
                          key={_index}
                          fontSize={{ base: '3xl', lg: '4xl' }}
                          textAlign={'center'}
                          fontWeight={700}
                          color={useColorModeValue('gray.800', 'white')}
                        >
                          € {attribute.price}{' '}
                          <span
                            style={{
                              fontSize: '1.25rem',
                              fontWeight: 400,
                              opacity: 0.5,
                            }}
                          >
                            / {attribute.duration} {attribute.durationType}{' '}
                            <span
                              style={{
                                fontSize: '1rem',
                                fontWeight: 400,
                              }}
                            >
                              (per person)
                            </span>
                          </span>{' '}
                        </Text>
                      ))}
                      <Divider my={'1rem'} opacity={'0.2'} />
                      <Box>
                        {packageItem.services.map((service, _index) => (
                          <Box
                            key={_index}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            py={'1rem'}
                          >
                            <Text
                              fontSize={'1.25rem'}
                              fontWeight={500}
                              opacity={0.5}
                              color={useColorModeValue('gray.800', 'white')}
                            >
                              {service}
                            </Text>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Card>
              ))}
            </SimpleGrid>
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
