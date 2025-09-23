import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderStoryblok } from '../../../component-types-sb';
import Dropdown from './Dropdown';
import Navigation from './Navigation';

interface Props {
  blok: HeaderStoryblok;
  lang: string;
}

const Header: FC<Props> = ({ blok, lang }) => {
  const { head, navigation } = blok;
  return (
    <header>
      <div className='bg-blue w-full z-50 fixed top-0'>
        <div className='flex justify-between container mx-auto w-full items-center '>
          <div className='flex gap-12 items-end py-12'>
            <Link href={'/'}>
              <Image
                src={head[0].logo?.filename as string}
                width={140}
                height={110}
                quality={100}
                alt={head[0].logo?.alt as string}
                className='w-36 h-28'
              />
            </Link>
            <Link href={'/'}>
              <p className='font-semibold text-white text-2xl mb-1.5'>
                #next<span className='font-normal'>generation</span>steel
              </p>
            </Link>
          </div>
          <div className='flex flex-col'>
            <ul className='flex gap-4 text-white mb-4'>
              {head[0].metaLinks?.map(({ link, text, _uid }) => (
                <li key={_uid} className='hover:underline'>
                  <Link href={link?.cached_url as string}>{text}</Link>
                </li>
              ))}
              <li>
                <Dropdown lang={lang} />
              </li>
            </ul>

            <p className='text-white text-end text-2xl'>Steel</p>
          </div>
        </div>

        <Navigation items={navigation} />
      </div>
    </header>
  );
};

export default Header;
