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
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';

import Link from 'next/link';
import React from 'react';

// Components
import Layout from '../components/layouts/title';
import Section from '../components/Section';

// Styles
import styles from '../styles/Packages.module.css';

// Data
import data from '../util/packages';
import CircularBackground from '../components/CircularBackground';

const Packages = () => {
  const packages = data.packages;

  return (
    <Layout title={'Packages'}>
      <CircularBackground />
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
                <Link href={`/packages/${packageItem.slug}`}>
                  <Box
                    bg={useColorModeValue('white', '#202023')}
                    border={'1px solid #FFAF36'}
                    borderRadius={'lg'}
                    display={'flex'}
                    flexDir={'column'}
                    transition={'all 0.2s ease-in-out'}
                    _hover={{
                      boxShadow: '0px 0px 10px #FFAF36',
                      cursor: 'default',
                    }}
                    className={styles.card}
                  >
                    <Box
                      key={_index}
                      p={'1rem'}
                      textAlign={'center'}
                      className={styles['card-content']}
                    >
                      <Text fontSize={'1.5rem'}>{packageItem.title}</Text>
                      {/* <Divider my={'0.5rem'} /> */}
                      <Image
                        src={`/works/${packageItem.thumbnail}`}
                        alt={`${packageItem.title} thumbnail`}
                        borderRadius={'lg'}
                        boxShadow={'0px 0px 10px rgba(0, 0, 0, 0.5)'}
                      />
                      {packageItem.package.map(
                        (item, _index) =>
                          // Only show the first price in the list of packages
                          _index === 0 && (
                            <Text
                              bg={
                                'linear-gradient(90deg, #FFAF36 0%, #fd6450 35%)'
                              }
                              bgClip={'text'}
                              fontSize={'1.25rem'}
                              fontWeight={'bold'}
                              textAlign={'left'}
                              py={'0.5rem'}
                            >
                              Starting from &euro;{item.price}
                            </Text>
                          )
                      )}
                      <Text textAlign={'justify'}>
                        {packageItem.description}
                      </Text>

                      <Button
                        variant={'ghost'}
                        mt={'1rem'}
                        _hover={{
                          bg: 'yellow.500',
                          color: 'white',
                        }}
                      >
                        Read more &rarr;
                      </Button>
                    </Box>
                  </Box>
                </Link>
              ))}
            </SimpleGrid>
          </Container>
        </Section>
      </Box>
    </Layout>
  );
};

export default Packages;
