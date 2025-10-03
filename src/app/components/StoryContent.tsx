import React, { FC } from 'react';
import { StoryContentStoryblok } from '../../../component-types-sb';
import Block from './Block';
import { storyblokEditable } from '@storyblok/react/rsc';

interface Props {
  blok: StoryContentStoryblok;
}

const StoryContent: FC<Props> = ({ blok }) => {
  const { title, contentBlocks } = blok;
  return (
    <section className='container mx-auto w-full' {...storyblokEditable(blok)}>
      <h1 className='text-[42px] mb-6'>{title}</h1>
      {contentBlocks?.map((item, index) => (
        <Block key={index} item={item} />
      ))}
    </section>
  );
};

export default StoryContent;
