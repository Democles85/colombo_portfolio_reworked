import {
  Heading,
  Box,
  Image,
  Link,
  Badge,
  useColorModeValue,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

// Styles
import styles from '../styles/Service.module.css';

interface TitleProps {
  children: React.ReactNode;
}

interface WorkImageProps {
  src: string;
  alt: string;
}

interface MetaProps {
  children: React.ReactNode;
}

export const Title = ({ children }: TitleProps) => (
  <Box>
    {/* <Link href={'/services'} fontSize={{ base: '1rem', md: '1.25rem' }}>
      Services
    </Link>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading
      display="inline-block"
      as="h3"
      fontSize={{ base: '1.25rem', md: '1.5rem' }}
      mb={4}
      color={useColorModeValue('#202020', '#FFAF36')}
    >
      {children}
    </Heading> */}
    <Breadcrumb
      spacing={{ base: '0.5rem', md: '1rem' }}
      py={'1rem'}
      fontWeight={'bold'}
      separator={<ChevronRightIcon color={'#FFAF36'} />}
    >
      <BreadcrumbItem>
        <BreadcrumbLink
          href={'/services'}
          className={styles['text-gradient']}
          fontSize={{ base: '1.25rem', md: '1.5rem' }}
        >
          Services
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Text fontSize={{ base: '1.25rem', md: '1.5rem' }}>{children}</Text>
      </BreadcrumbItem>
    </Breadcrumb>
  </Box>
);

export const WorkImage = ({ src, alt }: WorkImageProps) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
);

export const Meta = ({ children }: MetaProps) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);
