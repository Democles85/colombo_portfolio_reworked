import Link from 'next/link';
import { GeneralData } from '../types/general-data.interface';

export const homeData: GeneralData[] = [
  {
    id: 1,
    paragraph: (
      <>
        <span style={{ color: '#FFAF36', fontWeight: 'bold' }}>
          Resonate with Yourself
        </span>{' '}
        is a sacred sanctuary —a temple where I guide each person to reconnect
        with their inner essence, helping them to resonate with their true self
        and activate their own healing, for the cure lies within. Rooted in a
        holistic therapy, I engage the physical, emotional, mental, and
        spiritual layers, treating them as one interconnected system.
      </>
    ),
  },
  {
    id: 2,
    paragraph: (
      <>
        <span style={{ color: '#FFAF36', fontWeight: 'bold' }}>
          Core{' '}
          <Link href="/services" style={{ textDecoration: 'underline' }}>
            techniques
          </Link>{' '}
        </span>
        include Advanced Bodywork Massage, De-Armoring, Authentic Massage,
        Trauma Clearing, Emotional Release, Breathwork, and Sound Healing
        —advanced practices designed to unlock your body’s deepest potential.
        Each session is a unique journey, crafted with heart and intention to
        honor your individuality. I am here with true care and dedication, using
        only the techniques that resonate deeply with your body and spirit in a
        way that is entirely yours, gifting pure, not-alike sessions despite
        having offered more than{' '}
        <Link
          href="/testimonials"
          style={{
            color: '#ffaf36',
            fontWeight: 'bold',
            textDecoration: 'underline',
          }}
        >
          1500 sessions
        </Link>
        .
      </>
    ),
  },
  {
    id: 3,
    paragraph: (
      <>
        <Link
          href="/services"
          style={{
            color: '#ffaf36',
            fontWeight: 'bold',
            textDecoration: 'underline',
          }}
        >
          I believe
        </Link>{' '}
        that our body holds the full story of our life. It's our most intimate
        memory keeper. Everything that has ever happened to and around us is
        encoded in our physical being, shaping us in response to life's journey.
        If your life has flowed with joy and ease, that joy is woven into the
        very fabric of your being; but if it's been marked by pain or struggle,
        those energies are held within you, waiting to be seen, heard, and
        released. The most effective way to approach your body is to cleanse,
        liberate, expand, and bring more joy and love into it.
      </>
    ),
  },
  {
    id: 4,
    paragraph: (
      <>
        <span style={{ color: '#ffaf36', fontWeight: 'bold' }}>
          I intuitively integrate{' '}
        </span>
        energy, awareness, massage, de-armoring, breathwork, and sound healing
        through my energy field, alchemically unify all these elements to offer
        you a profoundly deep & advanced session. Depending on the energy level
        and needs of your body, I design each session for you. Some bodies are
        already in balance, with little to unlock, release, or clear, and for
        them, our focus is on uplifting the energy, allowing the vibration of
        the body to create a deeply unique experience.
      </>
    ),
  },
  {
    id: 5,
    paragraph: (
      <>
        <span style={{ color: '#ffaf36', fontWeight: 'bold' }}>
          In the initial sessions
        </span>
        , when the body is on an energetic density, it may release deeply held
        pain or trauma. As we move forward in the subsequent sessions, I guide
        you in cultivating your energetic body, allowing every cell to vibrate
        freely, embracing its natural state of liberation. This transformation
        infuses your being with new energy, fostering a profound cellular
        experience of self-love, joy, and growth, which then radiates outward,
        bringing greater vitality, clarity, and success into your life.
      </>
    ),
  },
  {
    id: 6,
    paragraph: (
      <>
        <span style={{ color: '#ffaf36', fontWeight: 'bold' }}>
          The work is designed
        </span>{' '}
        to help you release the weight of past energies, guiding you towards
        falling in love with yourself, your heart, and your sensuality, while
        gently clearing any lingering shame or guilt. Through this process, you
        are invited to experience life more fully, becoming more alive, present,
        and productive. After years of dedicated practice, study, and deep
        self-work, I’ve developed highly authentic, advanced, and enlivening
        sessions.
      </>
    ),
  },
  {
    id: 7,
    paragraph: (
      <>
        <span style={{ color: '#ffaf36', fontWeight: 'bold' }}>
          These sessions go deep
        </span>
        , engaging the body’s energetic and biological rhythms and typically
        lasting between 2 to 3 hours, sometimes extending up to 4 if energy
        calls for it. This is an in-depth and conscious energetic surgery
        infused with love, responsibility, and seriousness, designed for anyone
        ready to resonate with themselves through Resonate with Yourself.
      </>
    ),
  },
  {
    id: 8,
    paragraph: (
      <>
        <span style={{ color: '#ffaf36', fontWeight: 'bold' }}>
          My fixed rate{' '}
          <Link href="/pricing" style={{ textDecoration: 'underline' }}>
            200 euros (€)
          </Link>
        </span>
        , though donations are welcomed as a sign of gratitude. I offer advanced
        sessions for those who seek a deep experience and honor that money holds
        less importance. If finances are a concern, please reach out so we can
        explore a suitable solution.
      </>
    ),
  },
  {
    id: 9,
    paragraph: (
      <>
        Due to the focused nature of this work, I offer only two sessions per
        day. For this reason, it is strongly recommended to{' '}
        <Link
          href="/contact"
          style={{
            color: '#ffaf36',
            fontWeight: 'bold',
            textDecoration: 'underline',
          }}
        >
          secure your session
        </Link>{' '}
        and avoid last-minute cancellations.
      </>
    ),
  },
];
