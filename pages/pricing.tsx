import {
  Box,
  Container,
  Divider,
  Heading,
  List,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

import Link from 'next/link';

// Components
import Layout from '../components/layouts/title';
import Section from '../components/Section';
import { Button } from '../components/Button';

// Styles
import styles from '../styles/Packages.module.css';
import { getWindowSize } from '../lib/getWindowSize';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { MdArrowRightAlt } from 'react-icons/md';

const Pricing = () => {
  const height = getWindowSize().height;

  return (
    <Layout title={'Pricing'}>
      <Box pt={'4rem'}>
        <Section>
          <Box
            background={`url(/works/pricing_thumbnail.jpg)`}
            backgroundSize={'cover'}
            backgroundPosition={'center'}
            backgroundRepeat={'no-repeat'}
            position={'relative'}
          >
            <Box
              minHeight={{
                base: `calc(${height}px - 4rem)`,
                md: 'calc(100vh - 4rem)',
              }}
              className={'intro-image'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              flexDir={'column'}
              backdropFilter={'blur(5px)'}
            >
              <Section delay={0.5}>
                <Heading
                  maxWidth={'container.lg'}
                  fontSize={{ base: '2rem', md: '3rem', lg: '4rem' }}
                  textShadow={'0 6px 2px rgba(0, 0, 0, 0.25)'}
                  className="text-center tracking-tight w-full px-12"
                >
                  BOOK <span className="text-[#ffbd5b]">YOUR</span> SESSION
                </Heading>
              </Section>
            </Box>
            <Box
              className={'scroll-element'}
              position={'absolute'}
              bottom={'0'}
              left={'50%'}
              transform={'translateX(-50%)'}
              mb={'2rem'}
            />
          </Box>
        </Section>

        <Section>
          <Container maxW={'container.2xl'}>
            <Box className="flex flex-col items-center justify-center py-12 md:py-24">
              <Box maxW={'862px'}>
                <Text className="text-justify indent-[1em] text-base md:text-lg lg:text-xl">
                  <span className="italic">Resonate with Yourself</span> offers{' '}
                  <span className="font-bold">single</span> sessions and
                  thoughtfully crafted packages designed to support your journey
                  of healing and transformation.
                </Text>

                <Divider className="my-8" />

                <Heading as="h2" className="text-center !text-2xl md:!text-3xl">
                  <span className="text-[#ffbd5b]">ONE-TIME</span> Experiences
                </Heading>

                <Text className="text-justify pt-4 indent-[1em] text-base md:text-lg lg:text-xl">
                  For those seeking a single session, the following options are
                  available:
                </Text>

                <UnorderedList className="list-disc pl-8 pt-4">
                  <ListItem>
                    <Text className="text-base md:text-lg lg:text-xl">
                      <span className="font-bold">1-Hour Experience</span> -
                      &euro;60
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text className="text-base md:text-lg lg:text-xl">
                      <span className="font-bold">1.5-Hour Experience</span> -
                      &euro;80
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text className="text-base md:text-lg lg:text-xl">
                      <span className="font-bold">1-Hour of Sound Healing</span>{' '}
                      - &euro;100
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text className="text-base md:text-lg lg:text-xl">
                      <span className="font-bold">
                        2-Hour Holistic Experience
                      </span>{' '}
                      - &euro;130
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text className="text-base md:text-lg lg:text-xl">
                      <span className="font-bold">
                        Advanced Holistic Experience (2.5 - 3.5 Hours){' '}
                      </span>{' '}
                      - &euro;200
                    </Text>
                  </ListItem>
                </UnorderedList>

                <Text className="text-justify pt-4 text-md italic opacity-65">
                  (Each experience is authentically and intuitively tailored by
                  me to your unique energy.)
                </Text>

                <Divider className="my-8" />

                <Heading as="h2" className="text-center !text-2xl md:!text-3xl">
                  <span className="text-[#ffbd5b]">PACKAGES</span> for Advanced
                  Holistic Experience (2.5 - 3.5 Hours each)
                </Heading>

                <Text className="text-justify pt-4 text-md italic opacity-65">
                  (I offer flexibility with payment rhythms, as the value of
                  your commitment and the focus of our work hold greater
                  importance than monetary timing. All below packages are
                  payable in alignment with your pace and capacity.)
                </Text>

                <Box className="py-2 my-16 border-l border-gray-100 pl-4">
                  <Text className="text-lg">
                    <span className="text-[#ffbd5b] font-bold inline-flex items-center">
                      <MdArrowRightAlt />
                      For individuals
                    </span>{' '}
                    committed to deep, ongoing transformation, I offer packages
                    that bring greater alignment and resonance to your life:
                  </Text>

                  <UnorderedList className="list-disc pl-8 pt-4">
                    <ListItem>
                      <Text className="text-base md:text-lg lg:text-xl">
                        <span className="font-bold">
                          Three (3) Advanced Holistic Experiences{' '}
                        </span>{' '}
                        - &euro;500
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text className="text-base md:text-lg lg:text-xl">
                        <span className="font-bold">
                          Five (5) Advanced Holistic Experiences{' '}
                        </span>{' '}
                        - &euro;800
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text className="text-base md:text-lg lg:text-xl">
                        <span className="font-bold">
                          Ten (10) Advanced Holistic Experiences{' '}
                        </span>{' '}
                        - &euro;1500
                      </Text>
                    </ListItem>
                  </UnorderedList>

                  <Text className="text-md italic pt-4 opacity-65">
                    (Ideal for those ready to work deeply with their energy and
                    embark on a soulful evolution.)
                  </Text>
                </Box>

                <Box className="py-2 my-16 border-l border-gray-100 pl-4">
                  <Text className="text-lg">
                    <span className="text-[#ffbd5b] font-bold inline-flex items-center">
                      <MdArrowRightAlt />
                      For couples{' '}
                    </span>{' '}
                    <span className="text-white font-bold">
                      in Shared Journeys{' '}
                    </span>
                    , deepening their connection and exploring the profound
                    resonance of shared healing with their partners:
                  </Text>

                  <UnorderedList className="list-disc pl-8 pt-4">
                    <ListItem>
                      <Text className="text-base md:text-lg lg:text-xl">
                        <span className="font-bold">
                          Two (2) Advanced Holistic Experiences per Partner
                        </span>{' '}
                        (4 sessions in total) - &euro;600
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text className="text-base md:text-lg lg:text-xl">
                        <span className="font-bold">
                          One (1) Advanced Holistic Experiences per Partner +
                          One (1) private couple sound healing session
                        </span>{' '}
                        - &euro;500
                      </Text>
                    </ListItem>
                  </UnorderedList>

                  <Text className="text-md italic pt-4 opacity-65">
                    (Transformative experiences that include energy balancing,
                    intuitive connection work, and shared grounding in
                    relationships.)
                  </Text>
                </Box>

                <Box className="py-2 my-16 border-l border-gray-100 pl-4">
                  <Text className="text-lg">
                    <span className="text-[#ffbd5b] font-bold inline-flex items-center">
                      <MdArrowRightAlt />
                      Dimensional Surgery{' '}
                    </span>{' '}
                  </Text>

                  <Text className="text-base md:text-lg lg:text-xl indent-[1em] pb-4">
                    Dimensional surgery directly addresses individuals who are
                    unable to process various psychological states, are
                    experiencing{' '}
                    <span className="font-bold">mental blockages</span> or
                    implants, or have gone through conditions such as{' '}
                    <span className="font-bold">schizophrenia</span> or{' '}
                    <span className="font-bold">depression</span> or are
                    currently navigating through them.
                  </Text>

                  <Text className="text-base md:text-lg lg:text-xl indent-[1em] pb-4">
                    It is also designed for those who have undergone{' '}
                    <span className="font-bold">psychedelic</span>
                    experiences and are struggling to process the new{' '}
                    <span className="font-bold">dimension</span>
                    they have entered or feel stuck in dimensions where they
                    cannot find a way forward.
                  </Text>

                  <Text className="text-base md:text-lg lg:text-xl indent-[1em] pb-4">
                    What I do first is an assessment of your dimension—to
                    understand where you are, what has happened to you, and
                    whether this involves expansion or a lack of processing.
                  </Text>

                  <Text className="text-base md:text-lg lg:text-xl indent-[1em] pb-4">
                    As a psychic surgeon, I integrate my own energetic
                    dimensions to unblock or expand your psyche. Based on the
                    depth and nature of the process, we proceed through sessions
                    that work directly on your body and energetic field, as the
                    majority of the work takes place on the physical body.
                  </Text>

                  <Text className="text-base md:text-lg lg:text-xl indent-[1em] pb-4">
                    The integration of psychic surgery, energetic field surgery,
                    and advanced sound healing and bodywork creates an alchemy
                    to assist you in unblocking, cleansing, and balancing your
                    energy.
                  </Text>

                  <Text className="text-base md:text-lg lg:text-xl indent-[1em]">
                    This is a session for those courageous souls who are
                    exploring the depths of their spirit. Monetary value is less
                    important to me than your state, so we will put a fee
                    together based on your needs and financial capabilities.
                  </Text>
                </Box>

                <Text className="text-justify pt-4 indent-[1em] text-base md:text-lg lg:text-xl">
                  I offer advanced sessions for those who seek a deep experience
                  and honor that money holds less importance. My fixed rates are
                  as above though donations are welcomed as a sign of gratitude
                  and honoring. If finances are a concern, please reach out so
                  we can explore a suitable solution. I offer flexibility with
                  payment rhythms, as the value of your commitment and the focus
                  of our work hold greater importance than monetary timing. All
                  packages are payable in alignment with your pace and capacity.
                </Text>

                <Text className="text-justify pt-4 indent-[1em] text-base md:text-lg lg:text-xl">
                  Due to the focused nature of this work, I offer only two
                  sessions per day. For this reason, it is strongly recommended
                  to secure your session and avoid last-minute cancellations.
                </Text>

                <Text className="text-justify italic pt-4 text-base md:text-lg lg:text-xl">
                  Please only contact if you are really serious to work with me
                  and can commit to it.
                </Text>

                <Text
                  textAlign={'justify'}
                  fontSize={{ base: '1rem', md: '1.2rem' }}
                  pt={'1rem'}
                >
                  With lots of love,
                </Text>
                <Text
                  textAlign={'justify'}
                  fontSize={{ base: '1rem', md: '1.2rem' }}
                >
                  <span
                    style={{
                      color: 'rgba(250, 175, 58, 1)',
                      fontWeight: 'bold',
                    }}
                  >
                    - Colombo
                  </span>
                </Text>

                <Divider className="my-8" />

                <Text className="font-bold text-center text-lg">
                  How to Begin:
                </Text>

                <OrderedList className="pt-4">
                  <ListItem>
                    <Text className="text-base md:text-lg lg:text-xl">
                      Reflect on the offering that resonates with you most.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text className="text-base md:text-lg lg:text-xl">
                      Contact me at{' '}
                      <Link
                        href="tel:+34624468501"
                        className="font-bold underline text-[#ffbd5b]"
                      >
                        +34 624 468 501
                      </Link>{' '}
                      or email me at{' '}
                      <Link
                        href="mailto:resonatewithyourself@gmail.com"
                        className="font-bold underline text-[#ffbd5b]"
                      >
                        resonatewithyourself@gmail.com
                      </Link>
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text className="text-base md:text-lg lg:text-xl">
                      Secure your experience and step into this journey with
                      love and consciousness.
                    </Text>
                  </ListItem>
                </OrderedList>
              </Box>
            </Box>

            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              py={'3rem'}
            >
              <Link href={'/contact'} className="py-2 mb-24 md:mb-24">
                <Button label={'Contact Me'} />
              </Link>
            </Box>
          </Container>
        </Section>
      </Box>
    </Layout>
  );
};

export default Pricing;
