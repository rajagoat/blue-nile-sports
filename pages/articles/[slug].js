import Image from 'next/image'
import ArticleSnippet from '../../components/ArticleSnippet'
import articles from '../../public/data/articles.json'
import styles from '../../styles/ArticleDetails.module.css'
import Head from 'next/head';

export const getStaticPaths = async () => {
    return {
        paths: articles.map(article => ({ params: { slug: article.slug } })),
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    return {
        props: {
            article: articles.find(article => article.slug === context.params.slug),
            otherArticles: articles.filter(article => article.slug !== context.params.slug)
        }
    }
}

const Details = ({ article: { thumbnail, title, author, dateFormatted, bodyHtml }, otherArticles }) => {
    return (
        <>
            <Head>
                <title>Articles |{' '}{title}</title>
                {thumbnail && <link rel="icon" type="image/png" sizes="32x32" href={thumbnail}/> }
                {thumbnail && <link rel="icon" type="image/png" sizes="16x16" href={thumbnail} /> }
                {thumbnail && <link rel="apple-touch-icon" sizes="180x180" href={thumbnail} /> }
                {!thumbnail && <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/> }
                {!thumbnail && <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> }
                {!thumbnail && <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> }
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000" />
                <meta name="theme-color" content="#000" />

                <meta name="description" content="Blue Nile Sport is a newly launched platform for Ethiopian sporting news, commentary, analysis and updates with a heightened focus on football."></meta>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content="Blue Nile Sport is a newly launched platform for Ethiopian sporting news."></meta>
                {thumbnail && <meta property="og:image" content={thumbnail}></meta> }
                {!thumbnail && <meta property="og:image" content="/android-chrome-96x96.png"></meta> }
            </Head>
            <div className={styles.desktopView}>
            <div className={styles.page}>
                {thumbnail &&
                    <div className={styles.imageContainer}>
                        <Image className={styles.image} src={thumbnail} alt='' layout='fill' priority />
                    </div>
                }
                <div className={styles.details}>
                    <div className={styles.headlineContainer}>
                        <h3 className={styles.title}>{title}</h3>
                        <span className={styles.author}>{author} · </span>
                        <span className={styles.dateFormatted}>{dateFormatted}</span>
                    </div>
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: bodyHtml }} />
                </div>
            </div>
            <div className={styles.moreDetails}>
                <h1 className={styles.header}>- More on Football -</h1>
                <div className={styles.articleContainer}>
                    {otherArticles && otherArticles.map(article =>
                        <ArticleSnippet article={article} key={article.slug} />
                    )}
                </div>
            </div>
            </div>
            

            <div className={styles.mobileView}>

            <div className={styles.page}>
                
                <div className={styles.details}>
                    <div className={styles.headlineContainer}>
                        <h3 className={styles.title}>{title}</h3>
                        <span className={styles.author}>{author} · </span>
                        <span className={styles.dateFormatted}>{dateFormatted}</span>
                    </div>
                    {thumbnail &&
                    <div className={styles.imageContainer}>
                        <Image className={styles.image} src={thumbnail} alt='' layout='fill' priority />
                    </div>
                    }
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: bodyHtml }} />
                </div>
            </div>
            <div className={styles.moreDetails}>
                <h1 className={styles.header}>- More on Football -</h1>
                <div className={styles.articleContainer}>
                    {otherArticles && otherArticles.map(article =>
                        <ArticleSnippet article={article} key={article.slug} />
                    )}
                </div>
            </div>

            </div>

            
        </>
    );
}

export default Details;