import React, { FC } from 'react';
import Head from 'next/head';
import { title, keywords, description } from '@/lib/seo';
import Navbar from './Navbar';

interface Props {
  // any props that come into the component
}

const Layout: FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='icon' type='image/png' href='/portfolio-favicon.svg' />
        <title>{title}</title>
      </Head>
      <Navbar />
      <div className='container'>
        {children}
      </div>
    </>
  )
};

export default Layout;
