import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import IntroImage from '../components/IntroImage';
import Section from '../components/Section';

const About = () => {
  return (
    <Box pt={'4rem'}>
      <Section>
        <IntroImage thumbnail="colombo.png">
          <Section>
            <Heading>About Me</Heading>
          </Section>
        </IntroImage>
      </Section>
    </Box>
  );
};

export default About;
