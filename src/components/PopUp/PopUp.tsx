import React, { FC } from 'react';
import './PopUp.scss';

type Props = {
  onClick: () => void;
};

const PopUp: FC<Props> = ({ onClick }) => {
  return (
    <div className="pop-up">
      <div className="pop-up-wrapper">
        <h1>Welcome to My Blog</h1>
        <button className="close-btn" type="button" onClick={onClick}>
          x
        </button>
      </div>
    </div>
  );
};

export default PopUp;
