import React, { FC } from 'react';

interface Props {
  text: string;
}

const Button: FC<Props> = ({ text }) => {
  return (
    <button className='bg-blue hover:bg-dark-blue hover:text-blue px-6 py-3 text-white w-fit text-[16px]'>
      {text}
    </button>
  );
};

export default Button;
