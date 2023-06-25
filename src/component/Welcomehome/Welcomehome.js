import { Grid, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import React from "react";
import './Welcomehome.css';

/*The common Landing Page where all the different services define*/
const Welcomehome = () => (
    <React.Fragment>
        <div className="home-container">
            <div className="home-content">
                <h1 className="home-heading">GetJob With Portfolio Maker</h1>
                <p className="home-description">
                    Millions of people are searching for jobs, salary information, company
                    reviews. Find the job that fits your abilities and potential.
                </p>
                <p className="home-description">Get your dream job via GetJob</p>
                <Link to="/jobs">
                    <button type="button" className="shop-now-button">
                        Project Demo
                    </button>
                </Link>
            </div>
        </div>
    </React.Fragment>
)
export default Welcomehome