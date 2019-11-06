import React from 'react';
import Fab from "@material-ui/core/Fab";
import NavigationIcon from '@material-ui/icons/Navigation';

import SurveysList from "../surveys/SurveysList";

import './dashboard.css';

export default function Dashboard () {
    return (
        <article className="dashboard">
            <h2>Dashboard</h2>
            <SurveysList />
            <Fab
                variant="extended"
                color="primary"
                style={{position: 'fixed', bottom: '100px', right: '50px'}}
                size="medium"
                href="/surveys/new"
            >
                <NavigationIcon />
                Add
            </Fab>
        </article>
    );
};
