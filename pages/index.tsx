import Head from 'next/head';
import Button from 'react-bootstrap/Button';

import Layout from 'components/Layout';
import styles from '@styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
        <Head>
          <title>Memajukan Brand Indonesia | Terpusat</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#000000" />
          <meta name="msapplication-TileColor" content="#000000" />

          <meta name="msapplication-TileImage" content="/assets/images/ico/ms-icon-144x144.png" />
          <meta name="description" content="Pusat belanja, investasi, layanan, informasi brand Indonesia." />
        </Head>

        <main className={styles.main}>
          <Button>Test Cuy</Button>
          {/* <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
            </a>
          </div> */}
        </main>
    </Layout>
  )
}
