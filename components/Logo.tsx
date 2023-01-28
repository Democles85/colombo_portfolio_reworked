import Link from 'next/link';
import styled from '@emotion/styled';
import { Divider, Text, useColorModeValue, Image } from '@chakra-ui/react';

// Font
import { Roboto } from '@next/font/google';

const roboto = Roboto({ weight: ['300', '400'], subsets: ['latin'] });

const LogoBox = styled.div`
  display: inline-flex;
  align-items: center;
  height: 50px;
  font-size: 26px;
  padding: 0 0 0 40px;
  letter-spacing: 0.3px;
  @media (max-width: 768px) {
    font-size: 22px;
    padding: 0 0 0 10px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
    padding: 0 0 0 5px;
  }
`;

const Logo = () => {
  // const logo = `/images/logo/therapist${useColorModeValue('', '-dark')}.png`;
  const logo = `/images/logo/logo_removebg.png`;

  return (
    <Link href="/">
      <LogoBox>
        <Image
          src={logo}
          alt="Therapist Logo"
          width={{ base: '1.25rem', md: '1.5rem' }}
          // height={{ base: '1.25rem', md: '1.5rem' }}
        />
        <Divider
          orientation={'vertical'}
          ml={2}
          height={'35px'}
          color={useColorModeValue('#202023', '#ffffff')}
        />
        <Text
          ml={2}
          color={'rgba(250, 175, 58, 1)'}
          className={roboto.className}
          fontWeight={'400'}
        >
          Resonate with Yourself
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
