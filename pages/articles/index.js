import ArticleSnippet from '../../components/ArticleSnippet';
import articles from '../../public/data/articles.json'
import styles from '../../styles/Articles.module.css'

const Articles = () => {
    return (
        <div>
            <h1 className={styles.title}>- Latest in Football -</h1>
            <div className={styles.articlesWrapper}>
            {articles && articles.map(article =>
                <ArticleSnippet article={article} key={article.slug} />
            )}
            </div>
        </div>
    );
}

export default Articles;