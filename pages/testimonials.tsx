import {
  Avatar,
  Badge,
  Box,
  Button,
  Code,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  Tooltip,
  useColorModeValue,
  Icon,
  Image,
} from '@chakra-ui/react';
import React, { useState, useMemo, useEffect } from 'react';
import Section from '../components/Section';
import FileInput from '../components/Dropzone';

// Chakra React Select
import { Select, OptionBase } from 'chakra-react-select';

// GraphQL Imports
import { getTestimonials, submitTestimonial } from '../services';

// GraphCMS Rich Text Renderer
import { RichText } from '@graphcms/rich-text-react-renderer';

// FormData
import FormData from 'form-data';
import { FormProvider, useForm } from 'react-hook-form';

// React Hot Toast
import toast, { Toaster } from 'react-hot-toast';

// Carousel
import Slider from 'react-slick';

// Types
import TestimonialTypes from '../lib/types';

// Styles
import 'react-multi-carousel/lib/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Country List
import countryList from 'react-select-country-list';

// Functions
import { getWindowSize } from '../lib/getWindowSize';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/title';

interface SelectOptions extends OptionBase {
  [x: string]: any;
  label: string;
  value: string;
}

const customLeftArrow = (
  // Create a simple arrow component
  <Box
    position={'absolute'}
    left={{ base: '-0.2rem', md: '0.5rem' }}
    cursor={'pointer'}
  >
    <Icon as={ChevronLeftIcon} w={6} h={6} />
  </Box>
);

const customRightArrow = (
  <Box
    position={'absolute'}
    right={{ base: '-0.2rem', md: '0.5rem' }}
    cursor={'pointer'}
  >
    <Icon as={ChevronRightIcon} w={6} h={6} />
  </Box>
);

