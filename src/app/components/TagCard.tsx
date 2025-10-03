import React, { FC } from 'react';
import { storyblokEditable } from '@storyblok/react/rsc';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  item: any;
  mainColor: string;
  link: string;
  tags: string[];
}

const TagCard: FC<Props> = ({ item, mainColor, link, tags }) => {
  return (
    <Link
      href={`/${link}`}
      className='flex flex-col shadow-lg shadow-[#0000004d] max-w-[300px]'
      {...storyblokEditable(item)}
    >
      <Image
        src={item.poster?.filename as string}
        alt='TagCard image'
        width={300}
        height={200}
        quality={100}
        className='min-h-[200px] object-cover'
      />
      <div className='flex flex-col justify-between h-full bg-white p-4'>
        <h3 className='mb-4 text-[21px]'>{item.title}</h3>
        <div className='flex w-full justify-between items-end'>
          <i className={`text-${mainColor}`}>→</i>
          <div className='flex flex-col gap-2 items-end'>
            {tags.map((tag, index) => {
              if (tag !== 'all-categories') {
                return (
                  <p
                    key={index}
                    className={`text-${mainColor} capitalize text-end text-[16px]`}
                  >
                    {tag.split('-').join(' & ')}
                  </p>
                );
              }
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TagCard;
