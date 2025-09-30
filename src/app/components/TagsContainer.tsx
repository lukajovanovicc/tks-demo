import React, { FC } from 'react';
import { TagsContainerStoryblok } from '../../../component-types-sb';
import Card from './Card';
import CategoriesContainer from './CategoriesContainer';
import { storyblokEditable } from '@storyblok/react/rsc';

interface Props {
  blok: TagsContainerStoryblok;
  mainColor: string;
}

const TagsContainer: FC<Props> = ({ blok, mainColor }) => {
  const { cards, categories, title } = blok;
  return (
    <div
      className='flex container mx-auto gap-8 py-6'
      {...storyblokEditable(blok)}
    >
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 w-2/3'>
        <h1 className='text-4xl text-black col-span-2 lg:col-span-3'>
          {title}
        </h1>
        {cards.map((card, index) => (
          <Card key={index} item={card} mainColor={mainColor} />
        ))}
      </div>
      <CategoriesContainer content={categories[0]} mainColor={mainColor} />
    </div>
  );
};

export default TagsContainer;