const Testimonials = ({ testimonials }: TestimonialTypes) => {
  const settings = {
    dots: true,
    accessibility: true,
    autoplay: false,
    fade: false,
    infinite: true,
    touchThreshold: 15,
    speed: 1000,
    cssEase: 'ease-out',
    useTransform: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          fade: true,
          arrows: true,
        },
        // @ts-ignore
        breakpoint: 600,
        // @ts-ignore
        settings: {
          fade: true,
          arrows: true,
        },
        // @ts-ignore
        breakpoint: 480,
        // @ts-ignore
        settings: {
          fade: true,
          arrows: true,
        },
      },
    ],
  };

  const size = getWindowSize();
  const countries = useMemo(() => countryList().getData(), []);

  const [country, setCountry] = useState<SelectOptions>({
    label: '',
    value: '',
  });

  const [service, setService] = useState<SelectOptions>({
    label: '',
    value: '',
  });

  const methods = useForm({ mode: 'onBlur' });
  const {
    formState: { errors },
  } = methods;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCountryChange = (value: any) => {
    setCountry(value);
  };

  const handlePackageChange = (value: any) => {
    setService(value);
  };

  const emailFormat: RegExp = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;

  const accept = {
    'image/png': ['.png'],
    'image/jpeg': ['.jpg', '.jpeg'],
  };

  const handleSubmit = methods.handleSubmit((data: any) => {
    const { name, email, images = [], message } = data;
    const countryLabel: string = country.label;

    if (images.length === 0) {
      toast.error('Please upload an image');
      return;
    } else if (country.value.length === 0) {
      toast.error('Please select a country');
      return;
    } else if (!emailFormat.test(email)) {
      toast.error('Please enter a valid email');
      return;
    } else if (message.length < 10) {
      toast.error('Please enter a message of at least 10 characters');
      return;
    } else if (name.length < 3) {
      toast.error('Please enter a name of at least 3 characters');
      return;
    } else if (name.length > 30) {
      toast.error('Please enter a name of less than 30 characters');
      return;
    }

    console.log(images[0]);

    const form = new FormData();
    form.append('file_1', images[0]);
    form.append('country', countryLabel);
    form.append('name', name);
    form.append('email', email);
    form.append('message', message);

    toast.promise(
      submitTestimonial(form),
      {
        loading: 'Submitting Testimonial',
        success: () => {
          setSubmitted(true);
          return 'Testimonial Submitted';
        },
        error: err => {
          console.log(err);
          return 'Error Submitting Testimonial';
        },
      },
      {
        style: {
          minWidth: '300px',
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          borderColor: 'orange',
        },
      }
    );
  });

  return (
    <Layout title={'Testimonials'}>
      <Box pt={'4rem'}>
        {/* <CircularBackground /> */}
        <Toaster position={'bottom-right'} reverseOrder={false} />
        <Section>
          <Box bg={'rgba(255, 175, 54, 0.2)'}>
            <Container
              maxW={'container.xl'}
              display={'flex'}
              flexDir={'column'}
            >
              <Box textAlign={'center'} py={'4rem'}>
                <Heading as={'h1'} color={'#ffaf36'}>
                  {/* What people feel about{' '}
                  <span className={styles['text-gradient']}>
                    Resonate with Yourself.
                  </span> */}
                  Testimonials
                </Heading>
              </Box>

              <Box>
                <Slider {...settings}>
                  {testimonials.map(testimonial => {
                    return (
                      <Box
                        py={'4rem'}
                        key={testimonial.node.id}
                        position={'relative'}
                      >
                        <Box
                          py={'2rem'}
                          px={{ base: '1rem', md: '2rem' }}
                          borderRadius={'10px'}
                          display={'flex'}
                          flexDir={'column'}
                          justifyContent={'center'}
                          alignItems={'center'}
                        >
                          <Avatar
                            name={testimonial.node.name}
                            size={'xl'}
                            src={testimonial.node.profilePicture.url}
                            position={'absolute'}
                            top={'.9rem'}
                            bg={'rgba(255, 255, 255, .5)'}
                            border={'1px solid rgba(255, 255, 255, .5)'}
                            left={'calc(50% - 3rem)'}
                            boxShadow={'0px 0px 10px rgba(0, 0, 0, 0.5)'}
                          />
                          <Box
                            display={'flex'}
                            flexDir={'column'}
                            alignItems={'center'}
                            py={'1rem'}
                          >
                            <Box>
                              <Text fontSize={'1.5rem'} fontWeight={'bold'}>
                                {testimonial.node.name}
                              </Text>
                            </Box>
                            <Box
                              display={'flex'}
                              alignItems={'center'}
                              width={'100%'}
                              justifyContent={'center'}
                              flexDir={{ base: 'column', md: 'row' }}
                            >
                              <Badge
                                colorScheme={'green'}
                                my={'0.25rem'}
                                mx={{ base: '0', md: '0.25rem' }}
                              >
                                {testimonial.node.country}
                              </Badge>
                              <Badge
                                colorScheme={'orange'}
                                my={'0.25rem'}
                                mx={{ base: '0', md: '0.25rem' }}
                              >
                                {testimonial.node.experience.length > 30 ? (
                                  <Tooltip
                                    label={testimonial.node.experience}
                                    aria-label="A tooltip"
                                  >
                                    <span>
                                      {testimonial.node.experience.slice(0, 30)}
                                      ...
                                    </span>
                                  </Tooltip>
                                ) : (
                                  testimonial.node.experience
                                )}
                              </Badge>
                            </Box>
                          </Box>
                          <Box>
                            <RichText
                              content={
                                testimonial.node.testimonial.raw.children
                              }
                              renderers={{
                                p: ({ children }: any) => (
                                  <Text
                                    fontSize={'1rem'}
                                    px={{ base: '0.5rem' }}
                                    textAlign={'justify'}
                                  >
                                    {children}
                                  </Text>
                                ),
                                code_block: ({ children }: any) => (
                                  <Code colorScheme={'orange'}>{children}</Code>
                                ),
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                    );
                  })}
                </Slider>
              </Box>
            </Container>
          </Box>
        </Section>

        <Section>
          <Container maxW={'container.lg'}>
            <Box py={'1rem'}>
              <Heading as={'h1'} textAlign={'center'}>
                Share your experience with us.
              </Heading>
            </Box>

            <Box py={'2rem'}>
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit}>
                  <FormControl>
                    <Box display={'flex'} width={'100%'} flexDir={'column'}>
                      <Box py={'0.5rem'}>
                        <FormLabel htmlFor={'images'}>
                          Profile Image{' '}
                          <span style={{ color: 'rgb(215, 112, 112)' }}>*</span>
                          <Text
                            fontSize={'0.75rem'}
                            fontWeight={'light'}
                            fontStyle={'italic'}
                            color={'rgba(255, 255, 255, 0.5)'}
                          >
                            Put any image that you want to be displayed on the
                            site.
                          </Text>
                        </FormLabel>

                        <FileInput accept={accept} name={'images'} />
                      </Box>

                      {/* Name / Nickname */}
                      <Box py={'0.5rem'}>
                        <FormLabel htmlFor={'name'}>
                          Name / Nickname{' '}
                          <span style={{ color: 'rgb(215, 112, 112)' }}>*</span>
                        </FormLabel>
                        <Input
                          {...methods.register('name', {
                            required: true,
                            maxLength: 20,
                          })}
                          type={'text'}
                          name={'name'}
                          id={'name'}
                          placeholder={'Your Name'}
                          isInvalid={errors.name ? true : false}
                          _hover={{ borderColor: 'orange' }}
                          borderColor={useColorModeValue(
                            'gray.700',
                            'whiteAlpha.500'
                          )}
                          focusBorderColor={'#FFAF3A'}
                        />
                        {errors.name?.type === 'required' && (
                          <FormHelperText color={'red.300'}>
                            This field is required
                          </FormHelperText>
                        )}
                        {errors.name?.type === 'maxLength' && (
                          <FormHelperText color={'orange'}>
                            Max length is 20
                          </FormHelperText>
                        )}
                      </Box>

                      {/* Email */}
                      <Box py={'0.5rem'}>
                        <FormLabel htmlFor={'email'}>
                          Email{' '}
                          <span style={{ color: 'rgb(215, 112, 112)' }}>*</span>
                        </FormLabel>
                        <Input
                          {...methods.register('email', {
                            required: true,
                            maxLength: 80,
                            pattern: emailFormat,
                          })}
                          type={'email'}
                          name={'email'}
                          id={'email'}
                          placeholder={'Your Email'}
                          isInvalid={errors.email ? true : false}
                          _hover={{ borderColor: 'orange' }}
                          borderColor={useColorModeValue(
                            'gray.700',
                            'whiteAlpha.500'
                          )}
                          focusBorderColor={'#FFAF3A'}
                        />
                        {errors.email?.type === 'required' && (
                          <FormHelperText color={'red.300'}>
                            This field is required
                          </FormHelperText>
                        )}
                        {errors.email?.type === 'maxLength' && (
                          <FormHelperText color={'orange'}>
                            Max length is 80
                          </FormHelperText>
                        )}
                        {errors.email?.type === 'pattern' && (
                          <FormHelperText color={'orange'}>
                            Invalid email
                          </FormHelperText>
                        )}
                      </Box>

                      {/* Country */}
                      <Box py={'0.5rem'}>
                        <FormLabel htmlFor={'country'}>
                          Country of Residence{' '}
                          <span style={{ color: 'rgb(215, 112, 112)' }}>*</span>
                        </FormLabel>
                        <Select
                          options={countries}
                          name={'country'}
                          placeholder={'Select Country'}
                          focusBorderColor={'#FFAF3A'}
                          isInvalid={errors.country ? true : false}
                          isClearable
                          isSearchable
                          onChange={e => handleCountryChange(e)}
                          chakraStyles={{
                            control: (prev, { isFocused }) => ({
                              ...prev,
                              borderColor: isFocused
                                ? '#FFAF3A'
                                : useColorModeValue(
                                    'gray.700',
                                    'whiteAlpha.500'
                                  ),
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
                      </Box>

                      {/* Testimonial */}
                      <Box py={'1rem'}>
                        <FormLabel htmlFor={'message'}>Testimonial</FormLabel>
                        <Textarea
                          {...methods.register('message', {
                            required: true,
                          })}
                          name={'message'}
                          id={'message'}
                          placeholder={'Type your testimonial here...'}
                          isInvalid={errors.message ? true : false}
                          _hover={{ borderColor: 'orange' }}
                          borderColor={useColorModeValue(
                            'gray.700',
                            'whiteAlpha.500'
                          )}
                          focusBorderColor={'#FFAF3A'}
                        />
                        {errors.message?.type === 'required' && (
                          <FormHelperText color={'red.300'}>
                            This field is required
                          </FormHelperText>
                        )}
                      </Box>

                      <Box
                        py={'1rem'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                      >
                        <Button
                          type={'submit'}
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
                        >
                          Submit
                        </Button>
                      </Box>
                    </Box>
                  </FormControl>
                </form>
              </FormProvider>
            </Box>
          </Container>
        </Section>
      </Box>
    </Layout>
  );
};

export default Testimonials;

export async function getServerSideProps() {
  const testimonials = (await getTestimonials()) || [];

  // console.log('testimonials', testimonials);

  return {
    props: {
      testimonials,
    },
  };
}
