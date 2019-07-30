import React from 'react';

import Fab from "@material-ui/core/Fab";
import NavigationIcon from '@material-ui/icons/Navigation';

import './dashboard.css';

export default function Dashboard () {
    return (
        <article className="dashboard">
            <h2>Dashboard</h2>
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
