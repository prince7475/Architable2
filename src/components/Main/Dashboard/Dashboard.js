import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import InterViewCardsHolder from './CardHolder/InterViewCardsHolder';
import InterviewDetails from './Details/InterviewDetails';
import {connect} from 'react-redux'
class Dashboard extends Component {
  render() {
    // console.log(this.props)
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <InterViewCardsHolder projects={this.props.projects}/>
          </Grid.Column>
          <Grid.Column width={11}>
            <InterviewDetails projects={this.props.projects}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    projects: state.interview.interviews
  }
}

export default connect(mapStateToProps)(Dashboard)