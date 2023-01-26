import {
  Box,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export default function ThemeToggleSwitch() {
  const [text, setText] = useState('');
  // Get chakra color mode value from localStorage
  const [colorMode, setColorMode] = useState(
    useEffect(() => {
      const localStorageColorMode = localStorage.getItem(
        'chakra-ui-color-mode'
      );
      if (localStorageColorMode) {
        setColorMode(localStorageColorMode as any);
        // Set text to match color mode with the first letter capitalized
        setText(
          localStorageColorMode.charAt(0).toUpperCase() +
            localStorageColorMode.slice(1)
        );
      }
    }, []) as any
  );
  const { toggleColorMode } = useColorMode();

  // Set chakra color mode value to a useState value
  const setColorTheme = (colorMode: string) => {
    localStorage.setItem('chakra-ui-color-mode', colorMode);
    setColorMode(colorMode as string);
  };

  // Create a custom switch with the sun and moon as icons
  return (
    <AnimatePresence mode={'wait'} initial={false}>
      <Box
        display={'flex'}
        mr={'1rem'}
        paddingRight={{ base: '0', md: '0', lg: '40px' }}
        alignItems={'center'}
        justifyContent={'right'}
      >
        <motion.div
          style={{ display: 'flex', alignItems: 'center' }}
          key={useColorModeValue('light', 'dark')}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Create a custom switch with the sun and moon as icons */}
          <Box
            as={'button'}
            onClick={() => {
              toggleColorMode();
              setColorTheme(colorMode === 'dark' ? 'light' : 'dark');
              setText(colorMode === 'dark' ? 'Light' : 'Dark');
            }}
            style={{
              cursor: 'pointer',
            }}
          >
            {colorMode === 'dark' ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path
                  id="moon"
                  fillRule="evenodd"
                  d="M8.09 1.382a.75.75 0 01-.05.814 4.121 4.121 0 005.764 5.764.75.75 0 011.193.672 7.014 7.014 0 11-7.63-7.629.75.75 0 01.723.379zm-2.06 1.46a5.513 5.513 0 107.128 7.128A5.621 5.621 0 016.03 2.843z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                fill="#f0560f"
              >
                <title>sun</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="invisible_box" data-name="invisible box">
                    <rect width="48" height="48" fill="none" />
                  </g>
                  <g id="Q3_icons" data-name="Q3 icons">
                    <g>
                      <path
                        id="sun"
                        d="M24,10a2,2,0,0,0,2-2V4a2,2,0,0,0-4,0V8A2,2,0,0,0,24,10Z"
                      />
                      <path
                        id="sun"
                        d="M24,38a2,2,0,0,0-2,2v4a2,2,0,0,0,4,0V40A2,2,0,0,0,24,38Z"
                      />
                      <path
                        id="sun"
                        d="M36.7,14.1l2.9-2.8a2.3,2.3,0,0,0,0-2.9,2.3,2.3,0,0,0-2.9,0l-2.8,2.9a2,2,0,1,0,2.8,2.8Z"
                      />
                      <path
                        id="sun"
                        d="M11.3,33.9,8.4,36.7a2.3,2.3,0,0,0,0,2.9,2.3,2.3,0,0,0,2.9,0l2.8-2.9a2,2,0,1,0-2.8-2.8Z"
                      />
                      <path
                        id="sun"
                        d="M44,22H40a2,2,0,0,0,0,4h4a2,2,0,0,0,0-4Z"
                      />
                      <path
                        id="sun"
                        d="M10,24a2,2,0,0,0-2-2H4a2,2,0,0,0,0,4H8A2,2,0,0,0,10,24Z"
                      />
                      <path
                        id="sun"
                        d="M36.7,33.9a2,2,0,1,0-2.8,2.8l2.8,2.9a2.1,2.1,0,1,0,2.9-2.9Z"
                      />
                      <path
                        id="sun"
                        d="M11.3,14.1a2,2,0,0,0,2.8-2.8L11.3,8.4a2.3,2.3,0,0,0-2.9,0,2.3,2.3,0,0,0,0,2.9Z"
                      />
                      <path
                        id="sun"
                        d="M24,14A10,10,0,1,0,34,24,10,10,0,0,0,24,14Zm0,16a6,6,0,1,1,6-6A6,6,0,0,1,24,30Z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            )}
          </Box>
        </motion.div>

        {/* <motion.div
          key={useColorModeValue('light', 'dark')}
          initial={{ opacity: 0, x: 5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Text fontFamily={"'M PLUS Rounded 1c', sans-serif"}>{text}</Text>
        </motion.div> */}
      </Box>
    </AnimatePresence>
  );
}
