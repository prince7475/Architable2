import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import Sortby from '../../Filter/Filterbuttons/Sortby'
export default class Results extends Component {
  render() {
    return (
    <Grid.Row>
        <Grid.Column width={10}>
          <h4 className="sortby-text">
            Sort by: 
          </h4>
            <Sortby/>
        </Grid.Column>
        <Grid.Column width={6}>
        
        <p className="search-result-number">49 search results</p>
        
        </Grid.Column>
    </Grid.Row>
    )
  }
}
