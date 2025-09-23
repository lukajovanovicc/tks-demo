import React, { FC } from 'react';
import { TeaserStoryblok } from '../../../component-types-sb';
import { storyblokEditable } from '@storyblok/react/rsc';
import TeaserItem from './TeaserItem';

interface Props {
  blok: TeaserStoryblok;
}

const Teaser: FC<Props> = ({ blok }) => {
  const { items } = blok;
  return (
    <section className='bg-grey py-7.5' {...storyblokEditable(blok)}>
      <div className='grid grid-cols-2 lg:grid-cols-3 container gap-5 mx-auto'>
        {items.map((item, index) => (
          <TeaserItem key={index} content={item} />
        ))}
      </div>
    </section>
  );
};

export default Teaser;
