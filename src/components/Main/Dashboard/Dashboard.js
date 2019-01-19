import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import InterViewCardsHolder from './CardHolder/InterViewCardsHolder';
import InterviewDetails from './Details/InterviewDetails';

export default class Dashboard extends Component {
  render() {
    return (
      <Grid>
      <Grid.Row>
        <Grid.Column width={4}>
          <InterViewCardsHolder />
        </Grid.Column>
        <Grid.Column width={11}>
          <InterviewDetails/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    )
  }
}
