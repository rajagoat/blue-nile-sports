import Image from 'next/image'
import ArticleSnippet from '../../components/ArticleSnippet'
import articles from '../../public/data/articles.json'
import styles from '../../styles/ArticleDetails.module.css'

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
            <div className={styles.page}>
                {thumbnail &&
                    <div className={styles.imageContainer}>
                        <Image className={styles.image} src={thumbnail} layout='fill' priority />
                    </div>
                }
                <div className={styles.details}>
                    <div className={styles.headlineContainer}>
                        <h1 className={styles.title}>{title}</h1>
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
        </>
    );
}

export default Details;