import { Box, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/layouts/title';

// Data
import data from '../../util/packages';

const PackagePage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const packages = data.packages.find(packageItem => packageItem.slug === slug);

  if (!packages)
    return (
      <Layout title={'Packages'}>
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
    <Layout title={packages?.title}>
      <Box pt={'4rem'}>
        <Box>{packages?.title}</Box>
      </Box>
    </Layout>
  );
};

export default PackagePage;
