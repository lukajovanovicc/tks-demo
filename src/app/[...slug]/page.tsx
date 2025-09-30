import { StoryblokStory } from '@storyblok/react/rsc';
import { FC } from 'react';
import { getStoryblokApi } from '../core/storyblok';

interface Props {
  params: any;
}
const fetchSlug = async (story: string[], lang: string) => {
  const client = getStoryblokApi();

  const response = await client.getStory(
    `${story.length > 1 ? story.join('/') : story}`,
    {
      version: 'draft',
      language: lang,
    }
  );
  return response.data.story;
};

const SlugPage: FC<Props> = async ({ params }) => {
  const { slug } = await params;
  const data = await fetchSlug(
    slug[0] === 'de' ? slug.slice(1) : slug,
    slug[0] === 'de' ? slug[0] : 'default'
  );
  return (
    <>
      <StoryblokStory story={data} page={slug[0]} />
    </>
  );
};
export default SlugPage;
