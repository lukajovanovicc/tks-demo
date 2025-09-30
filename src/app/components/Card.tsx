import React, { FC } from 'react';
import { CardStoryblok } from '../../../component-types-sb';
import { storyblokEditable } from '@storyblok/react/rsc';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  item: CardStoryblok;
  mainColor: string;
}

const Card: FC<Props> = ({ item, mainColor }) => {
  return (
    <Link
      href={'/'}
      className='flex flex-col shadow-xl max-w-[300px]'
      {...storyblokEditable(item)}
    >
      <Image
        src={item.image?.filename as string}
        alt='card image'
        width={300}
        height={200}
        quality={100}
        className='h-[200px] object-cover'
      />
      <div className='flex flex-col bg-white p-4'>
        <h3 className='mb-4 text-[21px]'>{item.title}</h3>
        <p className='mb-4 text-[16px] opacity-50'>{item.description}</p>
        <div className='flex w-full justify-between'>
          <i></i>
          <p className={`text-${mainColor} text-[16px]`}>{item.section}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
