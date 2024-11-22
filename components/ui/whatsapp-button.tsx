import Link from 'next/link';
import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';

interface WhatsAppButtonProps {
  phoneNumber: number;
}

const WhatsAppPulseButton = ({ phoneNumber }: WhatsAppButtonProps) => {
  return (
    <Link
      href={`https://wa.me/${phoneNumber}`}
      className="fixed bottom-5 right-5 bg-[#25d366] text-white p-[12px] flex justify-center items-center rounded-full text-[40px]
                 animate-pulse-custom hover:animate-none
                 focus:outline-none focus:ring-2 focus:ring-green-500"
      target="_blank"
    >
      <BsWhatsapp className="size-10" />
    </Link>
  );
};

export default WhatsAppPulseButton;
