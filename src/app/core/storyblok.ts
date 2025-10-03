import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import Page from '../components/config/Page';
import ConfigPage from '../components/config/ConfigPage';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Button from '../components/Button';
import Teaser from '../components/Teaser';
import Grid from '../components/Grid';
import GridWrapper from '../components/GridWrapper';
import TagsContainer from '../components/TagsContainer';
import ContactWrapper from '../components/ContactWrapper';
import StoryContent from '../components/StoryContent';

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    'config-page': ConfigPage,
    header: Header,
    footer: Footer,
    navigation: Navigation,
    button: Button,
    'grid-wrapper': GridWrapper,
    'contact-wrapper': ContactWrapper,
    'story-content': StoryContent,
    'tags-container': TagsContainer,
    grid: Grid,
    teaser: Teaser,
  },
  enableFallbackComponent: true,
  apiOptions: {
    region: 'eu',
  },
});
