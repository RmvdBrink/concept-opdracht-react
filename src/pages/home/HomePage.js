import React, {useEffect, useState} from 'react';
import axios from "axios";
import Header from "../../components/header/Header";
import SubredditArticle from '../../components/subredditArticle/SubredditArticle';
import logo from "../../assets/logo.png"
import "./HomePage.css"
import Loader from '../../components/loader/Loader';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';

const API = `https://www.reddit.com/hot.json?limit=15`

function HomePage() {
    const [reddit, setReddit] = useState([])
    const [loading, toggleLoading] = useState(false)
    const [error, toggleError] = useState(false)

    useEffect(() => {
        const controller = new AbortController();

        async function fetchData() {
            toggleLoading(true)

            try {
                toggleError(false)
                const {data} = await axios.get(API, {signal: controller.signal});
                setReddit(data.data.children);
                console.log(data.data.children)


            } catch (e) {
                console.error(e)


                    if (axios.isCancel(e)) {
                        console.log("The axios request was cancelled")
                    } else {
                        console.error(e)
                        toggleError(true)
                    }
            }
            toggleLoading(false)
        }

        fetchData()

        return function cleanup() {
            controller.abort();
        }
    }, [])
    return (
        <>

            <Header>

                <img src={logo} alt="Reddit header logo"/>
                <h1>Reddit</h1>
            </Header>
            <main>

                <section className="outer-content-container hottest-posts">
                    <div className="inner-content-container">
                        <h2>Hottest posts</h2>
                        <h4>on Reddit right now</h4>
                        <div className="subreddit-article-container">
                            {reddit.map((reddit) => {
                                return (
                                    <SubredditArticle
                                        key={reddit.data.id}
                                        url={reddit.data.url}
                                        title={reddit.data.title}
                                        subredditName={reddit.data.subreddit}
                                        subredditNamePrefixed={reddit.data.subreddit_name_prefixed}
                                        comments={reddit.data.num_comments}
                                        ups={reddit.data.ups}
                                    />
                    //                 <article className="subreddit-article" key={reddit.data.id}>
                    //
                    //                     {/*We gebruiken hier een <a> ipv <Link> omdat we naar een webpagina buiten onze applicatie linken */}
                    //                     <a href={reddit.data.url} className="subreddit-article-title-link">
                    //                         <h3>{reddit.data.title}</h3>
                    //                     </a>
                    //
                    //                     <span>
                    //   <p><Link to={`/subreddit/${reddit.data.subreddit}`}>{reddit.data.subreddit_name_prefixed}</Link></p>
                    //   <p>Comments {reddit.data.num_comments} — Ups {reddit.data.ups}</p>
                    // </span>
                    //                 </article>
                                )

                            })}
                            {loading && <Loader/>}
                            {error && <ErrorMessage>Het ophalen van de data is mislukt. Probeer de pagina opnieuw te laden.</ErrorMessage>}
                            {/*{loading && <p>Loading...</p>}*/}
                            {/*{error && <p>Er is iets mis bij het ophalen van de data</p>}*/}
                        </div>

                    </div>
                </section>
            </main>
        </>
    );
}

export default HomePage;
