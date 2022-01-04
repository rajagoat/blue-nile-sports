import Image from 'next/image';
import styles from '../styles/ArticleSnippet.module.css'

const ArticleSnippet = ({ article: { title, author, dateFormatted, body, thumbnail } }) => {
    const truncate = (str, no_words) => {
        return str.split(" ").splice(0, no_words).join(" ") + "...";
    }

    return (
        <article className={styles.box}>
            <div className={styles.mediaContent}>
                <h2 className={styles.mediaTitle}>{title}</h2>
                <span className={styles.mediaAuthor}>{author} · </span>
                <span className={styles.mediaDate}>{dateFormatted}</span>
                <p className={styles.mediaBody}>{truncate(body, 10)}</p>
            </div>
            <>
                <Image className={styles.image} src={thumbnail} width={110} height={110} layout='intrinsic'/>
            </>
        </article>
    );
}

export default ArticleSnippet;