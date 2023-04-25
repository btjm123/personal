import React from 'react';

interface TextProps {
  children: React.ReactNode;
  style?: string;
}

const FirstHeading: React.FC<TextProps> = ({ children, style = '' }) => {
  return (
    <h1
      className={
        'font-bold font-sans sm:text-5xl md:text-5xl lg:text-6xl text-black mb-10 ' +
        style
      }
    >
      {children}
    </h1>
  );
};

const SecondHeading: React.FC<TextProps> = ({ children, style = '' }) => {
  return (
    <h2
      className={
        'font-bold font-sans sm:text-3xl md:text-3xl lg:text-4xl text-black mb-10 tracking-widest leading-snug ' +
        style
      }
    >
      {children}
    </h2>
  );
};

const ThirdHeading: React.FC<TextProps> = ({ children, style = '' }) => {
  return (
    <h3
      className={
        'font-bold font-sans sm:text-2xl md:text-2xl lg:text-3xl text-black mb-10 tracking-wider leading-relaxed ' +
        style
      }
    >
      {children}
    </h3>
  );
};

const FourthHeading: React.FC<TextProps> = ({ children, style = '' }) => {
  return (
    <h4
      className={
        'font-bold font-sans sm:text-xl md:text-xl lg:text-2xl text-black leading-relaxed' +
        style
      }
    >
      {children}
    </h4>
  );
};

const SubHeading: React.FC<TextProps> = ({ children }) => {
  return (
    <p className="font-bold font-sans sm:text-base md:text-base lg:text-lg text-slate-800 mb-8 ">
      {children}
    </p>
  );
};

export { FirstHeading, SecondHeading, ThirdHeading, FourthHeading, SubHeading };
