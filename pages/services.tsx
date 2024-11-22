import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';

import 'react-lazy-load-image-component/src/effects/blur.css';

// Components
import Layout from '../components/layouts/title';
import Section from '../components/Section';

// Data
import data from '../util/services';

// Styles
import styles from '../styles/Services.module.css';
// import Image from 'next/image';
import { Image } from '@chakra-ui/image';
import { Button } from '../components/Button';

const Services = () => {
  const services = data.services;

  return (
    <Layout title="Therapies">
      <Box pt={'4rem'}>
        <Section>
          <Container
            maxW={{
              base: 'container.sm',
              md: 'container.md',
              lg: '80%',
            }}
            display={'flex'}
            flexDir={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box textAlign={'center'} py={'4rem'}>
              <Heading as={'h1'}>
                One Session,{' '}
                <span className="text-amber-500">All Services</span>
              </Heading>

              <div className="max-w-[640px] pt-4">
                <Text className="text-lg">
                  Each session includes all of the services listed below. Rather
                  than separate treatments, these techniques come together as
                  part of a complete, personalized experience, designed to
                  decode all your body blocks.
                </Text>
              </div>
            </Box>

            {/* <Box display={'flex'} flexDir={'column'} maxW={'container.sm'}> */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 2, xl: 3 }} spacing={2}>
              {services.map((service, _index) => (
                <Link href={`/services/${service.slug}`}>
                  <Box
                    bg={useColorModeValue('white', '#202023')}
                    border={'1px solid #FFAF36'}
                    height={'95%'}
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
                      <Box maxH={'100%'}>
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

            <Box textAlign={'center'} py={'4rem'} className="mb-24 md:mb-24">
              <Link href={'/pricing'} className="no-underline">
                <Button label="Book Your Session" />
              </Link>
            </Box>
            {/* </Box> */}
          </Container>
        </Section>
      </Box>
    </Layout>
  );
};

export default Services;
