import React, { FC } from 'react';
import { FooterStoryblok } from '../../../component-types-sb';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  blok: FooterStoryblok;
}

const Footer: FC<Props> = ({ blok }) => {
  const { content, metaInfo, socials } = blok;
  return (
    <footer className='flex flex-col'>
      <div className='w-full bg-blue'>
        <div className='flex w-full justify-between mx-auto container py-12'>
          <div className='flex flex-col w-3/4'>
            <p className='mb-6 text-white text-2xl'>{content[0].title}</p>
            <div className='flex gap-10'>
              {content[0].groups.map(({ links, _uid }) => (
                <ul key={_uid} className='w-full'>
                  {links?.map(({ _uid, text, link }) => (
                    <li
                      key={_uid}
                      className='border-b border-white py-2 text-white'
                    >
                      <Link href={link?.cached_url as string}>{text}</Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div className='flex flex-col'>
            <p className='text-2xl mb-4 text-white'>{socials[0].label}</p>
            <Link className='text-white font-semibold' href={socials[0].link}>
              {socials[0].link}
            </Link>
            <div className='flex gap-4 items-center mt-5'>
              {socials[0].media?.map(({ _uid, image }) => (
                <Link href={'/'} key={_uid}>
                  <div className='w-11 h-11 relative'>
                    <Image
                      className='object-cover w-full h-full'
                      src={image?.filename as string}
                      alt={'social icon'}
                      height={42}
                      width={42}
                      quality={100}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between bg-white py-4 w-full container mx-auto'>
        <p className='opacity-50'>{metaInfo[0].copyright}</p>
        <div className='flex'>
          {metaInfo[0].links.map(({ link, text }, index) => (
            <Link
              href={link?.cached_url as string}
              key={index}
              className={`${
                index !== 4 ? 'border-r border-black' : ''
              } text-blue px-3`}
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
