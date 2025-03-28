import {
  AspectRatio,
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  List,
  ListItem,
  Text,
  Textarea,
  useColorModeValue,
  Icon,
  Checkbox,
  Divider,
} from '@chakra-ui/react';
import axios from 'axios';
import { OptionBase, Select } from 'chakra-react-select';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { toast, Toaster } from 'react-hot-toast';

import { AiOutlineWhatsApp } from 'react-icons/ai';
import { MdMail } from 'react-icons/md';

// Country List
import countryList from 'react-select-country-list';

// Components
import Header from '../components/Header';
import Layout from '../components/layouts/title';
import Section from '../components/Section';

// Styles
import styles from '../styles/Contact.module.css';
import { useMediaQuery } from '../hooks/useMediaQuery';

// Interface
interface SelectOptions extends OptionBase {
  [x: string]: any;
  label: string;
  value: string;
}

const Contact = () => {
  const countries = useMemo(() => countryList().getData(), []);
  const genders = [
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
  ];

  const isMobile = useMediaQuery('(max-width: 767px)');

  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const phoneFormat = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

  const [firstName, setFirstName] = React.useState('');
  // const [lastName, setLastName] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [email, setEmail] = React.useState('');
  // const [phone, setPhone] = React.useState('');
  const [country, setCountry] = React.useState<SelectOptions>({
    value: '',
    label: '',
  });
  const [gender, setGender] = React.useState<SelectOptions>({
    value: '',
    label: '',
  });
  const [message, setMessage] = React.useState('');

  const [accept, setAccept] = React.useState(false);

  const [errors, setErrors] = React.useState({}) as any;
  const [buttonText, setButtonText] = React.useState('Book Your Session');

  const countryHandler = (value: any) => {
    setCountry(value);
  };

  const genderHandler = (value: any) => {
    setGender(value);
  };

  const validate = (): boolean => {
    let errors: any = {};
    let isValid = true;

    if (firstName.length <= 0) {
      isValid = false;
      errors['firstName'] = true;
    } else if (firstName.length >= 20) {
      isValid = false;
      errors['firstNameLength'] = true;
    }

    if (subject.length <= 0) {
      isValid = false;
      errors['subject'] = true;
    } else if (subject.length >= 70) {
      isValid = false;
      errors['subjectLength'] = true;
    }

    if (email.length <= 0) {
      isValid = false;
      errors['email'] = true;
    } else if (!email.match(emailFormat)) {
      isValid = false;
      errors['emailFormat'] = true;
    } else if (email.length >= 50) {
      isValid = false;
      errors['emailLength'] = true;
    }

    if (country.value.length <= 0) {
      isValid = false;
      errors['country'] = true;
    }

    if (gender.value.length <= 0) {
      isValid = false;
      errors['gender'] = true;
    }

    if (message.length <= 0) {
      isValid = false;
      errors['message'] = true;
    } else if (message.length >= 500) {
      isValid = false;
      errors['messageLength'] = true;
    }

    setErrors({ ...errors });

    return isValid;
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();

    let isValidForm = validate();

    if (isValidForm) {
      setButtonText('Booking Your Session...');

      const data = {
        firstName,
        subject,
        email,
        country: country.label,
        message,
      };

      const res = await axios.post('/api/contact', data);

      const { error } = await res.data;

      if (error) {
        toast.error(error);
        setButtonText('Book Your Session');

        return;
      }

      toast.success('Message Sent Successfully');
      setButtonText('Book Your Session');

      // Reset Form
      setFirstName('');
      setEmail('');
      setCountry({ value: '', label: '' });
      setGender({ value: '', label: '' });
      setMessage('');

      return;
    } else {
      toast.error('Please fill all the fields');
      setButtonText('Book Your Session');

      return;
    }
  };

  return (
    <Layout title={'Contact Me'}>
      <Box pt={'4rem'}>
        <Toaster position={'bottom-right'} reverseOrder={false} />
        <Section>
          <Header thumbnail={'works/contact_thumbnail.jpg'}>
            <Section delay={0.5}>
              <Text fontSize={{ base: '2rem', md: '3rem', lg: '4rem' }} color={'white'} fontWeight={'bold'} textAlign={'center'}>
                Contact <span className={styles['text-gradient']}>Me</span>
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
          <Text fontSize={{ base: '2rem', md: '3rem', lg: '4rem' }} fontWeight={'bold'} textAlign={'center'}>
            Book Your <span className={styles['text-gradient']}>Session</span>
          </Text>

          <Box py={'3rem'}>
            <Section delay={0.4}>
              <Box className="grid grid-cols-1 gap-y-4 md:place-items-center md:grid-cols-2 md:gap-y-0">
                <Box className="place-items-center justify-center">
                  <Heading as="h3" variant="section-title" className="md:text-center">
                    Contact Me Via Email:
                  </Heading>
                  <List>
                    <ListItem>
                      <Link href="mailto:resonatewithyourself@gmail.com" target="_blank">
                        <Button variant="outline" colorScheme="orange" leftIcon={<Icon as={MdMail} />}>
                          resonatewithyourself@gmail.com
                        </Button>
                      </Link>
                    </ListItem>
                  </List>
                </Box>

                {isMobile && <Divider orientation="horizontal" className="mt-4" />}

                <Box>
                  <Heading as="h3" variant="section-title" className="md:text-center">
                    Contact Me Via WhatsApp:
                  </Heading>
                  <List>
                    <ListItem className="flex md:place-items-center md:justify-center">
                      <Link href="https://wa.me/34624468501" target="_blank">
                        <Button variant="outline" colorScheme="orange" leftIcon={<Icon as={AiOutlineWhatsApp} />}>
                          +34 624 46 85 01
                        </Button>
                      </Link>
                    </ListItem>
                  </List>
                </Box>

                {isMobile && <Divider orientation="horizontal" className="mt-4" />}
              </Box>
            </Section>
          </Box>

          <Section>
            <Text className="italic pl-5">* or complete the form to get in touch automatically</Text>
            <form onSubmit={submitHandler}>
              <FormControl>
                <Box display={'flex'} flexDir={{ base: 'column', md: 'row', lg: 'row' }} w={'100%'}>
                  <Box w={'inherit'} px={5} py={{ base: 2, md: 3, lg: 3 }}>
                    <FormLabel htmlFor={'firstName'} fontSize={'1.25rem'}>
                      Name: <span style={{ color: 'red' }}>*</span>
                    </FormLabel>
                    <Input
                      borderColor={useColorModeValue('gray.700', 'whiteAlpha.500')}
                      _hover={{ borderColor: '#FFAF36' }}
                      focusBorderColor={'#FFAF36'}
                      placeholder={'Your Name'}
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      isInvalid={errors['firstName'] || errors['firstNameLength']}
                    />
                    {errors['firstName'] ? (
                      <FormHelperText color={useColorModeValue('rgba(0,0,0,0.5)', 'rgba(255, 255, 255, 0.5)')}>Please enter your name.</FormHelperText>
                    ) : errors['firstNameLength'] ? (
                      <FormHelperText color={useColorModeValue('rgba(0,0,0,0.5)', 'rgba(255, 255, 255, 0.5)')}>Your name is too long.</FormHelperText>
                    ) : null}
                  </Box>
                  <Box w={'inherit'} px={5} py={{ base: 2, md: 3 }}>
                    <FormLabel htmlFor={'subject'} fontSize={'1.25rem'}>
                      Subject: <span style={{ color: 'red' }}>*</span>
                    </FormLabel>
                    <Input
                      borderColor={useColorModeValue('gray.700', 'whiteAlpha.500')}
                      _hover={{ borderColor: '#FFAF36' }}
                      focusBorderColor={'#FFAF36'}
                      placeholder={'Subject you want to talk about'}
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                      isInvalid={errors['subject'] || errors['subjectLength']}
                    />
                    {errors['subject'] ? (
                      <FormHelperText color={useColorModeValue('rgba(0,0,0,0.5)', 'rgba(255, 255, 255, 0.5)')}>Please enter a subject.</FormHelperText>
                    ) : errors['subjectLength'] ? (
                      <FormHelperText color={useColorModeValue('rgba(0,0,0,0.5)', 'rgba(255, 255, 255, 0.5)')}>Your subject is too long.</FormHelperText>
                    ) : null}
                  </Box>
                </Box>
                <Box w={'100%'} display={'flex'} flexDir={'column'}>
                  <Box w={'inherit'} px={5} py={{ base: 2, md: 3 }}>
                    <FormLabel htmlFor={'email'} fontSize={'1.25rem'}>
                      Email: <span style={{ color: 'red' }}>*</span>
                    </FormLabel>
                    <Input
                      borderColor={useColorModeValue('gray.700', 'whiteAlpha.500')}
                      _hover={{ borderColor: '#FFAF36' }}
                      focusBorderColor={'#FFAF36'}
                      placeholder={'Your Email'}
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      isInvalid={errors['email'] || errors['emailFormat'] || errors['emailLength']}
                    />
                    {errors['email'] ? (
                      <FormHelperText color={useColorModeValue('rgba(0,0,0,0.5)', 'rgba(255, 255, 255, 0.5)')}>Please enter your email.</FormHelperText>
                    ) : errors['emailFormat'] ? (
                      <FormHelperText color={useColorModeValue('rgba(0,0,0,0.5)', 'rgba(255, 255, 255, 0.5)')}>Please enter a valid email.</FormHelperText>
                    ) : errors['emailLength'] ? (
                      <FormHelperText color={useColorModeValue('rgba(0,0,0,0.5)', 'rgba(255, 255, 255, 0.5)')}>Your email is too long.</FormHelperText>
                    ) : null}
                  </Box>

                  <Box w={'inherit'} px={5} py={{ base: 2, md: 3 }}>
                    <FormLabel htmlFor="country">
                      Nationality <span style={{ color: 'red' }}>*</span>
                    </FormLabel>
                    <Select
                      options={countries}
                      isInvalid={errors['country']}
                      focusBorderColor={useColorModeValue('#fcb03b', '#fcb03b')}
                      instanceId={'country'}
                      placeholder={'Select Your Nationality'}
                      isSearchable={true}
                      isClearable={true}
                      selectedOptionColorScheme={'orange'}
                      onChange={countryHandler}
                      chakraStyles={{
                        control: (prev, { isFocused }) => ({
                          ...prev,
                          borderColor: isFocused ? '#FFAF3A' : useColorModeValue('gray.700', 'whiteAlpha.500'),
                          ':hover': {
                            borderColor: '#FFAF3A',
                          },
                        }),
                        dropdownIndicator: (prev, { selectProps: { menuIsOpen } }) => ({
                          ...prev,
                          backgroundColor: useColorModeValue('whiteAlpha.800', 'rgb(55, 55, 55)'),
                          '> svg': {
                            transitionDuration: 'normal',
                            transform: `rotate(${menuIsOpen ? 180 : 0}deg)`,
                          },
                        }),
                        option: (prev, { isFocused, isSelected }) => ({
                          ...prev,
                          backgroundColor: isFocused ? '#FFAF3A' : isSelected ? '#FFAF3A' : useColorModeValue('whiteAlpha.800', 'rgba(0,0,0,0.8)'),
                          color: isFocused ? useColorModeValue('#202023', '#FFF') : undefined,
                          ':active': {
                            backgroundColor: '#FFAF3A',
                          },
                        }),
                        menu: prev => ({
                          ...prev,
                          backgroundColor: useColorModeValue('whiteAlpha.800', 'rgba(0,0,0,0.8)'),
                          borderRadius: 'lg',
                          border: '1px solid #FFAF3A',
                          boxShadow: 'none',
                          outline: 'none',
                        }),
                        menuList: prev => ({
                          ...prev,
                          padding: '0',
                          backgroundColor: useColorModeValue('whiteAlpha.800', 'rgba(0,0,0,0.8)'),
                        }),
                        placeholder: prev => ({
                          ...prev,
                          color: useColorModeValue('gray.400', 'whiteAlpha.700'),
                        }),
                      }}
                    />
                    {errors['country'] && <FormHelperText color={useColorModeValue('rgba(0,0,0,0.5)', 'rgba(255, 255, 255, 0.5)')}>Please select your country.</FormHelperText>}
                  </Box>

                  <Box w={'inherit'} px={5} py={{ base: 2, md: 3 }}>
                    <FormLabel htmlFor="gender">
                      Gender <span style={{ color: 'red' }}>*</span>
                    </FormLabel>
                    <Select
                      options={genders}
                      isInvalid={errors['gender']}
                      focusBorderColor={useColorModeValue('#fcb03b', '#fcb03b')}
                      instanceId={'gender'}
                      placeholder={'Select Your Gender'}
                      isSearchable={true}
                      isClearable={true}
                      selectedOptionColorScheme={'orange'}
                      onChange={genderHandler}
                      chakraStyles={{
                        control: (prev, { isFocused }) => ({
                          ...prev,
                          borderColor: isFocused ? '#FFAF3A' : useColorModeValue('gray.700', 'whiteAlpha.500'),
                          ':hover': {
                            borderColor: '#FFAF3A',
                          },
                        }),
                        dropdownIndicator: (prev, { selectProps: { menuIsOpen } }) => ({
                          ...prev,
                          backgroundColor: useColorModeValue('whiteAlpha.800', 'rgb(55, 55, 55)'),
                          '> svg': {
                            transitionDuration: 'normal',
                            transform: `rotate(${menuIsOpen ? 180 : 0}deg)`,
                          },
                        }),
                        option: (prev, { isFocused, isSelected }) => ({
                          ...prev,
                          backgroundColor: isFocused ? '#FFAF3A' : isSelected ? '#FFAF3A' : useColorModeValue('whiteAlpha.800', 'rgba(0,0,0,0.8)'),
                          color: isFocused ? useColorModeValue('#202023', '#FFF') : undefined,
                          ':active': {
                            backgroundColor: '#FFAF3A',
                          },
                        }),
                        menu: prev => ({
                          ...prev,
                          backgroundColor: useColorModeValue('whiteAlpha.800', 'rgba(0,0,0,0.8)'),
                          borderRadius: 'lg',
                          border: '1px solid #FFAF3A',
                          boxShadow: 'none',
                          outline: 'none',
                        }),
                        menuList: prev => ({
                          ...prev,
                          padding: '0',
                          backgroundColor: useColorModeValue('whiteAlpha.800', 'rgba(0,0,0,0.8)'),
                        }),
                        placeholder: prev => ({
                          ...prev,
                          color: useColorModeValue('gray.400', 'whiteAlpha.700'),
                        }),
                      }}
                    />
                    {errors['gender'] && <FormHelperText color={useColorModeValue('rgba(0,0,0,0.5)', 'rgba(255, 255, 255, 0.5)')}>Please select a gender.</FormHelperText>}
                  </Box>

                  <Box w={'inherit'} px={5} py={{ base: 2, md: 3 }}>
                    <FormLabel htmlFor="message">
                      Message <span style={{ color: 'red' }}>*</span>
                    </FormLabel>
                    <Textarea
                      borderColor={useColorModeValue('gray.700', 'whiteAlpha.500')}
                      id={'message'}
                      placeholder={'Enter your message here...'}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      isInvalid={errors['message']}
                      focusBorderColor={useColorModeValue('#fcb03b', '#fcb03b')}
                      _hover={{
                        borderColor: '#FFAF3A',
                      }}
                      _active={{
                        borderColor: '#FFAF3A',
                      }}
                    />
                    {errors['message'] ? (
                      <FormHelperText color={useColorModeValue('rgba(0,0,0,0.5)', 'rgba(255, 255, 255, 0.5)')}>Please enter a message.</FormHelperText>
                    ) : errors['messageLength'] ? (
                      <FormHelperText color={useColorModeValue('rgba(0,0,0,0.5)', 'rgba(255, 255, 255, 0.5)')}>Message must be less than 500 characters.</FormHelperText>
                    ) : null}
                  </Box>

                  <Box w={'inherit'} px={5} py={{ base: 2, md: 3 }}>
                    <Checkbox
                      colorScheme="orange"
                      isChecked={accept}
                      onChange={e => {
                        setAccept(e.target.checked);
                      }}
                    >
                      <Text fontSize={'1rem'}>
                        I accept the{' '}
                        <Link
                          href="/privacy-policy"
                          style={{
                            color: '#FFAF3A',
                          }}
                        >
                          Privacy Policy
                        </Link>{' '}
                        <span style={{ color: 'red' }}>*</span>
                      </Text>
                    </Checkbox>
                  </Box>

                  <Box w={'inherit'} px={5} pt={'1.5rem'} display={'flex'} justifyContent={'center'}>
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
                      isLoading={buttonText === 'Sending...'}
                      isDisabled={!accept}
                    >
                      {buttonText}
                    </Button>
                  </Box>
                </Box>
              </FormControl>
            </form>
          </Section>

          <Box py={'3rem'}>
            <Section delay={0.8}>
              <Box>
                <Heading as="h3" variant="section-title" pb={4}>
                  Location:
                </Heading>
                <AspectRatio ratio={16 / 9}>
                  <Box as={AspectRatio} borderRadius={'lg'}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d529.0375232363497!2d-0.3734074550343845!3d39.460726871979254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6049081b535af7%3A0x2489f07aa7d665db!2sResonate%20With%20Yourself!5e0!3m2!1sen!2s!4v1743161893115!5m2!1sen!2s"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </Box>
                </AspectRatio>
              </Box>
            </Section>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default Contact;
