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
            <h3 className='interviewer-title'>Software Engineer</h3>
            <p className="interviewer-location">Dallas, Texas</p>
            <p className="interview-location-salary">30,000 - 50,000</p>
        </Grid.Column>

        <Grid.Column width={5}>
        {/* <Button as='div' labelPosition='right'>
        <Button icon><Icon name='thumbs up outline' /></Button>
            <Label as='a' basic pointing='left'>2,048</Label>
        </Button>
    <p className="interviewer-days">28 Days ago</p> */}
            <Label>
    <Icon name='thumbs up outline' /> 23
            </Label>
            <p className="interviewer-days">28 Days ago</p>
        </Grid.Column>
        
        </Grid.Row>
    )
}
}
