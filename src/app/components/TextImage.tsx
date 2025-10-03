import React, { FC, JSXElementConstructor, ReactElement } from 'react';
import { TextImageStoryblok } from '../../../component-types-sb';
import { StoryblokRichText, StoryblokRichTextNode } from '@storyblok/react';
import Image from 'next/image';

interface Props {
  item: TextImageStoryblok;
}

const TextImage: FC<Props> = ({ item }) => {
  return (
    <div className='mb-4 flex gap-5'>
      <div className='flex flex-col gap-4 w-1/2'>
        <h3 className='text-2xl'>{item.title}</h3>
        <StoryblokRichText
          doc={
            item.text as StoryblokRichTextNode<
              ReactElement<unknown, string | JSXElementConstructor<any>>
            >
          }
        />
      </div>

      <Image
        src={item.image?.filename as string}
        alt={item.image?.alt as string}
        width={315}
        height={250}
        quality={100}
        className='w-1/2 h-full'
      />
    </div>
  );
};

export default TextImage;
