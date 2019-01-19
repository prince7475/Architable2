import React, { Component } from 'react'
import { Grid, Image, Button, Icon, Label } from 'semantic-ui-react';
import faker from "faker";

export default class InterViewCard extends Component {
render() {
    return (
        <Grid.Row>
            <Grid.Column width={3}>
            <Image src={faker.internet.avatar()} circular/>
        </Grid.Column>
        <Grid.Column width={8}>
            <h3 className='interviewer-title'>Architect</h3>
            <p className="interviewer-location">Dallas, Texas</p>
            <p className="interview-location-salary">30,000 - 50,000</p>
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
