import ArticleSnippet from '../../components/ArticleSnippet';
import articles from '../../public/data/articles.json'
import styles from '../../styles/Articles.module.css'
import Head from 'next/head';

const Articles = () => {
    return (
        <div>
            <Head>
                <title>Articles</title>
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
            {/* <h1 className={styles.title}>- Latest in Football -</h1> */}
            <div className={styles.articlesWrapper}>
            {articles && articles.map(article =>
                <ArticleSnippet article={article} key={article.slug} />
            )}
            </div>
        </div>
    );
}

export default Articles;