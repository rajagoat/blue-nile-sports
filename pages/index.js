import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import articles from '../public/data/articles.json'
import Link from 'next/link'
import ArticleSnippet from '../components/ArticleSnippet'

export const getStaticProps = async () => {
  return {
    props: {
      imageArticles: articles.filter(article => article.thumbnail).slice(0, 3)
    }
  }
}

export default function Home({ imageArticles }) {
  return (
    <>
    <Head>
        <title>Home</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000" />
        <meta name="theme-color" content="#000" />

        <meta name="description" content="Blue Nile Sport is a newly launched platform for Ethiopian sporting news, commentary, analysis and updates with a heightened focus on football."></meta>
        <meta property="og:title" content="Blue Nile Sport." />
        <meta property="og:description" content="Blue Nile Sport is a newly launched platform for Ethiopian sporting news."></meta>
        <meta property="og:image" content="/android-chrome-96x96.png"></meta>
    </Head>

    <div className={styles.page}>
      <div className={styles.slider}>
        {imageArticles && imageArticles.map(article =>
          <Link href={`/articles/${article.slug}`} passHref key={article.slug}>
            <div className={styles.featuredContainer}>
              <Image className={styles.featuredImage} src={article.thumbnail} alt='' layout='fill' priority />
              <div className={styles.fadeBox} />
              <div className={styles.featuredText}>
                <h1 className={styles.featuredTitle}>{article.title}</h1>
              </div>
            </div>
          </Link>
        )}
      </div>
      {/* <h1 className={styles.header}>- Latest -</h1> */}
      <div className={styles.flexContainer}>
        <div className={styles.articleContainer}>
          {articles && articles.map(article =>
            <ArticleSnippet article={article} key={article.slug}/>  
          )}
        </div>
        <div className={styles.timelineWrapper}>
          <a className="twitter-timeline" data-width="250" data-height="400" data-theme="dark" href="https://twitter.com/BlueNileSport">Reload to view</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </div>
      
    </div>
    </>
    
  )
}
