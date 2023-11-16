export type Video = { file?: Blob; path?: string };
export type Image = { id: number; file: string };
export type Paragraph = {
  title?: string;
  subtitle?: string;
  text: string[];
  testimonial?: boolean;
};
export type Gallery = Image[];

export enum ContentType {
  VIDEO = 1,
  IMAGE = 2,
  GALLERY = 3,
  PARAGRAPH = 4,
}

export type ContentData = Video | Image | Gallery | Paragraph;

export type Project = {
  id: number | string;
  title: string;
  description: string;
  thumbnail: string;
  content: { type: ContentType; data: ContentData }[];
};

export type Quotes = {
  id: number;
  name: string;
  position: string;
  quote: string;
  url?: string;
  svg: JSX.Element;
  active: boolean;
};
