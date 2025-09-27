declare module 'next/link' {
  import * as React from 'react';
  import { UrlObject } from 'url';

  type Url = string | UrlObject;

  interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: Url;
    as?: Url;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    locale?: string | false;
    children?: React.ReactNode;
  }

  const Link: React.FC<LinkProps>;
  export default Link;
}