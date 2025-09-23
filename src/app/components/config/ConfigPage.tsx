import { StoryblokServerComponent } from '@storyblok/react/rsc';
import React, { FC } from 'react';
import { ConfigPageStoryblok } from '../../../../component-types-sb';

interface Props {
  blok: ConfigPageStoryblok;
  page: string;
}

const ConfigPage: FC<Props> = ({ blok }) => {
  const { content } = blok;

  return (
    <>
      {content ? (
        <div>
          {content.map((nestedBlok) => (
            <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ConfigPage;
