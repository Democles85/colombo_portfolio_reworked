import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

// Components
import Layout from '../components/layouts/title';
import Section from '../components/Section';

// Data
import data from '../util/services';

// Styles
import styles from '../styles/Services.module.css';
import CircularBackground from '../components/CircularBackground';

const Services = () => {
  const services = data.services;

  return (
    <Layout title="Services">
      <Box pt={'4rem'}>
        <Section>
          <Container
            maxW={'container.lg'}
            display={'flex'}
            flexDir={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box textAlign={'center'} py={'4rem'}>
              <Heading as={'h1'}>
                Learn about{' '}
                <span className={styles['text-gradient']}>
                  Resonating with Yourself.
                </span>
              </Heading>
            </Box>

            <Box display={'flex'} flexDir={'column'} maxW={'container.sm'}>
              {services.map((service, _index) => (
                <Link href={`/services/${service.slug}`}>
                  <Box
                    bg={useColorModeValue('white', '#202023')}
                    border={'1px solid #FFAF36'}
                    borderRadius={'lg'}
                    display={'flex'}
                    flexDir={'column'}
                    transition={'all 0.2s ease-in-out'}
                    _hover={{
                      boxShadow: '0px 0px 10px #FFAF36',
                      cursor: 'pointer',
                    }}
                    marginY={'1rem'}
                    className={styles.card}
                  >
                    <Box
                      key={_index}
                      p={'1rem'}
                      textAlign={'center'}
                      className={styles['card-content']}
                    >
                      <Text fontSize={'1.5rem'}>{service.title}</Text>
                      {/* <Divider my={'0.5rem'} /> */}
                      <Box>
                        <Image
                          src={`/${service.thumbnail}`}
                          alt={`${service.title} thumbnail`}
                          loading={'lazy'}
                          borderRadius={'lg'}
                          boxShadow={'0px 0px 10px rgba(0, 0, 0, 0.5)'}
                        />
                      </Box>
                      <Text textAlign={'justify'} py={'1rem'}>
                        {service.description}
                      </Text>
                    </Box>
                  </Box>
                </Link>
              ))}
            </Box>
          </Container>
        </Section>
      </Box>
    </Layout>
  );
};

export default Services;
