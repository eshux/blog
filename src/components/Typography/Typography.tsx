import React, { FC } from 'react';
import './Typography.scss';

// type Props = {
//   className?: string;
// };

export const H1: FC = ({ children }) => {
  return <h1 className="heading1">{children}</h1>;
};

export const H2: FC = ({ children }) => {
  return <h2 className="heading2">{children}</h2>;
};

export const H3: FC = ({ children }) => {
  return <h3 className="heading3">{children}</h3>;
};

export const P: FC = ({ children }) => {
  return <p className="paragraph">{children}</p>;
};

export const SingleLine: FC = ({ children }) => {
  return <span className="single-line-text">{children}</span>;
};
