import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import InterViewCardsHolder from './CardHolder/InterViewCardsHolder';

export default class Dashboard extends Component {
  render() {
    return (
      <Grid>
      <Grid.Row>
        <Grid.Column width={4}>
          <InterViewCardsHolder />
        </Grid.Column>
        <Grid.Column width={11}>
          <p>Information</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    )
  }
}
