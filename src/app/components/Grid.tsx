import React, { FC } from 'react';
import { GridStoryblok } from '../../../component-types-sb';
import Image from 'next/image';
import GridList from './GridList';
import VideoPlayer from './VideoPlayer';
import Link from 'next/link';

interface Props {
  blok: GridStoryblok;
  mainColor: string;
}

const Grid: FC<Props> = ({ blok, mainColor }) => {
  const { items, styles } = blok;

  if (styles === 'variant-1') {
    return (
      <div className='grid w-full grid-cols-2 gap-5'>
        {items.map(
          (
            { component, title, headline, listItems, text, asset, linkTo },
            index
          ) => (
            <div
              className={`relative ${
                index === 0 ? 'col-span-2' : 'col-span-1'
              }`}
              key={index}
            >
              {component === 'grid-list' ? (
                <GridList
                  title={title}
                  listItems={listItems}
                  mainColor={mainColor}
                />
              ) : (
                <Link href={`/${linkTo?.cached_url as string}`}>
                  {asset?.filename?.includes('.mp4') ? (
                    <VideoPlayer src={asset.filename} poster='' />
                  ) : (
                    <Image
                      src={asset?.filename as string}
                      alt='grid-img'
                      width={index === 0 ? 715 : 350}
                      height={index === 0 ? 450 : 300}
                      quality={100}
                      className='w-full h-full'
                    />
                  )}
                  <div className='flex flex-col absolute bottom-4 z-10'>
                    <p
                      className={`bg-${mainColor} text-white text-2xl w-fit p-1`}
                    >
                      {headline}
                    </p>
                    {text && (
                      <p
                        className={`bg-${mainColor} text-white text-[16px] mt-4 w-fit p-1`}
                      >
                        {text}
                      </p>
                    )}
                  </div>
                </Link>
              )}
            </div>
          )
        )}
      </div>
    );
  }
  if (styles === 'variant-2') {
    return (
      <div className='grid w-full grid-cols-2 gap-5'>
        {items.map(
          (
            { title, listItems, headline, text, asset, component, linkTo },
            index
          ) => (
            <div
              className={`relative ${
                index === 2 ? 'col-span-2' : 'col-span-1'
              }`}
              key={index}
            >
              {component === 'grid-list' ? (
                <GridList
                  title={title}
                  listItems={listItems}
                  mainColor={mainColor}
                />
              ) : (
                <Link href={`/${linkTo?.cached_url as string}`}>
                  {asset?.filename?.includes('.mp4') ? (
                    <VideoPlayer src={asset.filename} poster='' />
                  ) : (
                    <Image
                      src={asset?.filename as string}
                      alt='grid-img'
                      width={index === 2 ? 715 : 350}
                      height={index === 2 ? 450 : 300}
                      quality={100}
                      className='w-full h-full'
                    />
                  )}
                  <div className='flex flex-col absolute bottom-4 z-10'>
                    <p
                      className={`bg-${mainColor} text-white text-2xl w-fit p-1`}
                    >
                      {headline}
                    </p>
                    {text && (
                      <p
                        className={`bg-${mainColor} text-white text-[16px] mt-4 w-fit p-1`}
                      >
                        {text}
                      </p>
                    )}
                  </div>
                </Link>
              )}
            </div>
          )
        )}
      </div>
    );
  }

  return (
    <div className='grid w-full grid-cols-4 lg:col-span-2 gap-5'>
      {items.map(
        (
          { headline, text, asset, component, title, listItems, linkTo },
          index
        ) => (
          <div
            className={`relative ${index === 1 ? 'col-span-2' : 'col-span-1'}`}
            key={index}
          >
            {component === 'grid-list' ? (
              <GridList
                title={title}
                listItems={listItems}
                mainColor={mainColor}
              />
            ) : (
              <Link href={`/${linkTo?.cached_url as string}`}>
                {asset?.filename?.includes('.mp4') ? (
                  <VideoPlayer src={asset.filename} poster='' />
                ) : (
                  <Image
                    src={asset?.filename as string}
                    alt='grid-img'
                    className='w-full h-full'
                    quality={100}
                    width={Number(asset?.filename?.split('/')[5].split('x')[0])}
                    height={Number(
                      asset?.filename?.split('/')[5].split('x')[1]
                    )}
                  />
                )}
                <div className='flex flex-col absolute bottom-4 z-10'>
                  <p
                    className={`bg-${mainColor} text-white text-2xl w-fit p-1`}
                  >
                    {headline}
                  </p>
                  {text && (
                    <p
                      className={`bg-${mainColor} text-white text-[16px] mt-4 w-fit p-1`}
                    >
                      {text}
                    </p>
                  )}
                </div>
              </Link>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Grid;
