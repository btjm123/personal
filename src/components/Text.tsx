import React from 'react';

interface TextProps {
  children: React.ReactNode;
}

const FirstHeading: React.FC<TextProps> = ({ children }) => {
  return (
    <h1 className="font-bold font-sans text-6xl text-black mb-10">
      {children}
    </h1>
  );
};

const SecondHeading: React.FC<TextProps> = ({ children }) => {
  return (
    <h2 className="font-bold font-sans text-4xl text-black mb-10 tracking-widest leading-snug">
      {children}
    </h2>
  );
};

const ThirdHeading: React.FC<TextProps> = ({ children }) => {
  return (
    <h3 className="font-bold font-sans text-3xl text-black mb-10 tracking-wider leading-relaxed">
      {children}
    </h3>
  );
};

const FourthHeading: React.FC<TextProps> = ({ children }) => {
  return (
    <h4 className="font-bold font-sans text-2xl text-black">{children}</h4>
  );
};

const SubHeading: React.FC<TextProps> = ({ children }) => {
  return (
    <p className="font-bold font-sans text-lg text-slate-800 mb-10">
      {children}
    </p>
  );
};

export { FirstHeading, SecondHeading, ThirdHeading, FourthHeading, SubHeading };
