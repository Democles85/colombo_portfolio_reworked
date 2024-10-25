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
  const [buttonText, setButtonText] = React.useState('Send Message');

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

    // if (lastName.length <= 0) {
    //   isValid = false;
    //   errors['lastName'] = true;
    // } else if (lastName.length >= 20) {
    //   isValid = false;
    //   errors['lastNameLength'] = true;
    // }

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

    // if (phone.length <= 0) {
    //   isValid = false;
    //   errors['phone'] = true;
    // } else if (!phone.match(phoneFormat)) {
    //   isValid = false;
    //   errors['phoneFormat'] = true;
    // } else if (phone.length >= 20) {
    //   isValid = false;
    //   errors['phoneLength'] = true;
    // }

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
      setButtonText('Sending...');

      const data = {
        firstName,
        // lastName,
        subject,
        email,
        // phone
        country: country.label,
        message,
      };

      const res = await axios.post('/api/contact', data);

      const { error } = await res.data;

      if (error) {
        toast.error(error);
        setButtonText('Send Message');

        return;
      }

      toast.success('Message Sent Successfully');
      setButtonText('Send Message');

      // Reset Form
      setFirstName('');
      // setLastName('');
      setEmail('');
      // setPhone('');
      setCountry({ value: '', label: '' });
      setGender({ value: '', label: '' });
      setMessage('');

      return;
    } else {
      toast.error('Please fill all the fields');
      setButtonText('Send Message');

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
              <Text
                fontSize={{ base: '2rem', md: '3rem', lg: '4rem' }}
                color={'white'}
                fontWeight={'bold'}
                textAlign={'center'}
              >
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
          <Text
            fontSize={{ base: '2rem', md: '3rem', lg: '4rem' }}
            fontWeight={'bold'}
            textAlign={'center'}
          >
            Write Your <span className={styles['text-gradient']}>Message</span>
          </Text>
          <Section>
            <form onSubmit={submitHandler}>
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
                      placeholder={'Your Name'}
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      isInvalid={
                        errors['firstName'] || errors['firstNameLength']
                      }
                    />
                    {errors['firstName'] ? (
                      <FormHelperText
                        color={useColorModeValue(
                          'rgba(0,0,0,0.5)',
                          'rgba(255, 255, 255, 0.5)'
                        )}
                      >
                        Please enter your name.
                      </FormHelperText>
                    ) : errors['firstNameLength'] ? (
                      <FormHelperText
                        color={useColorModeValue(
                          'rgba(0,0,0,0.5)',
                          'rgba(255, 255, 255, 0.5)'
                        )}
                      >
                        Your name is too long.
                      </FormHelperText>
                    ) : null}
                  </Box>
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
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                      isInvalid={errors['subject'] || errors['subjectLength']}
                    />
                    {errors['subject'] ? (
                      <FormHelperText
                        color={useColorModeValue(
                          'rgba(0,0,0,0.5)',
                          'rgba(255, 255, 255, 0.5)'
                        )}
                      >
                        Please enter a subject.
                      </FormHelperText>
                    ) : errors['subjectLength'] ? (
                      <FormHelperText
                        color={useColorModeValue(
                          'rgba(0,0,0,0.5)',
                          'rgba(255, 255, 255, 0.5)'
                        )}
                      >
                        Your subject is too long.
                      </FormHelperText>
                    ) : null}
                  </Box>
                  {/* <Box w={'inherit'} px={5} py={{ base: 2, md: 3, lg: 3 }}>
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
                      placeholder={'Your Surname'}
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      isInvalid={errors['lastName'] || errors['longLastName']}
                    />
                    {errors['lastName'] ? (
                      <FormHelperText
                        color={useColorModeValue(
                          'rgba(0,0,0,0.5)',
                          'rgba(255, 255, 255, 0.5)'
                        )}
                      >
                        Please enter your surname.
                      </FormHelperText>
                    ) : errors['longLastName'] ? (
                      <FormHelperText
                        color={useColorModeValue(
                          'rgba(0,0,0,0.5)',
                          'rgba(255, 255, 255, 0.5)'
                        )}
                      >
                        Your surname is too long.
                      </FormHelperText>
                    ) : null}
                  </Box> */}
                </Box>
                <Box w={'100%'} display={'flex'} flexDir={'column'}>
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
                      placeholder={'Your Email'}
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      isInvalid={
                        errors['email'] ||
                        errors['emailFormat'] ||
                        errors['emailLength']
                      }
                    />
                    {errors['email'] ? (
                      <FormHelperText
                        color={useColorModeValue(
                          'rgba(0,0,0,0.5)',
                          'rgba(255, 255, 255, 0.5)'
                        )}
                      >
                        Please enter your email.
                      </FormHelperText>
                    ) : errors['emailFormat'] ? (
                      <FormHelperText
                        color={useColorModeValue(
                          'rgba(0,0,0,0.5)',
                          'rgba(255, 255, 255, 0.5)'
                        )}
                      >
                        Please enter a valid email.
                      </FormHelperText>
                    ) : errors['emailLength'] ? (
                      <FormHelperText
                        color={useColorModeValue(
                          'rgba(0,0,0,0.5)',
                          'rgba(255, 255, 255, 0.5)'
                        )}
                      >
                        Your email is too long.
                      </FormHelperText>
                    ) : null}
                  </Box>

                  {/* <Box w={'inherit'} px={5} py={{ base: 2, md: 3 }}>
                    <FormLabel htmlFor={'phone'} fontSize={'1.25rem'}>
                      Phone: <span style={{ color: 'red' }}>*</span>
                    </FormLabel>
                    <Input
                      borderColor={useColorModeValue(
                        'gray.700',
                        'whiteAlpha.500'
                      )}
                      _hover={{ borderColor: '#FFAF36' }}
                      focusBorderColor={'#FFAF36'}
                      placeholder={'+(123)-456-7890'}
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      isInvalid={
                        errors['phone'] ||
                        errors['phoneFormat'] ||
                        errors['phoneLength']
                      }
                    />
                    {errors['phone'] ? (
                      <FormHelperText
                        color={useColorModeValue(
                          'rgba(0,0,0,0.5)',
                          'rgba(255, 255, 255, 0.5)'
                        )}
                      >
                        Please enter your phone number.
                      </FormHelperText>
                    ) : errors['phoneFormat'] ? (
                      <FormHelperText
                        color={useColorModeValue(
                          'rgba(0,0,0,0.5)',
                          'rgba(255, 255, 255, 0.5)'
                        )}
                      >
                        Please enter a valid phone number.
                      </FormHelperText>
                    ) : errors['phoneLength'] ? (
                      <FormHelperText
                        color={useColorModeValue(
                          'rgba(0,0,0,0.5)',
                          'rgba(255, 255, 255, 0.5)'
                        )}
                      >
                        Your phone number is too long.
                      </FormHelperText>
                    ) : null}
                  </Box> */}

                  <Box w={'inherit'} px={5} py={{ base: 2, md: 3 }}>
                    <FormLabel htmlFor="country">
                      Country <span style={{ color: 'red' }}>*</span>
                    </FormLabel>
                    <Select
                      options={countries}
                      isInvalid={errors['country']}
                      focusBorderColor={useColorModeValue('#fcb03b', '#fcb03b')}
                      id={'country'}
                      placeholder={'Select Your Country'}
                      isSearchable={true}
                      isClearable={true}
                      selectedOptionColor={'orange'}
                      onChange={countryHandler}
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
                        placeholder: prev => ({
                          ...prev,
                          color: useColorModeValue(
                            'gray.400',
                            'whiteAlpha.700'
                          ),
                        }),
                      }}
                    />
                    {errors['country'] && (
                      <FormHelperText
                        color={useColorModeValue(
                          'rgba(0,0,0,0.5)',
                          'rgba(255, 255, 255, 0.5)'
                        )}
                      >
                        Please select your country.
                      </FormHelperText>
                    )}
                  </Box>

                  <Box w={'inherit'} px={5} py={{ base: 2, md: 3 }}>
                    <FormLabel htmlFor="gender">
                      Gender <span style={{ color: 'red' }}>*</span>
                    </FormLabel>
                    <Select
                      options={genders}
                      isInvalid={errors['gender']}
                      focusBorderColor={useColorModeValue('#fcb03b', '#fcb03b')}
                      id={'gender'}
                      placeholder={'Select Your Gender'}
                      isSearchable={true}
                      isClearable={true}
                      selectedOptionColor={'orange'}
                      onChange={genderHandler}
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
                        placeholder: prev => ({
                          ...prev,
                          color: useColorModeValue(
                            'gray.400',
                            'whiteAlpha.700'
                          ),
                        }),
                      }}
                    />
                    {errors['gender'] && (
                      <FormHelperText
                        color={useColorModeValue(
                          'rgba(0,0,0,0.5)',
                          'rgba(255, 255, 255, 0.5)'
                        )}
                      >
                        Please select a gender.
                      </FormHelperText>
                    )}
                  </Box>

                  <Box w={'inherit'} px={5} py={{ base: 2, md: 3 }}>
                    <FormLabel htmlFor="message">
                      Message <span style={{ color: 'red' }}>*</span>
                    </FormLabel>
                    <Textarea
                      borderColor={useColorModeValue(
                        'gray.700',
                        'whiteAlpha.500'
                      )}
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
                      <FormHelperText
                        color={useColorModeValue(
                          'rgba(0,0,0,0.5)',
                          'rgba(255, 255, 255, 0.5)'
                        )}
                      >
                        Please enter a message.
                      </FormHelperText>
                    ) : errors['messageLength'] ? (
                      <FormHelperText
                        color={useColorModeValue(
                          'rgba(0,0,0,0.5)',
                          'rgba(255, 255, 255, 0.5)'
                        )}
                      >
                        Message must be less than 500 characters.
                      </FormHelperText>
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
                            textDecoration: 'underline',
                          }}
                        >
                          Privacy Policy
                        </Link>{' '}
                        <span style={{ color: 'red' }}>*</span>
                      </Text>
                    </Checkbox>
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
            <Section delay={0.4}>
              <Box>
                <Heading as="h3" variant="section-title">
                  Contact Me Via Email:
                </Heading>
                <List>
                  <ListItem>
                    <Link
                      href="mailto:resonatewithyourself@gmail.com"
                      target="_blank"
                    >
                      <Button
                        variant="ghost"
                        colorScheme="orange"
                        leftIcon={<Icon as={MdMail} />}
                      >
                        resonatewithyourself@gmail.com
                      </Button>
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Section>
            <Section delay={0.6}>
              <Box>
                <Heading as="h3" variant="section-title">
                  Contact Me Via WhatsApp:
                </Heading>
                <List>
                  <ListItem>
                    <Link href="https://wa.me/34671145400" target="_blank">
                      <Button
                        variant="ghost"
                        colorScheme="orange"
                        leftIcon={<Icon as={AiOutlineWhatsApp} />}
                      >
                        +34 671 145 400
                      </Button>
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Section>
            <Section delay={0.8}>
              <Box>
                <Heading as="h3" variant="section-title" pb={4}>
                  Location:
                </Heading>
                <AspectRatio ratio={16 / 9}>
                  <Box as={AspectRatio} borderRadius={'lg'}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d799.4254200459854!2d-4.436424718613307!3d36.72972525886803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7a7adc6ca69%3A0x29aee32c1667603b!2sPl.%20Eduardo%20Dato%2C%20Bail%C3%A9n-Miraflores%2C%2029011%20M%C3%A1laga%2C%20Spain!5e0!3m2!1sen!2s!4v1729880318212!5m2!1sen!2s"
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
