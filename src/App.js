import React from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/home/HomePage"
import Subreddit from "./pages/subreddit/Subreddit"
import PageNotFound from "./pages/page-not-found/PageNotFound";
import Footer from "./components/footer/Footer";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/subreddit/:id" element={<Subreddit />}></Route>
                <Route path="/*" element={<PageNotFound/>}/>
            </Routes>


            <Footer company="In opdracht van Rick van den Brink" year="2022"/>
            {/*<footer className="outer-content-container">*/}
            {/*    <div className="inner-content-container">*/}
            {/*        In opdracht van Rick van den Brink © 2022*/}
            {/*    </div>*/}
            {/*</footer>*/}
        </>
    );
}

export default App;
