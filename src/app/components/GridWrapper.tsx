import React, { FC } from 'react';
import { GridWrapperStoryblok } from '../../../component-types-sb';
import Grid from './Grid';
import { storyblokEditable } from '@storyblok/react/rsc';

interface Props {
  blok: GridWrapperStoryblok;
}

const GridWrapper: FC<Props> = ({ blok }) => {
  const { grids } = blok;

  return (
    <div
      className='grid w-full grid-cols-1 gap-5 mb-5 lg:grid-cols-2 p-1'
      {...storyblokEditable(blok)}
    >
      {grids?.map((item, index) => (
        <Grid key={index} blok={item} />
      ))}
    </div>
  );
};

export default GridWrapper;
