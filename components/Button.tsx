import { Button as ChakraButton } from '@chakra-ui/react';
import { CSSProperties } from 'react';

export function Button({
  label,
  style,
}: {
  label: string;
  style?: CSSProperties;
}) {
  return (
    <ChakraButton
      borderRadius={'30px'}
      bgGradient={'linear(to-r, #FFAF36, #FFC700)'}
      _hover={{
        boxShadow: '0 0 20px 3px #FFAF36',
      }}
      color={'white'}
      paddingX={'2rem'}
      paddingY={'1.5rem'}
      fontSize={'xl'}
      fontWeight={'medium'}
      style={style}
    >
      {label}
    </ChakraButton>
  );
}
