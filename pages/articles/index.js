import ArticleSnippet from '../../components/ArticleSnippet';
import articles from '../../public/data/articles.json'
import styles from '../../styles/Articles.module.css'
import Head from 'next/head';
import { useState } from 'react';

const Articles = () => {
    const [page, setPage] = useState(1);
    const pageArticles = articles.slice((page - 1) * 10, (page * 10));

    const handleClick = e => {
        if (e.target.name === "Previous")
            setPage(page - 1);
        if (e.target.name === "Next")
            setPage(page + 1);
        window.scrollTo(0, 0);
    };

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
            {pageArticles && pageArticles.map(article =>
                <ArticleSnippet article={article} key={article.slug} />
            )}
            </div>
            <h4 className={styles.pages}>Displaying results for articles {(page - 1) * 10 + 1} to {page < articles.length / 10 ? page * 10 : articles.length}</h4>
            <div className={styles.pages}>
                {page > 1 && <button name='Previous' onClick={handleClick}>Previous</button>}
                {page < articles.length / 10 && <button name='Next' onClick={handleClick}>Next</button>}
            </div>
        </div>
    );
}

export default Articles;