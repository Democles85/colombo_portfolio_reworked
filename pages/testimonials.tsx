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
} from '@chakra-ui/react';
import React, { useState, useMemo } from 'react';
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
import Carousel from 'react-multi-carousel';

// Types
import TestimonialTypes from '../lib/types';

// Styles
import styles from '../styles/Home.module.css';
import 'react-multi-carousel/lib/styles.css';

// Country List
import countryList from 'react-select-country-list';

interface CountryOptions extends OptionBase {
  label: string;
  value: string;
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const customLeftArrow = (
  // <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">

  <Box
    position={'absolute'}
    left={{ base: '-0.2rem', md: '0' }}
    cursor={'pointer'}
    bg={'rgba(23, 23, 23, 0.8)'}
    // border={'1px solid rgba(255, 255, 255, 0.5)'}
    p={{ base: 1, md: 3 }}
    rounded={'full'}
    className={'arrow-btn'}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 text-white w-full"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  </Box>
);

const customRightArrow = (
  <Box
    position={'absolute'}
    right={{ base: '-0.2rem', md: '0' }}
    cursor={'pointer'}
    bg={'rgba(23, 23, 23, 0.8)'}
    // border={'1px solid rgba(255, 255, 255, 0.5)'}
    p={{ base: 1, md: 3 }}
    rounded={'full'}
    className={'arrow-btn'}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 text-white w-full"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </Box>
);

const Testimonials = ({ testimonials }: TestimonialTypes) => {
  const methods = useForm({ mode: 'onBlur' });
  const {
    formState: { errors },
  } = methods;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [country, setCountry] = useState<CountryOptions>({
    label: 'Select Country',
    value: '',
  });

  const countries = useMemo(() => countryList().getData(), []);

  const handleCountryChange = (value: any) => {
    setCountry(value);
  };

  const emailFormat: RegExp = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;

  // console.log(testimonials.map((t: any) => t.node.testimonial.raw.children));

  const accept = {
    'image/png': ['.png'],
    'image/jpeg': ['.jpg', '.jpeg'],
  };

  const handleSubmit = methods.handleSubmit((data: any) => {
    const { name, email, images, message } = data;
    const countryLabel: string = country.label;

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
    <Box pt={'4rem'}>
      <Toaster position={'top-right'} reverseOrder={false} />
      <Section>
        <Container maxW={'container.lg'} display={'flex'} flexDir={'column'}>
          <Box textAlign={'center'} py={'4rem'}>
            <Heading as={'h1'}>
              What people feel about{' '}
              <span className={styles['text-gradient']}>
                Resonate with Yourself.
              </span>
            </Heading>
          </Box>

          <Box>
            <Box>
              <Carousel
                responsive={responsive}
                infinite={true}
                customLeftArrow={customLeftArrow}
                customRightArrow={customRightArrow}
                itemClass={'px-4'}
                keyBoardControl={true}
              >
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
                        border={'1px solid rgba(255, 175, 58, 1)'}
                        // border={'1px solid rgba(255, 255, 255, 0.5)'}
                        bg={'#202023'}
                        borderRadius={'10px'}
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
                          justifyContent={'space-between'}
                          py={'1rem'}
                        >
                          <Heading as={'h3'} fontSize={'1.75rem'}>
                            {testimonial.node.name}
                            <Badge
                              ml={{ base: 0, md: 3 }}
                              colorScheme={'orange'}
                              mt={'0.1rem'}
                            >
                              {/* Make it responsive for long one liner */}
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
                            <Badge
                              ml={{ base: 1, md: 2 }}
                              colorScheme={'green'}
                              mt={'0.1rem'}
                            >
                              {testimonial.node.country}
                            </Badge>
                          </Heading>
                        </Box>
                        <RichText
                          content={testimonial.node.testimonial.raw.children}
                          renderers={{
                            p: ({ children }: any) => (
                              <Text fontSize={'1rem'} textAlign={'justify'}>
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
                  );
                })}
              </Carousel>
            </Box>
          </Box>
        </Container>
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
                        placeholder={'John Doe'}
                        isInvalid={errors.name ? true : false}
                        _hover={{ borderColor: 'orange' }}
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
                        placeholder={'Email'}
                        isInvalid={errors.email ? true : false}
                        _hover={{ borderColor: 'orange' }}
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

                    <Box py={'0.5rem'}>
                      <FormLabel htmlFor={'country'}>
                        Country of Residence
                      </FormLabel>
                      <Select
                        options={countries}
                        name={'country'}
                        placeholder={'Select Country'}
                        selectedOptionColor={'#FFAF3A'}
                        isClearable
                        isSearchable
                        onChange={e => handleCountryChange(e)}
                      />
                    </Box>

                    <Box py={'1rem'}>
                      <FormLabel htmlFor={'message'}>Testimonial</FormLabel>
                      <Textarea
                        {...methods.register('message', {
                          required: true,
                        })}
                        name={'message'}
                        id={'message'}
                        placeholder={'Your Testimonial'}
                        isInvalid={errors.message ? true : false}
                        _hover={{ borderColor: 'orange' }}
                        focusBorderColor={'#FFAF3A'}
                      />
                      {errors.message?.type === 'required' && (
                        <FormHelperText color={'red.300'}>
                          This field is required
                        </FormHelperText>
                      )}
                    </Box>

                    <Box py={'1rem'}>
                      <Button
                        type={'submit'}
                        colorScheme={'orange'}
                        variant={'solid'}
                        size={'lg'}
                        width={'100%'}
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