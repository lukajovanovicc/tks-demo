import React, { FC } from 'react';
import { GridListItemStoryblok } from '../../../component-types-sb';
import Link from 'next/link';

interface Props {
  title: string;
  mainColor: string;
  listItems: GridListItemStoryblok[];
}

const GridList: FC<Props> = ({ title, listItems, mainColor }) => {
  return (
    <div
      className={`bg-${mainColor} h-full w-full flex flex-col p-4 text-white`}
    >
      <p className='text-white mb-2.5 text-2xl'>{title}</p>
      {listItems.map(({ _uid, text, link }) => (
        <Link
          href={link.cached_url as string}
          key={_uid}
          className='text-white border-white border-b py-3 text-[16px] hover:underline'
        >
          {text}
        </Link>
      ))}
    </div>
  );
};

export default GridList;
