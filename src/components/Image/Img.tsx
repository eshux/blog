import React, { FC } from 'react';
import './Img.scss';

type Props = {
  src: string;
  w: number;
  h: number;
};

const Img: FC<Props> = ({ src, w, h }) => {
  return (
    <div
      className="image-wrapper"
      style={{
        paddingTop: `${(h / w) * 100}%`,
      }}
    >
      <img src={src} alt="" className="image" />
    </div>
  );
};

export default Img;