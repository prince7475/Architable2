import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';

export default class Results extends Component {
  render() {
    return (
    <Grid.Row columns={2}>
        <Grid.Column>
        <p className="search-result-number">49 search results</p>
        </Grid.Column>
        <Grid.Column>
            <button>Hello</button>
        </Grid.Column>
    </Grid.Row>
    // <div>
    //   <p>49 search result</p>
    // </div>
    )
  }
}
