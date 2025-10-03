import React, { FC } from 'react';
import { TagsContainerStoryblok } from '../../../component-types-sb';
import CategoriesContainer from './CategoriesContainer';
import { storyblokEditable } from '@storyblok/react/rsc';
import { getStoryblokApi } from '../core/storyblok';
import TagCard from './TagCard';

interface Props {
  blok: TagsContainerStoryblok;
  mainColor: string;
  lang: string;
}

const getCards = async (lang: string, section: string) => {
  const client = getStoryblokApi();

  const response = await client.getStories({
    version: 'draft',
    language: lang,
    with_tag: section,
  });
  const stories = response.data.stories.filter((story) => !story.is_startpage);

  return stories;
};

const TagsContainer: FC<Props> = async ({ blok, mainColor, lang }) => {
  const { categories, title } = blok;
  const section = title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-');

  const cards = await getCards(lang, section);

  return (
    <div
      className='flex container mx-auto gap-8 py-6'
      {...storyblokEditable(blok)}
    >
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 w-2/3'>
        <h1 className='text-4xl text-black col-span-2 lg:col-span-3'>
          {title}
        </h1>
        {cards.map(({ content, full_slug, tag_list }, index) => (
          <TagCard
            key={index}
            item={content.body[0]}
            mainColor={mainColor}
            link={full_slug}
            tags={tag_list}
          />
        ))}
      </div>
      <CategoriesContainer content={categories[0]} mainColor={mainColor} />
    </div>
  );
};

export default TagsContainer;
