import React, { FC } from 'react';
import { CategoriesStoryblok } from '../../../component-types-sb';
import Link from 'next/link';
import { storyblokEditable } from '@storyblok/react/rsc';

interface Props {
  content: CategoriesStoryblok;
  mainColor: string;
}

const CategoriesContainer: FC<Props> = ({ content, mainColor }) => {
  return (
    <div
      className='flex flex-col p-6 bg-light-grey rounded-lg w-1/3 max-h-[450px]'
      {...storyblokEditable(content)}
    >
      <h2 className='text-[36px] mb-4'>{content?.title}</h2>
      <ul>
        {content?.items.map(({ _uid, text, link }) => (
          <li key={_uid} className='mb-4'>
            <Link
              href={`/${link?.cached_url}`}
              className={`text-${mainColor} hover:underline border-b flex border-[#e0e0e0] py-3 mb-4`}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesContainer;
