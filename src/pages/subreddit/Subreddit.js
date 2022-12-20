import React,  { useEffect, useState } from 'react';
import   { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import "./Subreddit.css"
import Header from "../../components/header/Header";
import BackLink from '../../components/backLink/BackLink';
import TitleAndDescription from '../../components/titleAndDescription/TitleAndDescription';
import formatDotNotation from '../../helpers/formatDotNotation';
import Loader from '../../components/loader/Loader';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import { ReactComponent as BackIcon } from '../../assets/back.svg';


function Subreddit() {
    const [details, setDetails] = useState({});
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            toggleLoading(true);

            try {
              const response = await axios.get(`https://www.reddit.com/r/${id}/about.json`);
              console.log(response);
              setDetails(response.data.data);
            } catch (e) {
              console.error(e);
              toggleError(true)
            }

            toggleLoading(false)
        }
        if (id) {
            fetchData();
        }
    }, [id]);

    return (
        <>
          <Header>
              <h1>r/{id}</h1>
              <h4>Subreddit specifications</h4>
          </Header>

            <main>
                <section className="outer-content-container subreddit-specifications">
                <div className="inner-content-container">
                {Object.keys(details).length > 0 && (
                    <div className="subreddit-specification-details">
                        <TitleAndDescription title="Title" description={details.title} />
                        <TitleAndDescription title="Description" description={details.public_description} />
                        <TitleAndDescription title="Number of subscribers" description={formatDotNotation(details.subscribers)} />
                        {/*<h3>Titel</h3>*/}
                        {/*<p>{details.title}</p>*/}
                        {/*<h3>Description</h3>*/}
                        {/*<p>{details.public_description}</p>*/}
                        {/*<h3>Number of subscribers</h3>*/}
                        {/*<p>{details.subscribers}</p>*/}
                        <BackLink url="/" label="Take me back" />

                {/*        <span className="back-link-wrapper">*/}
                {/*  <BackIcon className="back-icon"/>*/}
                {/*  <Link to="/">Take me back</Link>*/}
                {/*</span>*/}
                    </div>
                )}
                </div>
                </section>
            </main>

        </>
    );
}

export default Subreddit;