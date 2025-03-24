import { Box, Container, Heading, ListItem, OrderedList, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import Layout from '../components/layouts/title';
import Section from '../components/Section';
import Image from 'next/image';
import { data } from '../util/online-healing';

const languageTabs = {
  ENGLISH: { label: '🇬🇧 EN' },
  ALBANIAN: { label: '🇦🇱 AL' },
};

const OnlineHealing = () => {
  return (
    <Layout title="Online Healing">
      <Box className="pt-16">
        <Section>
          <Container maxW={{ base: 'container.sm', md: 'container.md', lg: '80%' }} className="flex flex-col justify-center items-center">
            <Box className="flex flex-col place-items-center text-center py-16">
              <Heading as={'h1'}>Online Healing & Spiritual Support Services</Heading>
              <Image src={'/colombo.jpg'} alt="Colombo" width={320} height={240} className="rounded-lg mt-8" />
            </Box>

            <Tabs position="relative" variant="unstyled" align="end">
              <TabList>
                {Object.entries(languageTabs).map(([key, { label }]) => (
                  <Tab key={key}>{label}</Tab>
                ))}
              </TabList>
              <TabIndicator mt="-1.5px" height="2px" bg="orange.300" borderRadius="1px" />

              <TabPanels>
                {Object.entries(data).map(([key, value]) => (
                  <TabPanel key={key} className="max-w-[640px] mx-auto">
                    {value.intro.map((tab, index) => (
                      <Box key={index} className="relative flex border-l-2 border-gray-300/20">
                        <Box className="mb-10 ml-4">
                          <Box className="absolute w-2 h-2 bg-[#FFAF46] rounded-full mt-[1.15rem] left-[-0.3rem]" />
                        </Box>
                        <Box fontSize={{ base: '1rem', md: '1.2rem' }} className="py-2">
                          {tab.paragraph}
                        </Box>
                      </Box>
                    ))}

                    {Object.entries(value.services).map(([serviceKey, service]) => (
                      <Box key={serviceKey} mt={8}>
                        <Heading as="h3" fontSize="xl" color="orange.300" mb={4}>
                          {service.title}
                        </Heading>
                        <OrderedList spacing={3}>
                          {service.content.map((item, index) => (
                            <ListItem key={index}>
                              <Box className="font-bold mb-2">{item.title}</Box>
                              <Box>{item.description}</Box>
                            </ListItem>
                          ))}
                        </OrderedList>
                      </Box>
                    ))}
                    <Box mt={8}>{value.footer.content}</Box>
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>
          </Container>
        </Section>
      </Box>
    </Layout>
  );
};

export default OnlineHealing;
