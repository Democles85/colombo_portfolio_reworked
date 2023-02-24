import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import IntroImage from '../components/IntroImage';
import Section from '../components/Section';

const About = () => {
  return (
    <Box pt={'4rem'}>
      <Section>
        <IntroImage thumbnail="colombo.png">
          <Section>
            <Heading color={'#fff'}>
              Hello, my name is{' '}
              <span
                style={{
                  color: '#FFAF36',
                }}
              >
                Colombo
              </span>
              .
            </Heading>
          </Section>
        </IntroImage>
      </Section>
      <Section>
        <Container
          maxW={'container.lg'}
          textAlign={'justify'}
          fontSize={'1.15rem'}
        >
          <Box padding={'3rem'}>
            <Box
              width={'full'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Box
                // width={{ base: '80%', md: '50%' }}
                w={'fit-content'}
                borderRadius={'lg'}
                mb={6}
                p={3}
                textAlign={'center'}
                fontStyle={'italic'}
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              >
                "It is a sea of consciousness to experience with an open heart
                and we must all take note of it."
              </Box>
            </Box>
            <Heading
              as={'h3'}
              variant={'section-title'}
              // fontFamily={"'Silkscreen', cursive"}
            >
              My Journey
            </Heading>
            <Box
              position={'relative'}
              display={'flex'}
              borderLeft={'2px gray solid'}
            >
              <Box mb={10} ml={4}>
                <Box
                  position={'absolute'}
                  w={2}
                  h={2}
                  bg={'#FFAF36'}
                  borderRadius={'full'}
                  mt={'0.55rem'}
                  left={'-0.3rem'}
                />
              </Box>
              <Text>
                In my path of healing, as a seeker of knowledge, I found nothing
                more sacred than the subconscious and spiritual touch of my
                body, full of divine love. I understood that healing comes
                through the body, as that is where all the history is written.
                The world is tired of healing philosophies, so it needs
                something alive that rocks us, makes us sensitive, and gives us
                life. Ever since I was a child, I have been quite intuitive.
                This was further amplified when I started determining people’s
                characters without knowing anything about them. Something
                spiritual burned inside me and I spent a large amount of time
                believing I should chase this gift within me. The scent of a
                fresh and spiritual person has always been alive within my eyes.
                After a very colorful life, my affinity for fine energies was
                enriched, as I had managed to connect with my higher self. Not
                long after, living like that became the new normal, and I
                started to understand myself, reality, and everything
                surrounding me. The deeper I went with my gift, the more
                miracles happened. In my spiritual development, this feeling
                deepened, making me able to sense even finer energies, such as
                hidden traumas, understanding them on a spiritual level. I
                created portfolios of a kind, which I dubbed “energy passports”
                for everyone I met; who that person was, what their divine gifts
                were, and what aspects of themselves should they work on. In
                2018, I spent 4 months on Iceland, where I tapped into high
                divine energies and I was no longer the same. I dove into a sea
                of consciousness, where my heart opened and made me more
                sensitive to this reality. 4 months later, I moved to Spain and
                reflected on what happened to me. After a long series of
                meditations and spiritual journeys, I started experimenting on
                energy works. I then moved to Italy, where I had an intimate
                experience with the universe, and from then on, I have had many
                mystical experiences. What is all of this about my heart, you
                may ask. It is nothing more than me chasing it and letting the
                universe do its work. After everything that happened to me, I
                felt and understood what it means to understand and work on
                energy. I understood that on all of the Bodywork sessions,
                everyone is prone to transformation, they just need a
                self-consciousness to support themselves/ In February of 2020, I
                started supporting people professionally. To all who want to
                work on yourself through me, this is transformable work. After
                many experiences and gifts from the universe, I am equipped to
                support people on every level and dimension, such as various
                psychic needs, blocks, traumas, etc., as well as support higher
                energies that want to awaken. Every session is lively, deep, and
                full of energy. The definition here is that there is no
                definition; you just experience that which the universe is
                allowing to transform. It is not you, rather the universe
                flowing through you.
              </Text>
            </Box>
          </Box>
        </Container>
      </Section>
    </Box>
  );
};

export default About;
