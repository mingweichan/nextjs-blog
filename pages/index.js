import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi everyone I'm Ming. This is my first Next js website and lovely to meet you all!!!!!</p>
        <p>
          This is a sample website. You'll be building a site like this on 
          <a href="https://nextjs.org/learn"> our Next.js tutorial</a>
        </p>
      </section>
    </Layout>
  );
}
