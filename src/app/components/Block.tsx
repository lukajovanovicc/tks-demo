import { FC, JSXElementConstructor, ReactElement } from 'react';
import {
  ParagraphStoryblok,
  StageStoryblok,
  TextImageStoryblok,
} from '../../../component-types-sb';
import { StoryblokRichText, StoryblokRichTextNode } from '@storyblok/react';
import TextImage from './TextImage';
import Stage from './Stage';

interface Props {
  item: ParagraphStoryblok | TextImageStoryblok | StageStoryblok;
}

const Block: FC<Props> = ({ item }) => {
  if (item.component === 'paragraph') {
    return (
      <div className='mb-8'>
        <StoryblokRichText
          doc={
            item.text as StoryblokRichTextNode<
              ReactElement<unknown, string | JSXElementConstructor<any>>
            >
          }
        />
      </div>
    );
  } else if (item.component === 'text-image') {
    return <TextImage item={item} />;
  } else return <Stage item={item} />;
};

export default Block;
