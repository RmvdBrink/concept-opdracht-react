import React from 'react';
import { Link } from 'react-router-dom';
import './SubredditArticle.css';
import formatEllipsis from '../../helpers/formatEllipsis';
import formatDotNotation from '../../helpers/formatDotNotation';

function SubredditArticle({ url, title, subredditName, subredditNamePrefixed, comments, ups }) {
    return (
        <article className="subreddit-article">

            {/*We gebruiken hier een <a> ipv <Link> omdat we naar een webpagina buiten onze applicatie linken */}
            <a href={url} className="subreddit-article-title-link">
                <h3>{formatEllipsis(title)}</h3>
            </a>

            <span>
        <p><Link to={`/subreddit/${subredditName}`}>{subredditNamePrefixed}</Link></p>
        <p>Comments {formatDotNotation(comments)} — Ups {formatDotNotation(ups)}</p>
      </span>
        </article>
    );
}

export default SubredditArticle;