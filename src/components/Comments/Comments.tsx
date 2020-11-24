import React, { FC } from 'react';
import './Comments.scss';

const Comments:FC = ({ children }) => {
  return (
    <div className="wrapper">
      {children}
    </div>
  );
};

export default Comments;
