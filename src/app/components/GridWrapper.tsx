import React, { FC } from 'react';
import { GridWrapperStoryblok } from '../../../component-types-sb';
import Grid from './Grid';
import { storyblokEditable } from '@storyblok/react/rsc';

interface Props {
  blok: GridWrapperStoryblok;
  mainColor: string;
}

const GridWrapper: FC<Props> = ({ blok, mainColor }) => {
  const { grids } = blok;

  return (
    <div
      className='grid w-full grid-cols-1 gap-5 mb-5 lg:grid-cols-2 p-1'
      {...storyblokEditable(blok)}
    >
      {grids?.map((item, index) => (
        <Grid key={index} blok={item} mainColor={mainColor} />
      ))}
    </div>
  );
};

export default GridWrapper;
