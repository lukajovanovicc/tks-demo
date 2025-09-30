import React, { FC } from 'react';
import { ContactCardStoryblok } from '../../../component-types-sb';
import Image from 'next/image';
import { storyblokEditable } from '@storyblok/react/rsc';

interface Props {
  card: ContactCardStoryblok;
}

const ContactCard: FC<Props> = ({ card }) => {
  return (
    <div
      className='flex text-white flex-col gap-2.5 max-w-[265px] max-h-[600px] justify-between'
      {...storyblokEditable(card)}
    >
      <p className='text-2xl'>{card.title}</p>
      <p className='text-2xl'>{card.name}</p>
      <p className='text-[16px]'>{card.description}</p>
      <Image
        src={card.image?.filename as string}
        alt='card image'
        width={265}
        height={290}
        className='my-6'
      />
      <p className='text-[16px]'>{card.phone}</p>
    </div>
  );
};

export default ContactCard;
