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
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000" />
                <meta name="theme-color" content="#000" />
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