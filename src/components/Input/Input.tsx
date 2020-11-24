import React, { FC } from 'react';
import './Input.scss';

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  text: string;
};

const Input: FC<Props> = ({ value, onChange, onClick, text }) => {
  return (
    <div className="input-wrapper">
      <input className="input" type="text" value={value} onChange={onChange} placeholder='Add a comment..' />
      <button type="button" className="button-submit" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Input;
