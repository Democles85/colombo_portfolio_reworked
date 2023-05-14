import {
  ListItem,
  Text,
  OrderedList,
  Box,
  ListIcon,
  List,
  useColorModeValue,
  UnorderedList,
} from '@chakra-ui/react';
import { BsFillCircleFill } from 'react-icons/bs';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import styles from '../styles/Services.module.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

const data = {
  services: [
    {
      title: 'Bodywork',
      slug: 'bodywork',
      thumbnail: 'colombo_resize/DSC_7190.jpg',
      description:
        'Bodywork is a collective term that refers to alternative medical practices involving hands-on manipulation of the body...',
      content: [
        {
          paragraph: (
            <Box
              textStyle="h1"
              borderRadius="lg"
              p={5}
              // bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              background="rgba(245,166,35,0.25)"
              boxShadow="0 8px 32px 0 rgba(245,166,35, 0.15)"
              border="1px solid rgba(255,255,255, 0.18)"
            >
              <Text
                fontWeight={'medium'}
                fontSize={[18, null, 20]}
                letterSpacing="tight"
              >
                “If we are simply an extension of the universe then surely we
                also pulsate, contract and expand. Not long after our birth /
                contraction (or expansion depending how you see it) our muscles
                begin holding memory of our traumas and create muscular
                rigidities that soon design our personal &lsquo;suit of
                armour&lsquo;. This suit of armor interrupts our pulsation /
                energetic flow, reducing our true expression of Self and
                blocking or hindering our creative and (life-force).”{' '}
              </Text>
            </Box>
          ),
        },
        {
          paragraph: (
            <>
              <Text
                color={'#FFAF36'}
                fontWeight={'bold'}
                fontSize={{ base: '1.25rem', md: '1.5rem' }}
              >
                A brief explanation of how de armouring came to life.
              </Text>
            </>
          ),
        },
        {
          paragraph: (
            <>
              <LazyLoadImage
                className={styles['card-image']}
                effect={'blur'}
                src={'/works/bodywork_header_compressed.jpg'}
                alt={'Sound Healing Singing Bowl'}
              />
            </>
          ),
        },
        {
          paragraph:
            'The modern term ‘de-armouring’ evolved from the work of the psychoanalyst Wilhelm Reich in the 1930s. He noticed that when his patients carried emotions or ideas which had been repressed over time, they formed a ‘character armour.’ This consisted of certain traits which were present to defend themselves from feeling the unwanted emotions.',
        },
        {
          paragraph:
            'Then Reich observed that this character armour corresponded to a somatic (physical body) ‘armour,’ which consisted of the hardening of the body’s soft tissues, such as muscles. Over time, the armour hardened, causing the physical body to become less sensitized and feel less of both pain and pleasure.',
        },
        {
          paragraph:
            'Lastly he found that the armour could be softened by applying certain bodywork techniques. Today, his work overlaps with body-based therapies.',
        },
      ],
    },
    {
      title: 'De armouring',
      slug: 'de-armouring',
      thumbnail: 'colombo_resize/DSC_7183.jpg',
      description:
        'De armouring is a way to release jams, stagnant energy, emotions and tension from the body...',
      content: [
        {
          paragraph: (
            <Box
              textStyle="h1"
              borderRadius="lg"
              p={5}
              // bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              background="rgba(245,166,35,0.25)"
              boxShadow="0 8px 32px 0 rgba(245,166,35, 0.15)"
              border="1px solid rgba(255,255,255, 0.18)"
            >
              <Text
                fontWeight={'medium'}
                fontSize={[18, null, 20]}
                letterSpacing="tight"
              >
                “If we are simply an extension of the universe then surely we
                also pulsate, contract and expand. Not long after our birth /
                contraction (or expansion depending how you see it) our muscles
                begin holding memory of our traumas and create muscular
                rigidities that soon design our personal &lsquo;suit of
                armour&lsquo;. This suit of armor interrupts our pulsation /
                energetic flow reducing our true expression of Self and blocking
                or hindering our creative and (life-force).”{' '}
              </Text>
            </Box>
          ),
        },
        {
          paragraph: (
            <>
              <Text
                color={'#FFAF36'}
                fontWeight={'bold'}
                fontSize={{ base: '1.25rem', md: '1.5rem' }}
              >
                What does De armouring accomplish?
              </Text>
            </>
          ),
        },
        {
          paragraph:
            'De armouring opens up the energy flow and the connection between mind and body. This way, blockages and stuck trauma in the tissues of the body can be released. It decreases and even removes pain.',
        },
        {
          paragraph: (
            <>
              <Text
                color={'#FFAF36'}
                fontWeight={'bold'}
                fontSize={{ base: '1.25rem', md: '1.5rem' }}
              >
                A brief explanation of de armouring.
              </Text>
            </>
          ),
        },
        {
          paragraph: (
            <>
              <LazyLoadImage
                className={styles['card-image']}
                effect={'blur'}
                src={'/works/de_armouring_thumbnail_compressed.jpg'}
                alt={'Sound Healing Singing Bowl'}
              />
            </>
          ),
        },
        {
          paragraph:
            'Detoxifying our bodies from negative emotions, is one of the kindest things that we can do for ourselves.',
        },
        {
          paragraph:
            'Before birth our bodies are in bliss and pleasure. This is our natural state. As fear and trauma happens, our cellular vibration moves from bliss, into emotional pain and numbness (non-feeling).',
        },
        {
          paragraph:
            "Physical, mental, and emotional traumas, are all stored in the body's tissues. When the body is unable to release trauma it can effect us in a number of ways.",
        },
        {
          paragraph:
            'An emotional detox and de armouring session, is about reversing this process. Taking our cellular memory back to a place of love and joy, and vibrating on this level again.',
        },
        {
          paragraph:
            'Prevention is always better than cure, but if trauma in the body does start to manifest as physical, mental, or emotional problems, then conventional medicine, alternative medicine, and talking therapies are only a part of the answer. You still need to get the trauma out of the body.',
        },
        {
          paragraph:
            'Many people can achieve in several sessions of de-armouring, what it can take several years to accomplish in talking therapy.',
        },
        {
          paragraph:
            'In a session, I help you access this trauma, or pain, by using a range of techniques, including:',
        },
        {
          paragraph: (
            <Box ml={'1rem'}>
              <List>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={'#FFAF36'}
                    width={'7px'}
                  />
                  Breathwork
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={'#FFAF36'}
                    width={'7px'}
                  />
                  Trauma Release
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={'#FFAF36'}
                    width={'7px'}
                  />
                  Emotional Release
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={'#FFAF36'}
                    width={'7px'}
                  />
                  De armouring
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={'#FFAF36'}
                    width={'7px'}
                  />
                  Pressure points for different energy systems
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={'#FFAF36'}
                    width={'7px'}
                  />
                  Chakra Cleansing
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={'#FFAF36'}
                    width={'7px'}
                  />
                  Aura Cleansing
                </ListItem>
              </List>
            </Box>
          ),
        },
        {
          paragraph:
            'and other tools, to help you access and release old emotional pain, and stuckness.',
        },
      ],
    },
    {
      title: 'Authentic Energetic Bodywork',
      slug: 'authentic-tantra',
      thumbnail: 'colombo_resize/DSC_7218.jpg',
      description: '',
      content: [
        {
          paragraph: (
            <Box
              textStyle="h1"
              borderRadius="lg"
              p={5}
              // bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              background="rgba(245,166,35,0.25)"
              boxShadow="0 8px 32px 0 rgba(245,166,35, 0.15)"
              border="1px solid rgba(255,255,255, 0.18)"
            >
              <Text
                fontWeight={'medium'}
                fontSize={[18, null, 20]}
                letterSpacing="tight"
              >
                “Authentic Energetic Bodywork is an energy form of massage first
                and foremost. Key energy channels are purified, energy centers
                are activated and innate energy sources are channeled in a
                specific way.”
              </Text>
            </Box>
          ),
        },
        {
          paragraph: (
            <>
              <Text
                color={'#FFAF36'}
                fontWeight={'bold'}
                fontSize={{ base: '1.25rem', md: '1.5rem' }}
              >
                What is Authentic Energetic Bodywork, in simpler terms?
              </Text>
            </>
          ),
        },
        {
          paragraph:
            'It is one of the most refined and sensitive forms of art. It requires a high consciousness, as it requires the presence of soft and intensive energy, flowing within you, taking you deep within experiences and subconsciousness, in order to understand what your being is saying. Authentic Energetic Bodywork is a vivid experience of our own energy, to help us evolve spiritually.',
        },
        {
          paragraph: (
            <>
              <Text
                color={'#FFAF36'}
                fontWeight={'bold'}
                fontSize={{ base: '1.25rem', md: '1.5rem' }}
              >
                What is Authentic Energetic Bodywork today, and how many models
                are there?
              </Text>
            </>
          ),
        },
        {
          paragraph:
            'You will find many tantric models, created from various therapists, heavily involved in the tantric arts. After all of their work with themselves and many lessons, they keep all of their wisdom in the models they created. Naturally, another part of it integrate other types of body work, creating an authentic model in their own way.',
        },
        {
          paragraph: (
            <>
              <Text
                color={'#FFAF36'}
                fontWeight={'bold'}
                fontSize={{ base: '1.25rem', md: '1.5rem' }}
              >
                On another aspect:
              </Text>
            </>
          ),
        },
        {
          paragraph:
            "It not a theory or a system of thought. It's a sound science of the body. Of course, the practice of the physical also includes a spiritual, cosmological context. Authentic Energetic Bodywork is first and foremost an empirical science of the body. At the same time it is a consciousness teaching, it depends on the quality of consciousness in every aspect. It contains practices and methods by which one can get into very specific states. So it is a work with the energies of the body and the energy of life. The basis is a very fine, highly differentiated system that makes up the subtle currents in the human body and how they can be channeled.”",
        },
        {
          paragraph: (
            <>
              <Text
                color={'#FFAF36'}
                fontWeight={'bold'}
                fontSize={{ base: '1.25rem', md: '1.5rem' }}
              >
                Where is tantric bodywork based on for me?
              </Text>
            </>
          ),
        },
        {
          paragraph:
            'After my observations on history and a lot of teachers of tantric energy, as well as self exploration and bodywork on others, I have created an authentic model. It is rooted on tantric energy and life force, making it suitable for all who had a tantric session. This session is properly created for those who have had previous therapy sessions and for those retaking a session from me, so I may keep a proper vividness within your soul.',
        },
        {
          paragraph: (
            <>
              <Text
                color={'#FFAF36'}
                fontWeight={'bold'}
                fontSize={{ base: '1.25rem', md: '1.5rem' }}
              >
                How does it work?
              </Text>
            </>
          ),
        },
        {
          paragraph:
            'It remains quite amazing and helpful on how tantric work attracts all the senses, focusing on subconscious touch. It is an extension of the subconscious, by directly and intensively connecting all our emotions with the invisible energy structures. In order to help heal tensions and traumas, we express ourselves through a direct and connected energy massage. It is both intimate and it touches our body and soul, helping us connect on a deeper level with ourselves.',
        },
        {
          paragraph: (
            <>
              <Text
                color={'#FFAF36'}
                fontWeight={'bold'}
                fontSize={{ base: '1.25rem', md: '1.5rem' }}
              >
                The benefits of tantric therapy.
              </Text>
            </>
          ),
        },
        {
          paragraph: (
            <Box ml={'1rem'}>
              <OrderedList>
                <ListItem>
                  Reduction of mental and emotional stress, allowing us to have
                  a clearer mind and getting rid of negative thinking patterns.
                </ListItem>
                <ListItem>
                  It allows for greater sensitivity towards the delicate flow of
                  energy, helping us to get rid of our energetic blocks.
                </ListItem>
                <ListItem>
                  It unblocks our energetic body, making it more sensitive,
                  helping you find things more vividly.
                </ListItem>
                <ListItem>
                  It opens the gates to our subconscious, immersing you into who
                  you are.
                </ListItem>
                <ListItem>
                  Broadens your subconscious, letting more universal energy flow
                  through.
                </ListItem>
                <ListItem>
                  Connects you more with the center of your heart.
                </ListItem>
                <ListItem>
                  It serves as a trampoline into the spiritual tantric world,
                  and it grows our desire for more insight into the world deep
                  within us. It creates a deep foundation to support your body
                  and mind, but it also introduces us to new and unbelievable
                  things. This is a different experience for everyone.
                </ListItem>
              </OrderedList>
            </Box>
          ),
        },
        {
          paragraph: (
            <>
              <LazyLoadImage
                className={styles['card-image']}
                effect={'blur'}
                src={'/works/tantra_2_min.jpg'}
                alt={'Sound Healing Singing Bowl'}
              />
            </>
          ),
        },
      ],
    },

    {
      title: 'Advanced Energetic Bodywork',
      slug: 'advanced-energetic-bodywork',
      thumbnail: 'colombo_resize/DSC_7202.jpg',
      description: '',
      content: [
        {
          paragraph: (
            <>
              <Text
                color={'#FFAF36'}
                fontWeight={'bold'}
                fontSize={{ base: '1.25rem', md: '1.5rem' }}
              >
                How I developed my Advanced Energetic Bodywork.
              </Text>
            </>
          ),
        },
        {
          paragraph:
            'Advanced Energetic Bodywork is an advanced session that requires preparation with several bodywork sessions. This is not a requirement but a help to prepare the body before working with more advanced energy. Generally, the body needs 5 to 7 sessions, some bodies need more while some are naturally open and slip into it in the first or second session, depending on your energy.',
        },
        {
          paragraph:
            'In a session I work with a variety of techniques, from different modalities including:',
        },
        {
          paragraph: (
            <Box ml={'1rem'}>
              <List>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={'#FFAF36'}
                    width={'7px'}
                  />
                  Breathwork
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={'#FFAF36'}
                    width={'7px'}
                  />
                  Trauma release
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={'#FFAF36'}
                    width={'7px'}
                  />
                  Emotional release
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={'#FFAF36'}
                    width={'7px'}
                  />
                  De armouring
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={'#FFAF36'}
                    width={'7px'}
                  />
                  Masculine and feminine polarity work
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={'#FFAF36'}
                    width={'7px'}
                  />
                  Pressure points for different energy systems
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={'#FFAF36'}
                    width={'7px'}
                  />
                  Chakra cleansing
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCircleFill}
                    color={'#FFAF36'}
                    width={'7px'}
                  />
                  Aura cleansing
                </ListItem>
              </List>
            </Box>
          ),
        },
        {
          paragraph:
            'and other tools, to help you release physical and emotional pain, and remove the blocks that stop you from having a multi-orgasmic body. The aim of a session is not to have an orgasm, but to create a deeper loving relationship with yourself, and to learn how to cultivate your own inner sexual energy and inner chi.',
        },
        {
          paragraph:
            'In the first few sessions, more pain and trauma is released, and you will learn the basics of breathwork and other techniques. In later sessions, I teach and support you to develop your own energetic body, so that every cell can vibrate and orgasm. This creates new information in the body and allows the experience, of self-love and happiness, on the cellular level. Which in turn brings more energy, health, clarity and, success, into your life.',
        },
        {
          paragraph:
            'The sessions vary from person to person. You might want to focus on evolving and integrating your masculine and feminine polarities, learning Taoist energy techniques, or to focus more on emotional detoxing. Each session is adapted to the individual.',
        },
        {
          paragraph:
            'Some moments may feel sensual as energy runs through your body, the work is designed to help you fall in love with yourself. To connect your heart with your sex, and remove any shame and guilt that you may have about your sexuality.',
        },
        {
          paragraph:
            'You will learn to cultivate Chi, Prana, or life force energy, by raising sexual energy up the different channels in your body. Allowing in divine universal energy through your crown, while recharging and balancing your: chakra, aura, glands and the rest of your physical body.',
        },
        {
          paragraph:
            'There is no difference between spiritual, sexual and healing energy. The difference is our intention and what we do with it. Heal ourselves, or others. Manifest our dreams, evolve our subtle light bodies or develop a clearer connection to the divine and our higher intelligence.',
        },
        {
          paragraph:
            'Sexual energy is generally more powerful, tangible and readily available. It is best to work with, and develop, all of the channels that energy flows through, and by accepting our sexual energy: our spiritual and healing energy, can flow more freely.',
        },
      ],
    },
    {
      title: 'Sound Healing',
      slug: 'sound-healing',
      thumbnail: 'colombo_resize/DSC_7157.jpg',
      description:
        'Sound has the ability to activate parts of the subconscious brain, which can give access to unconscious memories...',
      content: [
        {
          paragraph: (
            <Box
              textStyle="h1"
              borderRadius="lg"
              p={5}
              // bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              background="rgba(245,166,35,0.25)"
              boxShadow="0 8px 32px 0 rgba(245,166,35, 0.15)"
              border="1px solid rgba(255,255,255, 0.18)"
            >
              <Text
                fontWeight={['medium', null, 'bold']}
                fontSize={[18, null, 24]}
                letterSpacing="tight"
              >
                “Sound is the medicine of the future.”{' '}
                <Text
                  fontSize="lg"
                  fontFamily="M PLUS Rounded 1c, sans-serif"
                  fontWeight="light"
                  textAlign="right"
                >
                  – Edgar Cayce
                </Text>
              </Text>
            </Box>
          ),
        },

        {
          paragraph: (
            <>
              <Text
                color={'#FFAF36'}
                fontWeight={'bold'}
                fontSize={{ base: '1.25rem', md: '1.5rem' }}
              >
                Sound is more than vibrations.
              </Text>
            </>
          ),
        },
        {
          paragraph:
            'Sound healing therapy is an alternative healing practice that targets the soul, the mind, and the body. This practice includes a series of instrumental sounds that vibrate, thus influencing the physical and non-physical electromagnetic field. The instruments used, vibrate and interact with the body’s external and internal energy, known as “Biofield”. By interacting with this field, dormant energy chambers throughout all the system are opened.  Often, our system saves traumas that are carried over in deep chambers, which need to be emptied in order for Chi to flow properly. The feeling of the sound is cosmic, and your body is often bathed in those sounds, taking you to a spiritual journey. The sounds are used to take the brain to a theta state, letting it meet with it’s deep subconcious. ',
        },
        {
          paragraph: (
            <>
              <Text
                color={'#FFAF36'}
                fontStyle={'italic'}
                textAlign={'center'}
                className={styles['text-gradient']}
              >
                "Sound can melt old frozen energy through the vibrations."
              </Text>
            </>
          ),
        },
        {
          paragraph: (
            <>
              <Text
                color={'#FFAF36'}
                fontWeight={'bold'}
                fontSize={{ base: '1.25rem', md: '1.5rem' }}
              >
                The power of sound
              </Text>
            </>
          ),
        },
        {
          paragraph:
            'Sound has the ability to activate parts of the subconscious brain, which can give access to unconscious memories.',
        },
        {
          paragraph: (
            <>
              <Text
                color={'#FFAF36'}
                fontStyle={'italic'}
                textAlign={'center'}
                className={styles['text-gradient']}
              >
                “Sound has the ability to activate parts of the subconscious
                brain”
              </Text>
            </>
          ),
        },
        {
          paragraph: (
            <>
              <Box paddingY={'1rem'}>
                <LazyLoadImage
                  className={styles['card-image']}
                  effect={'blur'}
                  src={'/works/sound_healing_header_compressed.jpg'}
                  alt={'Sound Healing Singing Bowl'}
                />
              </Box>
            </>
          ),
        },
        {
          paragraph: (
            <>
              <Text
                color={'#FFAF36'}
                fontWeight={'bold'}
                fontSize={{ base: '1.25rem', md: '1.5rem' }}
              >
                The benefits of sound healing
              </Text>
            </>
          ),
        },
        {
          paragraph: (
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              textAlign={'left'}
            >
              <Box>
                <Text
                  fontWeight={'bold'}
                  pb={'1rem'}
                  textAlign={'center'}
                  textDecoration={'underline'}
                >
                  Physical Benefits
                </Text>
                <List spacing={'0.5rem'}>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Harmonizes the physical and psychic
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Harmonizes the physical and the mental body
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Develops a quality of harmonious well-being
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Relaxes ,calms and clears the mind
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Improves concentration and creativity
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Improves stress-related disorders and anxiety
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Improves personal development
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Makes you more self-confident
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Prepares you mentally (e.g. for exams, contests,
                    competitions etc.)
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Balances the immune system
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Stimulates hormonal production of endorphin,
                    dopamine,serotonin
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Stimulates energy
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Improves sleep
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Improves the sense of hearing
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Normalizes the blood pressure
                  </ListItem>
                </List>
              </Box>
              <Box>
                <Text
                  fontWeight={'bold'}
                  pb={'1rem'}
                  textAlign={'center'}
                  textDecoration={'underline'}
                >
                  Spiritual Benefits
                </Text>
                <List spacing={'0.5rem'}>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Connects you with your Higher Self
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Helps you find where you need to be working on yourself
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Gives you visions
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Opens the doors where the trauma is stored
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Connects you with your subconscious mind
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Transmutes the old energies
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Clears the energetic/auric field
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Let’s the new information to come in
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Opens layers of your heart
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Makes you more sensitive
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Awakens your third eye
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillCircleFill}
                      color={'#FFAF36'}
                      width={'7px'}
                    />
                    Develops your clairvoyance
                  </ListItem>
                </List>
              </Box>
            </Box>
          ),
        },
      ],
    },
  ],
};

export default data;
