import React from 'react';
import { EmailSignup } from './EmailSignup';

interface HeroSectionProps {
  onEmailSubmit?: (email: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onEmailSubmit }) => {
  return (
    <section className="flex w-[551px] flex-col items-center gap-12 absolute -translate-x-2/4 z-10 left-2/4 top-[199px] max-md:w-[90%] max-md:max-w-[500px] max-md:top-[150px] max-sm:w-[95%] max-sm:gap-8 max-sm:top-[120px]">
      <div className="flex flex-col items-center gap-9 w-full">
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex justify-center items-center gap-2.5 border border-gray-500 p-2.5 rounded-3xl border-solid">
            <span className="text-gray-500 text-center text-base font-[510]">
              Join our community
            </span>
          </div>
          <h1 className="w-[543px] text-gray-50 text-center text-[64px] font-[510] capitalize max-md:text-5xl max-md:w-full max-sm:text-4xl max-sm:leading-[1.2]">
            Get early access
            <br />
            to<span className="text-[#1A73EB]"> dira'</span>
          </h1>
          <p className="text-gray-400 text-center text-base font-normal leading-[22px]">
            We are developing the next-generation protocol on Solana that
            bridges traditional finance and decentralized finance through
            undercollateralized lending.
          </p>
        </div>
        <EmailSignup onSubmit={onEmailSubmit} />
      </div>
    </section>
  );
};
