import { Box, Container, Heading, Spinner, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/layouts/title';
import Section from '../../components/Section';

// Data
import data from '../../util/services';

// Styles
import styles from '../../styles/Service.module.css';
import { Title } from '../../components/ServicesComponents';

const Service = () => {
  const router = useRouter();
  const { slug } = router.query;
  const services = data.services.find(service => service.slug === slug);

  if (!services)
    return (
      <Layout title={'Services'}>
        <Box pt={'4rem'}>
          <Box
            minH={'calc(100vh - 4rem)'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Spinner
              thickness={'4px'}
              speed={'0.65s'}
              emptyColor={'gray.200'}
              color={'#FFAF36'}
              size={'xl'}
            />
          </Box>
        </Box>
      </Layout>
    );

  return (
    <Layout title={services?.title}>
      <Box pt={'4rem'}>
        <Section>
          <Header thumbnail={services.thumbnail}>
            <Section delay={0.5}>
              <Heading
                color={'#fff'}
                textAlign={'center'}
                fontSize={{ base: '2rem', md: '3rem', lg: '4rem' }}
                className={styles['text-gradient']}
              >
                {services.title}
              </Heading>
            </Section>
          </Header>
        </Section>

        <Section delay={0.4}>
          <Container maxW={'container.md'} py={'4rem'}>
            <Title>{services.title}</Title>

            <Box>
              {services.content.map((content, _index) => (
                <Box mb={4} key={_index}>
                  <Text
                    fontSize={{ base: '1rem', md: '1.25rem' }}
                    textAlign={'justify'}
                  >
                    {content.paragraph}
                  </Text>
                </Box>
              ))}
            </Box>
          </Container>
        </Section>
      </Box>
    </Layout>
  );
};

export default Service;
