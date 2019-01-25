// @ts-nocheck
import React, { Component } from 'react'
import { Grid, Image, Visibility } from 'semantic-ui-react';
import InterViewCard from './Card/interViewCard';
import Results from './Results';

export default class InterViewCardsHolder extends Component {
  render() {
    const interviewList = []
    for (let i = 0; i < 100; i++) {
      interviewList.push(i);
    }
    return (
      <div className="overflow">
        <Grid >
          <Results />
          {
            interviewList && interviewList.map(e => <InterViewCard key={e} />)
          }
        </Grid>
      </div>

    )
  }
}
