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
                    {/* <Divider my={'0.5rem'} /> */}
                    <Image
                      src={`/works/${packageItem.thumbnail}`}
                      alt={`${packageItem.title} thumbnail`}
                      borderRadius={'lg'}
                      boxShadow={'0px 0px 10px rgba(0, 0, 0, 0.5)'}
                    />
                    <Text fontSize={'1.5rem'}>{packageItem.title}</Text>
                    {packageItem.package.map(
                      (item, _index) =>
                        // Only show the first price in the list of packages
                        _index === 0 && (
                          <Box mt={'1rem'} position={'relative'}>
                            <Box
                              position={'absolute'}
                              bg={
                                'linear-gradient(90deg, #FFAF36 0%, #fd6450 35%)'
                              }
                              w={'15rem'}
                              left={'-1rem'}
                              h={'50px'}
                              zIndex={0}
                              borderTopRightRadius={'lg'}
                              borderBottomRightRadius={'lg'}
                              className={styles['price-card']}
                            />
                            <Text
                              position={'relative'}
                              fontSize={'1.25rem'}
                              fontWeight={'bold'}
                              textAlign={'left'}
                              py={'0.5rem'}
                              zIndex={100}
                            >
                              Starting from &euro;{item.price}
                            </Text>
                          </Box>
                        )
                    )}
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </Section>
      </Box>
    </Layout>
  );
};

export default Packages;
