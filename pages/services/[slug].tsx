import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/layouts/title';

// Data
import data from '../../util/services';

const Service = () => {
  const router = useRouter();
  const { slug } = router.query;
  const services = data.services.find(service => service.slug === slug);

  if (!services)
    return (
      <Layout title={'Services'}>
        <Box pt={'4rem'}>Loading...</Box>
      </Layout>
    );

  return (
    <Layout title={services?.title}>
      <Box pt={'4rem'}>
        <Box>{services?.title}</Box>
      </Box>
    </Layout>
  );
};

export default Service;
