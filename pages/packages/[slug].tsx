import { Box } from '@chakra-ui/react';
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
        <Box pt={'4rem'}>Loading...</Box>
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
