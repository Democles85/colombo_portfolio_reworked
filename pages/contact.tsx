import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import React, { useMemo } from 'react';
import countryList from 'react-select-country-list';
import Header from '../components/Header';
import Layout from '../components/layouts/title';
import Section from '../components/Section';

const Contact = () => {
  const countries = useMemo(() => countryList().getData(), []);

  return (
    <Layout title={'Contact Me'}>
      <Box pt={'4rem'}>
        <Section>
          <Header thumbnail={'works/contact_thumbnail.jpg'}>
            <Section delay={0.5}>
              <Text
                fontSize={{ base: '2rem', md: '3rem', lg: '4rem' }}
                color={'white'}
                fontWeight={'bold'}
                textAlign={'center'}
              >
                Contact Me
              </Text>
            </Section>
          </Header>
        </Section>

        <Container
          maxW={{
            base: 'container.sm',
            md: 'container.md',
            lg: 'container.lg',
          }}
          py={'4rem'}
        >
          <Section>
            <form>
              <FormControl>
                <Box
                  display={'flex'}
                  flexDir={{ base: 'column', md: 'row', lg: 'row' }}
                  w={'100%'}
                >
                  <Box w={'inherit'} px={5} py={{ base: 2, md: 3, lg: 3 }}>
                    <FormLabel htmlFor={'firstName'} fontSize={'1.25rem'}>
                      Name: <span style={{ color: 'red' }}>*</span>
                    </FormLabel>
                    <Input
                      borderColor={useColorModeValue(
                        'gray.700',
                        'whiteAlpha.500'
                      )}
                      _hover={{ borderColor: '#FFAF36' }}
                      focusBorderColor={'#FFAF36'}
                      placeholder={'Sound'}
                      // value={firstName}
                      // onChange={e => setFirstName(e.target.value)}
                      // isInvalid={errors['firstName'] || errors['longFirstName']}
                    />
                    {/* {errors['firstName'] ? (
                  <FormHelperText color={'rgba(255, 255, 255, 0.5)'}>
                    Ju lutem shkruani emrin tuaj.
                    </FormHelperText>
                ) : errors['longFirstName'] ? (
                  <FormHelperText color={'rgba(255, 255, 255, 0.5)'}>
                  Emri juaj nuk mund të jetë më i gjatë se 20 karaktere.
                  </FormHelperText>
                ) : null} */}
                  </Box>
                  <Box w={'inherit'} px={5} py={{ base: 2, md: 3, lg: 3 }}>
                    <FormLabel htmlFor={'lastName'} fontSize={'1.25rem'}>
                      Surname: <span style={{ color: 'red' }}>*</span>
                    </FormLabel>
                    <Input
                      borderColor={useColorModeValue(
                        'gray.700',
                        'whiteAlpha.500'
                      )}
                      _hover={{ borderColor: '#FFAF36' }}
                      focusBorderColor={'#FFAF36'}
                      placeholder={'Me'}
                      // value={lastName}
                      // onChange={e => setLastName(e.target.value)}
                      // isInvalid={errors['lastName'] || errors['longLastName']}
                    />
                    {/* {errors['lastName'] ? (
                  <FormHelperText color={'rgba(255, 255, 255, 0.5)'}>
                    Ju lutem shkruani mbiemrin tuaj.
                    </FormHelperText>
                ) : errors['longLastName'] ? (
                  <FormHelperText color={'rgba(255, 255, 255, 0.5)'}>
                  Mbiemri juaj nuk mund të jetë më i gjatë se 20 karaktere.
                  </FormHelperText>
                ) : null} */}
                  </Box>
                </Box>
                <Box w={'100%'} display={'flex'} flexDir={'column'}>
                  <Box w={'inherit'} px={5} py={{ base: 2, md: 3 }}>
                    <FormLabel htmlFor={'subject'} fontSize={'1.25rem'}>
                      Subject: <span style={{ color: 'red' }}>*</span>
                    </FormLabel>
                    <Input
                      borderColor={useColorModeValue(
                        'gray.700',
                        'whiteAlpha.500'
                      )}
                      _hover={{ borderColor: '#FFAF36' }}
                      focusBorderColor={'#FFAF36'}
                      placeholder={'Subject you want to talk about'}
                      // value={subject}
                      // onChange={e => setSubject(e.target.value)}
                      // isInvalid={errors['subject']}
                    />
                    {/* {errors['subject'] && (
                    <FormHelperText color={'rgba(255, 255, 255, 0.5)'}>
                    Please enter a subject.
                    </FormHelperText>
                    )}
                  */}
                  </Box>

                  <Box w={'inherit'} px={5} py={{ base: 2, md: 3 }}>
                    <FormLabel htmlFor={'email'} fontSize={'1.25rem'}>
                      Email: <span style={{ color: 'red' }}>*</span>
                    </FormLabel>
                    <Input
                      borderColor={useColorModeValue(
                        'gray.700',
                        'whiteAlpha.500'
                      )}
                      _hover={{ borderColor: '#FFAF36' }}
                      focusBorderColor={'#FFAF36'}
                      placeholder={'johndoe@gmail.com'}
                      // value={email}
                      // onChange={e => setEmail(e.target.value)}
                      // isInvalid={errors['email']}
                    />
                    {/* {errors['email'] && (
                  <FormHelperText color={'rgba(255, 255, 255, 0.5)'}>
                  Please enter your email.
                  </FormHelperText>
                  )}
                  {errors['correctEmail'] && (
                    <FormHelperText color={'rgba(255, 255, 255, 0.5)'}>
                    Please enter a valid email.
                    </FormHelperText>
                  )} */}
                  </Box>

                  <Box w={'inherit'} px={5} py={{ base: 2, md: 3 }}>
                    <FormLabel htmlFor="country">
                      Country <span style={{ color: 'red' }}>*</span>
                    </FormLabel>
                    <Select
                      options={countries}
                      // isInvalid={errors['country']}
                      focusBorderColor={useColorModeValue('#fcb03b', '#fcb03b')}
                      id={'country'}
                      placeholder={'Country'}
                      selectedOptionColor={'orange'}
                      // value={country}
                      // onChange={countryHandler}
                      chakraStyles={{
                        control: (prev, { isFocused }) => ({
                          ...prev,
                          borderColor: isFocused
                            ? '#FFAF3A'
                            : useColorModeValue('gray.700', 'whiteAlpha.500'),
                          ':hover': {
                            borderColor: '#FFAF3A',
                          },
                        }),
                        dropdownIndicator: (
                          prev,
                          { selectProps: { menuIsOpen } }
                        ) => ({
                          ...prev,
                          backgroundColor: useColorModeValue(
                            'whiteAlpha.800',
                            'rgb(55, 55, 55)'
                          ),
                          '> svg': {
                            transitionDuration: 'normal',
                            transform: `rotate(${menuIsOpen ? 180 : 0}deg)`,
                          },
                        }),
                        option: (prev, { isFocused, isSelected }) => ({
                          ...prev,
                          backgroundColor: isFocused
                            ? '#FFAF3A'
                            : isSelected
                            ? '#FFAF3A'
                            : useColorModeValue(
                                'whiteAlpha.800',
                                'rgba(0,0,0,0.8)'
                              ),
                          color: isFocused
                            ? useColorModeValue('#202023', '#FFF')
                            : undefined,
                          ':active': {
                            backgroundColor: '#FFAF3A',
                          },
                        }),
                        menu: prev => ({
                          ...prev,
                          backgroundColor: useColorModeValue(
                            'whiteAlpha.800',
                            'rgba(0,0,0,0.8)'
                          ),
                          borderRadius: 'lg',
                          border: '1px solid #FFAF3A',
                          boxShadow: 'none',
                          outline: 'none',
                        }),
                        menuList: prev => ({
                          ...prev,
                          padding: '0',
                          backgroundColor: useColorModeValue(
                            'whiteAlpha.800',
                            'rgba(0,0,0,0.8)'
                          ),
                        }),
                      }}
                    />
                    {/* {errors?.country && (
                      <FormHelperText color={errorColor}>
                        Please select a country.
                      </FormHelperText>
                    )} */}
                  </Box>

                  <Box w={'inherit'} px={5} py={{ base: 2, md: 3 }}>
                    <FormLabel htmlFor="gender">
                      Gender <span style={{ color: 'red' }}>*</span>
                    </FormLabel>
                    <Select
                      options={countries}
                      // isInvalid={errors['gender']}
                      focusBorderColor={useColorModeValue('#fcb03b', '#fcb03b')}
                      id={'gender'}
                      placeholder={'Gender'}
                      selectedOptionColor={'orange'}
                      // value={gender}
                      // onChange={genderHandler}
                      chakraStyles={{
                        control: (prev, { isFocused }) => ({
                          ...prev,
                          borderColor: isFocused
                            ? '#FFAF3A'
                            : useColorModeValue('gray.700', 'whiteAlpha.500'),
                          ':hover': {
                            borderColor: '#FFAF3A',
                          },
                        }),
                        dropdownIndicator: (
                          prev,
                          { selectProps: { menuIsOpen } }
                        ) => ({
                          ...prev,
                          backgroundColor: useColorModeValue(
                            'whiteAlpha.800',
                            'rgb(55, 55, 55)'
                          ),
                          '> svg': {
                            transitionDuration: 'normal',
                            transform: `rotate(${menuIsOpen ? 180 : 0}deg)`,
                          },
                        }),
                        option: (prev, { isFocused, isSelected }) => ({
                          ...prev,
                          backgroundColor: isFocused
                            ? '#FFAF3A'
                            : isSelected
                            ? '#FFAF3A'
                            : useColorModeValue(
                                'whiteAlpha.800',
                                'rgba(0,0,0,0.8)'
                              ),
                          color: isFocused
                            ? useColorModeValue('#202023', '#FFF')
                            : undefined,
                          ':active': {
                            backgroundColor: '#FFAF3A',
                          },
                        }),
                        menu: prev => ({
                          ...prev,
                          backgroundColor: useColorModeValue(
                            'whiteAlpha.800',
                            'rgba(0,0,0,0.8)'
                          ),
                          borderRadius: 'lg',
                          border: '1px solid #FFAF3A',
                          boxShadow: 'none',
                          outline: 'none',
                        }),
                        menuList: prev => ({
                          ...prev,
                          padding: '0',
                          backgroundColor: useColorModeValue(
                            'whiteAlpha.800',
                            'rgba(0,0,0,0.8)'
                          ),
                        }),
                      }}
                    />
                    {/* {errors?.country && (
                      <FormHelperText color={errorColor}>
                        Please select a country.
                      </FormHelperText>
                    )} */}
                  </Box>

                  <Box w={'inherit'} px={5} py={{ base: 2, md: 3 }}>
                    <FormLabel htmlFor="message">
                      Message <span style={{ color: 'red' }}>*</span>
                    </FormLabel>
                    <Textarea
                      id={'message'}
                      placeholder={'Message'}
                      // value={message}
                      // onChange={messageHandler}
                      // isInvalid={errors['message']}
                      focusBorderColor={useColorModeValue('#fcb03b', '#fcb03b')}
                      _hover={{
                        borderColor: '#FFAF3A',
                      }}
                      _active={{
                        borderColor: '#FFAF3A',
                      }}
                    />
                    {/* {errors?.message && (
                      <FormHelperText color={errorColor}>
                        Please enter a message.
                      </FormHelperText>
                    )} */}
                  </Box>

                  <Box
                    w={'inherit'}
                    px={5}
                    pt={'1.5rem'}
                    display={'flex'}
                    justifyContent={'center'}
                  >
                    <Button
                      bg={'#ffc46c'}
                      color={'#202023'}
                      _hover={{
                        bg: '#ff9900',
                        color: '#202023',
                      }}
                      _active={{
                        bg: '#FFAF3A',
                        color: '#202023',
                      }}
                      w={{ base: '60%', md: '50%', lg: '40%' }}
                      type={'submit'}
                    >
                      Submit
                    </Button>
                  </Box>
                </Box>
              </FormControl>
            </form>
          </Section>
        </Container>
      </Box>
    </Layout>
  );
};

export default Contact;
