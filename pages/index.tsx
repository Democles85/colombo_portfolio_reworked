import { Box, Container, Divider, Heading, Link, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useParallax } from 'react-scroll-parallax';
import Section from '../components/Section';
import { Button } from '../components/Button';
import data from '../util/modalities.json';
import styles from '../styles/Home.module.css';
import Layout from '../components/layouts/title';
import { getWindowSize } from '../lib/getWindowSize';
import { bookQuotes } from '../util/book-quotes';
import { QuoteSlider } from '../components/ui/quote-slider';
import { homeData } from '../util/home-data';

const Home: NextPage = () => {
  // const { ref } = useParallax<HTMLDivElement>({
  //   speed: 30,
  // });

  const windowWidth = getWindowSize().width;

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add(styles.show);
        else entry.target.classList.remove(styles.show);
      });
    });

    const hiddenElements = document.querySelectorAll(`.${styles.hidden}`);
    hiddenElements.forEach(element => {
      observer.observe(element);
    });
  });

  const modalities = data.$modalities;

  const height = getWindowSize().height;

  return (
    <Layout title={'Home'}>
      <Box pt={'4rem'}>
        <Section>
          <Box
            background={`url(/works/home_thumbnail.jpg)`}
            backgroundSize={'cover'}
            backgroundPosition={'center'}
            backgroundRepeat={'no-repeat'}
            position={'relative'}
          >
            <Box
              height={{
                base: `calc(${height}px - 4rem)`,
                md: 'calc(100vh - 4rem)',
              }}
              className="relative"
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              flexDir={'column'}
            >
              <Section delay={0.5}>
                <Heading
                  color={'#fff'}
                  textAlign={'center'}
                  letterSpacing={'narrow'}
                  width={'full'}
                  paddingX={'3rem'}
                  maxWidth={'container.lg'}
                  fontSize={{ base: '1.5rem', md: '2rem' }}
                  textShadow={'0 4px 4px rgba(0, 0, 0, 0.25)'}
                >
                  ACCEPT THE WHOLE UNIVERSE
                </Heading>
              </Section>
            </Box>
            <Box
              className={styles['scroll-element']}
              position={'absolute'}
              bottom={'0'}
              left={'50%'}
              transform={'translateX(-50%)'}
              mb={'2rem'}
            />
          </Box>
        </Section>

        <Container
          maxW={'container.lg'}
          textAlign={'justify'}
          fontSize={'1.15rem'}
        >
          <Box
            // ref={ref}
            display={'flex'}
            flexDir={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            minH={'100vh'}
            paddingTop={'4rem'}
          >
            <Box
              textStyle="h1"
              borderRadius="lg"
              p={5}
              background="rgba(245,166,35,0.25)"
              boxShadow="0 8px 32px 0 rgba(245,166,35, 0.15)"
              border="1px solid rgba(255,255,255, 0.18)"
              maxW="container.md"
              marginBottom={'1rem'}
            >
              <Text
                fontWeight={'medium'}
                fontSize={[18, null, 20]}
                letterSpacing="tight"
              >
                ”This entire journey is about expanding our consciousness. It's
                a vast ocean of energy in which we must continuously immerse
                ourselves to understand who we truly are, because along this
                path, we will constantly evolve and redefine who we are.”
              </Text>
            </Box>
            <Box py={'1rem'}>
              <Heading
                as={'h2'}
                size={'xl'}
                fontSize={{ base: '1.75rem', md: '2rem', lg: '2.5rem' }}
              >
                What is {windowWidth < 768 && <br />}
                <span className={styles['text-gradient']}>
                  Resonate with Yourself?
                </span>
              </Heading>
            </Box>
            <Box
              py={'2rem'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              flexDir={'column'}
            >
              {homeData.map(item => (
                <Box
                  key={item.id}
                  position={'relative'}
                  display={'flex'}
                  borderLeft={'2px rgba(200, 200, 200, 0.2) solid'}
                >
                  <Box mb={10} ml={4}>
                    <Box
                      position={'absolute'}
                      w={2}
                      h={2}
                      bg={'#FFAF36'}
                      borderRadius={'full'}
                      mt={'1.15rem'}
                      left={'-0.3rem'}
                    />
                  </Box>
                  <Text py={'0.5rem'} fontSize={{ base: '1rem', md: '1.2rem' }}>
                    {item.paragraph}
                  </Text>
                </Box>
              ))}

              <Box className="self-start pt-4">
                <Text fontSize={{ base: '1rem', md: '1.2rem' }} pt={'1rem'}>
                  With lots of love,
                </Text>
                <Text fontSize={{ base: '1rem', md: '1.2rem' }}>
                  <span
                    style={{
                      color: 'rgba(250, 175, 58, 1)',
                      fontWeight: 'bold',
                    }}
                  >
                    - Colombo
                  </span>
                </Text>
              </Box>

              <Box className="border-b-2 border-[rgba(200, 200, 200, 0.2)] w-full pt-16" />
              <Heading
                as={'h2'}
                fontSize={'1.25rem'}
                pt={'4rem'}
                alignSelf={'flex-start'}
              >
                "Explore the Essence" - Uncover handpicked excerpts that reflect
                the heart of my book's message:
              </Heading>

              <QuoteSlider bookQuotes={bookQuotes} />

              {/* <Box pt={'3rem'}>
                <Paragraph>
                  The{' '}
                  <span
                    style={{
                      textDecorationColor: 'rgba(250, 175, 58, 1)',
                      color: 'rgba(250, 175, 58, 1)',
                      textUnderlineOffset: '0.2rem',
                      fontWeight: 'bold',
                    }}
                  >
                    modalities
                  </span>{' '}
                  of reaching the state of resonating with yourself are:{' '}
                </Paragraph>

                <Box py={'1rem'}>
                  {modalities.map((modality, index) => (
                    <Box
                      key={index}
                      className={styles.hidden}
                      display={'flex'}
                      alignItems={'center'}
                      justifyContent={'flex-start'}
                      pl={'1rem'}
                    >
                      <List>
                        <ListItem
                          fontSize={{ base: '1rem', md: '1.2rem' }}
                          textIndent={'1rem'}
                        >
                          <ListIcon
                            as={VscCircleFilled}
                            color={'rgba(250, 175, 58, 1)'}
                          />
                          {modality.name}
                        </ListItem>
                      </List>
                    </Box>
                  ))}
                </Box>
              </Box> */}

              <Box py={'2rem'}>
                <Link href={'/about'} className="no-underline">
                  <Button label="Connect With Me" />
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default Home;
