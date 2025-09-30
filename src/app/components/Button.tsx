import React, { FC } from 'react';

interface Props {
  text: string;
  mainColor: string;
}

const Button: FC<Props> = ({ text, mainColor }) => {
  return (
    <button
      className={`bg-${mainColor} hover:bg-dark-blue hover:text-blue px-6 py-3 text-white w-fit text-[16px]`}
    >
      {text}
    </button>
  );
};

export default Button;
