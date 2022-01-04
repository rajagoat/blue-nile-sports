import articles from '../../public/data/articles.json'

const Articles = () => {
    console.log(articles);
    const truncate = (str, no_words) => {
        return str.split(" ").splice(0, no_words).join(" ") + "...";
    }

    return (
        <div>
            <h1>Latest in Football</h1>
            {articles && articles.map(article => {
                <div key={article.slug} className="box">
                    <article className="media">
                        <div className="media-content">
                            <h2 className="media-title">{article.title}</h2>
                            <p className="media-author">{article.author}</p>
                            <p className="media-date">{article.dateFormatted}</p>
                            <p className="media-body">{truncate(article.body)}</p>
                        </div>
                    </article>
                </div>
            })}
        </div>
    );
}

export default Articles;