import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  // Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Components
import Layout from '../components/layouts/title';
import Section from '../components/Section';

// Data
import data from '../util/services';

// Styles
import styles from '../styles/Services.module.css';
import CircularBackground from '../components/CircularBackground';
// import Image from 'next/image';
import { Image } from '@chakra-ui/image';

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

            {/* <Box display={'flex'} flexDir={'column'} maxW={'container.sm'}> */}
            <SimpleGrid
              columns={1}
              spacing={2}
              width={{ base: '100%', md: '560px' }}
            >
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
                      {/* <Box
                        backgroundImage={`${service.thumbnail}`}
                        height={'400px'}
                        maxHeight={'100%'}
                        backgroundClip={'content-box'}
                        backgroundSize={'cover'}
                        backgroundPosition={'center'}
                        backgroundRepeat={'no-repeat'}
                        borderRadius={'lg'}
                        overflow={'hidden'}
                      /> */}
                      <Box maxH={'100%'}>
                        {/* <LazyLoadImage
                          src={service.thumbnail}
                          alt={service.title}
                          effect={'blur'}
                          className={styles['card-image']}
                          objectFit={'cover'}
                        /> */}
                        <Image
                          src={`/${service.thumbnail}`}
                          alt={service.title}
                          width={1000}
                          height={400}
                          objectFit={'cover'}
                          objectPosition={'center'}
                          loading={'lazy'}
                          borderRadius={'lg'}
                        />
                      </Box>
                      <Text textAlign={'justify'} py={'1rem'}>
                        {service.description}
                      </Text>
                    </Box>
                  </Box>
                </Link>
              ))}
            </SimpleGrid>
            {/* </Box> */}
          </Container>
        </Section>
      </Box>
    </Layout>
  );
};

export default Services;
