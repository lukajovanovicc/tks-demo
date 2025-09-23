import { getStoryblokApi } from '@/app/core/storyblok';
import type { PropsWithChildren } from 'react';

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  getStoryblokApi();
  return children;
};
