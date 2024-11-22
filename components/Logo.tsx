import { Divider, Image, Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { DM_Serif_Text } from '@next/font/google';
import Link from 'next/link';

const dmSerifText = DM_Serif_Text({
  weight: ['400'],
  subsets: ['latin-ext'],
  style: 'normal',
});

const LogoBox = styled.div`
  display: inline-flex;
  align-items: center;
  height: 50px;
  font-size: 28px;
  font-smooth: always;
  letter-spacing: 0.2px;
  padding: 0 0 0 40px;
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
  const logo = `/images/logo/logo_removebg.png`;

  return (
    <Link href="/">
      <LogoBox>
        <Image src={logo} alt="Therapist Logo" width={'2rem'} />
        <Divider
          orientation={'vertical'}
          ml={2}
          height={'35px'}
          color={useColorModeValue('#202023', '#ffffff')}
          display={{ base: 'none', md: 'flex' }}
        />
        <Text
          ml={2}
          color={'rgba(250, 175, 58, 1)'}
          className={dmSerifText.className}
          display={{ base: 'none', md: 'flex' }}
        >
          Resonate with Yourself
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
