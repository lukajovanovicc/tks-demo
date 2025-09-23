import { StoryblokStory } from '@storyblok/react/rsc';
import { FC } from 'react';
import { getStoryblokApi } from './core/storyblok';

interface Props {
  params: any;
}
const fetchSlug = async () => {
  const client = getStoryblokApi();

  const response = await client.getStory(`home`, {
    version: 'published',
  });
  return response.data.story;
};

const HomePage: FC<Props> = async () => {
  const data = await fetchSlug();
  return (
    <>
      <StoryblokStory story={data} />
    </>
  );
};
export default HomePage;
