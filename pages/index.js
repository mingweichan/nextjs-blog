import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';

export default function Home({ allPostsData }) {
  console.log(allPostsData)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi everyone I'm Ming Chan. This is my first Next js website and lovely to meet you all!!!!!</p>
        <p>
          This is a sample website. You'll be building a site like this on 
          <a href="https://nextjs.org/learn"> our Next.js tutorial</a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title, content}) => (
          <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link><br />
              <label className={`${utilStyles.label} ${utilStyles.lightText}`}>{id} | {date}</label>
              <p className={utilStyles.body}>{content}</p>
            </li>
            ))}
        </ul>
      </section>
    </Layout>
  );
}
export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
  
}
