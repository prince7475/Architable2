// @ts-nocheck
import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import InterViewCard from './Card/interViewCard';
import Results from './Results';
class InterViewCardsHolder extends Component {
  render() {
    const {projects} = this.props
    const interviewList = []
    for (let i = 0; i < 100; i++) {
      interviewList.push(i);
    }
    return (
      <div className="overflow">
        <Grid >
          <Results />
          {
            projects && projects.map( (project,idx) => <InterViewCard key={idx} project={project}/>)
          }
        </Grid>
      </div>

    )
  }
}

export default (InterViewCardsHolder)
