import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ArticleSnippet.module.css'

const ArticleSnippet = ({ article: { slug, title, author, dateFormatted, body, thumbnail } }) => {
    const truncate = (str, no_words) => {
        str = str.replace(/(!\[((.*?)\]))|(\(((.*?)\)))/gm, "");
        return str.split(" ").splice(0, no_words).join(" ").replace(/[^a-zA-Z0-9.?! ]/gm, "") + "...";
    }

    return (
        <>
        {/* <Link className={styles.desktopView} href={`/articles/${slug}`} passHref>
            <article className={styles.box}>
                {thumbnail && <div className={styles.mediaContent}>
                    <h2 className={styles.mediaTitle}>{title}</h2>
                    <span className={styles.mediaAuthor}>{author} · </span>
                    <span className={styles.mediaDate}>{dateFormatted}</span>
                    <p className={styles.mediaBody}>{truncate(body, 10)}</p>
                </div>}
                {!thumbnail && <div className={styles.mediaContentNoThumb}>
                    <h2 className={styles.mediaTitle}>{title}</h2>
                    <span className={styles.mediaAuthor}>{author} · </span>
                    <span className={styles.mediaDate}>{dateFormatted}</span>
                    <p className={styles.mediaBody}>{truncate(body, 10)}</p>
                </div>}
                {thumbnail &&
                    <Image className={styles.image} src={thumbnail} alt='' width={200} height={140} layout='intrinsic' />
                }
            </article>
        </Link> */}

        <Link className={styles.mobileView} href={`/articles/${slug}`} passHref>
            <article className={styles.box}>
                {thumbnail &&
                    <Image className={styles.image} src={thumbnail} alt='' width={200} height={200}/>
                }
                {thumbnail && <div className={styles.mediaContent}>
                    <h2 className={styles.mediaTitle}>{title}</h2>
                    <span className={styles.mediaAuthor}>{author} · </span>
                    <span className={styles.mediaDate}>{dateFormatted}</span>
                    <p className={styles.mediaBody}>{truncate(body, 10)}</p>
                </div>}
                {!thumbnail && <div className={styles.mediaContentNoThumb}>
                    <h2 className={styles.mediaTitle}>{title}</h2>
                    <span className={styles.mediaAuthor}>{author} · </span>
                    <span className={styles.mediaDate}>{dateFormatted}</span>
                    <p className={styles.mediaBody}>{truncate(body, 10)}</p>
                </div>}
                
            </article>
        </Link>

        </>
        
    );
}

export default ArticleSnippet;