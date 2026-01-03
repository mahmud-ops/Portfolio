declare module '@splidejs/react-splide' {
  import { ComponentType } from 'react';
  import { Options } from '@splidejs/splide';

  export interface SplideProps {
    options?: Options;
    hasTrack?: boolean;
    'aria-label'?: string;
    children?: React.ReactNode;
  }

  export interface SplideSlideProps {
    children?: React.ReactNode;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
  export { Options };
}