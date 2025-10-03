import React from 'react';

interface HeaderProps {
  onGetEarlyAccess?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onGetEarlyAccess }) => {
  return (
    <header className="flex w-full justify-center items-center gap-[407px] border-b-gray-500 relative z-10 h-20 bg-slate-900 px-0 py-3 border-b-[0.25px] border-solid max-md:gap-[200px] max-md:px-5 max-md:py-3 max-sm:flex-col max-sm:gap-5 max-sm:h-auto max-sm:p-4">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/81a078e4743a9c05ce828a07f9ef69ace16872b3?width=174"
        alt="Dira Logo"
        className="w-[87px] h-14 shrink-0"
      />
      <nav className="flex items-center gap-6 max-md:gap-4 max-sm:hidden" role="navigation">
        <a
          href="#about"
          className="text-gray-400 text-center text-sm font-[510] hover:text-gray-300 transition-colors"
        >
          About
        </a>
        <a
          href="#docs"
          className="text-gray-400 text-center text-sm font-[510] hover:text-gray-300 transition-colors"
        >
          Docs
        </a>
        <a
          href="#community"
          className="text-gray-400 text-center text-sm font-[510] hover:text-gray-300 transition-colors"
        >
          Community
        </a>
      </nav>
      <button
        onClick={onGetEarlyAccess}
        className="flex items-center gap-2.5 rounded bg-[#1A73EB] p-2.5 max-sm:-order-1 hover:bg-[#1557c7] transition-colors"
        aria-label="Get early access to Dira"
      >
        <span className="text-gray-50 text-center text-base font-normal">
          Get early access
        </span>
      </button>
    </header>
  );
};
