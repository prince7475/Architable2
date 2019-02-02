import React, { Component } from 'react'
import { Grid, Image, Icon, Label } from 'semantic-ui-react';
import faker from "faker";

export default class InterViewCard extends Component {
    render() {
        console.log("this is single",this.props.project)
        const {project} = this.props
        return (
            <Grid.Row>
                <Grid.Column width={3}>
                    <div className="card-avatar-logo">
                        <Image src={faker.internet.avatar()} circular />
                    </div>
                </Grid.Column>
                <Grid.Column width={8}>
                    <h3 className='interviewer-title'>{project.fields["Position"]}</h3>
                    <p className="interviewer-location">{project.fields["City, State"]}</p>
                    <p className="interview-location-salary">{project.fields["Salary Offered"]}</p>
                </Grid.Column>
                <Grid.Column width={5}>
                    <Label>
                        <Icon name='thumbs up outline' /> 23
            </Label>
                    <p className="interviewer-days">28 Days ago</p>
                </Grid.Column>
            </Grid.Row>
        )
    }
}
