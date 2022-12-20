import React from 'react';
import { ReactComponent as BackIcon } from '../../assets/back.svg';
import { Link } from 'react-router-dom';
import './BackLink.css';

function BackLink({ url, label}) {
    return (
        <span className="back-line-wrapper">
            <BackIcon className="back-icon"/>
            <Link to={url}>{label}</Link>
        </span>
    );
}

export default BackLink;