import { StoryblokServerComponent } from '@storyblok/react/rsc';
import { FC } from 'react';
import { PageStoryblok } from '../../../../component-types-sb';
import { getStoryblokApi } from '../../core/storyblok';
import Footer from '../Footer';
import Header from '../Header';

interface Props {
  blok: PageStoryblok;
  page: string;
}

const fetchConfig = async (lang: string) => {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.getStory('config/', {
    version: 'draft',
    language: lang,
  });

  return data.story;
};

const Page: FC<Props> = async ({ blok, page }) => {
  const { body } = blok;
  const lang = page !== 'de' ? 'en' : 'de';
  const { content } = await fetchConfig(lang);
  return (
    <>
      {body ? (
        <>
          <Header blok={content.content[0]} lang={lang} />
          <main className='mt-[300px]'>
            {body.map((nestedBlok) => (
              <div key={nestedBlok._uid}>
                <StoryblokServerComponent blok={nestedBlok} />
              </div>
            ))}
          </main>
          <Footer blok={content.content[1]} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default Page;
