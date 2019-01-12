// @ts-nocheck
import React, { Component } from 'react'
import { Grid, Image, Visibility } from 'semantic-ui-react';
import InterViewCard from './Card/interViewCard';
import Results from './Results';

export default class InterViewCardsHolder extends Component {
  render() {
    return (
        <Grid className="card-holder">
            <Results />
        {/* <Visibility>             */}
            <InterViewCard />
            <InterViewCard />
            <InterViewCard />
            <InterViewCard />
            <InterViewCard />
            <InterViewCard />
            <InterViewCard />
            <InterViewCard />
            <InterViewCard />
            <InterViewCard />
            <InterViewCard />
            <InterViewCard />
        {/* </Visibility> */}

        </Grid>
    
    )
  }
}
