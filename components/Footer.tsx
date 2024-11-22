import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Link } from '@chakra-ui/react';
import React from 'react';
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsTwitterX,
  BsYoutube,
} from 'react-icons/bs';
import { MdCalendarMonth, MdLocationPin, MdWeb } from 'react-icons/md';

export default function Footer() {
  const hours: { day: string; time: string }[] = [
    { day: 'Monday', time: '10:30AM - 11:30PM' },
    { day: 'Tuesday', time: '10:30AM - 11:30PM' },
    { day: 'Wednesday', time: '10:30AM - 11:30PM' },
    { day: 'Thursday', time: '10:30AM - 11:30PM' },
    { day: 'Friday', time: '10:30AM - 11:30PM' },
    { day: 'Saturday', time: '10:30AM - 11:30PM' },
    { day: 'Sunday', time: '10:30AM - 11:30PM' },
  ];

  return (
    <>
      <Box borderTop={'1px solid rgba(255, 255, 255, 0.3)'} className="py-6">
        <div className="grid mx-auto max-w-[1080px] place-items-center p-4 grid-cols-1 md:grid-cols-3 gap-y-8 md:p-8 md:gap-x-4 md:gap-y-4">
          <div className="text-md text-justify max-w-80">
            Resonate with yourself is an energetic surgery to help you remove
            all your body's blocks through advanced massage alternated with
            sound therapy.
          </div>
          <div className="text-md text-justify max-w-80 w-80">
            <h2 className="flex place-items-center text-lg font-bold text-amber-400">
              <MdCalendarMonth className="size-5 pr-1" />
              Working Hours
            </h2>
            <div className="grid grid-cols-2">
              {hours.map(({ day, time }) => (
                <React.Fragment key={day}>
                  <div>{day}: </div>
                  <div>{time}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="text-md text-justify max-w-80">
            <h2 className="flex place-items-center text-lg font-bold text-amber-400">
              <MdLocationPin className="size-5 pr-1" /> Location
            </h2>
            <Link
              href="https://maps.app.goo.gl/GnwKoqgz3ireMdEw8"
              target="_blank"
              className="text-amber-600"
            >
              Pl. Eduardo Dato, Bailén-Miraflores, 29011 Málaga, Spain{' '}
              <ExternalLinkIcon className="pb-1" />
            </Link>

            <h2 className="flex place-items-center text-lg font-bold text-amber-400 pt-8 md:pt-2">
              <MdWeb className="size-5 pr-1" />
              Socials
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link href="https://x.com/ColomboRWY" target="_blank">
                <BsTwitterX className="size-5" />
              </Link>
              <Link
                href="https://www.instagram.com/resonate_with_yourself"
                target="_blank"
              >
                <BsInstagram className="size-5" />
              </Link>
              <Link
                href="https://youtube.com/@resonatewithyourself"
                target="_blank"
              >
                <BsYoutube className="size-5" />
              </Link>
              <Link
                href="https://www.tiktok.com/@resonatewithyourself"
                target="_blank"
              >
                <BsTiktok className="size-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/resonatewithyourself/"
                target="_blank"
              >
                <BsLinkedin className="size-5" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61568206042728"
                target="_blank"
              >
                <BsFacebook className="size-5" />
              </Link>
            </div>
            <div className="flex w-full justify-start pt-2 md:justify-center">
              <Link href="/contact">
                <button className="bg-amber-400 text-black px-4 py-2 rounded-md mt-4">
                  Contact me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Box>
      <div className="flex justify-center text-center text-md text-gray-500/60 pt-4 border-t border-t-gray-100/20 py-2">
        Created with ❤️ by
        <Link
          href="https://sixhei-tartari.vercel.app/"
          target="_blank"
          className="ml-2"
        >
          Sixhei Tartari
        </Link>
        <ExternalLinkIcon
          className="align-super ml-1"
          color={'rgb(251 191 36)'}
        />
      </div>
    </>
  );
}
