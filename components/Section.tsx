import { BoxProps, chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  delay?: number;
}

const StyledDiv = motion<Omit<BoxProps, 'transition'> & { as?: any }>(
  chakra('div', { shouldForwardProp })
);

const Section = ({ children, delay = 0 }: SectionProps) => {
  return (
    <StyledDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </StyledDiv>
  );
};

export default Section;
