import React, { FC } from 'react';
import './Post.scss';
import { H2 } from '../Typography/Typography';

type Props = {
  title: string,
  onClick?: () => void;
};

const Post:FC<Props> = ({ title, onClick }) => {
  return (
    <button type='button' className="post" onClick={onClick}>
      <H2>{title}</H2>
    </button>
  );
};

export default Post;
