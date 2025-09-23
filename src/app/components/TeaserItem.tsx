import React, { FC } from 'react';
import { TeaserItemStoryblok } from '../../../component-types-sb';
import Image from 'next/image';
import Link from 'next/link';
import { storyblokEditable } from '@storyblok/react/rsc';

interface Props {
  content: TeaserItemStoryblok;
}

const TeaserItem: FC<Props> = ({ content }) => {
  return (
    <Link
      href={content.linkTo.cached_url as string}
      className='flex flex-col max-w-[470px] max-h-[500px] group'
      {...storyblokEditable(content)}
    >
      <div className='relative overflow-hidden'>
        <Image
          src={content.image?.filename as string}
          alt='teaser image'
          width={420}
          height={250}
          className='duration-600 transform group-hover:scale-110 w-full'
        />
      </div>
      <div className='flex flex-col py-4 px-2 bg-white h-1/2'>
        <p className='text-xs opacity-50'>{content.label}</p>
        <p className='my-4 text-black text-2xl'>{content.title}</p>
        <p className='text-[16px] opacity-50'>{content.text}</p>
      </div>
    </Link>
  );
};

export default TeaserItem;
