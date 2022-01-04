import Image from 'next/image'
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
            article: articles.find(article => article.slug === context.params.slug)
        }
    }
}

const Details = ({ article: { thumbnail, title, author, dateFormatted, bodyHtml } }) => {
    return (
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
    );
}

export default Details;