import React, { useCallback } from 'react';
import { Header } from './Header';
import { HeroSection } from './HeroSection';

export const WaitlistPage: React.FC = () => {
  const handleEmailSubmit = useCallback(async (email: string) => {
    // Here you would typically integrate with your backend API
    // For now, we'll just show a success message
    try {
      console.log('Submitting email to waitlist:', email);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Thank you for joining our waitlist! We\'ll be in touch soon.');
    } catch (error) {
      console.error('Error submitting to waitlist:', error);
      alert('There was an error joining the waitlist. Please try again.');
    }
  }, []);

  const handleGetEarlyAccess = useCallback(() => {
    // Scroll to the email signup form
    const heroSection = document.querySelector('section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="w-full min-h-screen relative overflow-x-hidden bg-slate-900 max-sm:flex max-sm:flex-col">
      {/* Background Image */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/2ac142ba8eaf2c9ff20102af02fb814b94408991?width=2636"
        alt=""
        className="w-[1318px] h-[1054px] absolute top-[-30px] z-0 left-[122px] max-sm:hidden"
        aria-hidden="true"
      />
      
      <Header onGetEarlyAccess={handleGetEarlyAccess} />
      
      <main className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:px-4 max-sm:pt-8 max-sm:pb-12 max-sm:gap-12">
        <HeroSection onEmailSubmit={handleEmailSubmit} />
        
        {/* Decorative Cards - Desktop */}
        <div 
          className="w-[1109px] h-[239px] absolute z-[5] left-1/2 -translate-x-1/2 top-[710px] max-md:w-[90%] max-md:top-[600px] max-sm:hidden"
          aria-hidden="true"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/2b35e314c8f66377f13bffc6d43226fd41602ce9?width=822"
            alt=""
            className="w-[411px] h-[200px] absolute left-0 top-5 max-md:w-[35%] max-md:h-auto"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/2a2d3ecdde695d1a2d4e114e4a08169583855e4d?width=716"
            alt=""
            className="w-[358px] h-[239px] backdrop-blur-[100px] absolute left-[379px] top-0 max-md:w-[30%] max-md:h-auto max-md:left-[32%]"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/655a0cb171f76cbd3ad86865c5c9acfa0fbbb6c6?width=766"
            alt=""
            className="w-[383px] h-[186px] absolute left-[726px] top-[27px] max-md:w-[35%] max-md:h-auto max-md:left-[65%]"
          />
        </div>
        
        {/* Decorative Cards - Mobile (Column Layout) */}
        <div 
          className="hidden max-sm:flex max-sm:flex-col max-sm:gap-6 max-sm:w-full max-sm:relative max-sm:mt-8 max-sm:z-[5]"
          aria-hidden="true"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/2b35e314c8f66377f13bffc6d43226fd41602ce9?width=822"
            alt=""
            className="w-full h-auto rounded-lg"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/2a2d3ecdde695d1a2d4e114e4a08169583855e4d?width=716"
            alt=""
            className="w-full h-auto rounded-lg backdrop-blur-[100px]"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/655a0cb171f76cbd3ad86865c5c9acfa0fbbb6c6?width=766"
            alt=""
            className="w-full h-auto rounded-lg"
          />
        </div>
      </main>
    </div>
  );
};
