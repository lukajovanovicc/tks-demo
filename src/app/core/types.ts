export interface Story {
  id: number;
  name: string;
  slug: string;
  full_slug: string;
  children?: Story[];
  content?: {
    pageColor?: string;
    [key: string]: any;
  };
}
