import React, { Component } from 'react'
import { Container, Header, Dropdown, Checkbox, Form } from 'semantic-ui-react'
const options = [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'ia', text: 'Information Architecture', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
    { key: 'meteor', text: 'Meteor', value: 'meteor' },
    { key: 'node', text: 'NodeJS', value: 'node' },
    { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
    { key: 'ruby', text: 'Ruby', value: 'ruby' },
    { key: 'ui', text: 'UI Design', value: 'ui' },
    { key: 'ux', text: 'User Experience', value: 'ux' },
]

export default class InterViewForm extends Component {
    render() {
        return (
            <div>
                <Container text>
                    <Header as='h2'>Submit Your Interview Experience</Header>
                    <p>Think of an interview experience you have had in the past and contribute the insight you gained from it. The best interview experiences offer a valuable lesson about the interview process, regardless of receiving an offer.</p>

                    <p>If you have multiple interviews, please submit one for each. </p>
                    <p>Please do not give identifiable information about yourself or any businesses involved in your submission.</p>
                    <p>We appreciate your contribution!</p>

                    <hr />
                    {/* University */}
                    <h3>University</h3>
                    <p>Select which university you attended or graduated from. </p>
                    <p>If your university is not listed please email me at adam.architable@gmail.com</p>
                    <Dropdown
                        multiple
                        selection
                        options={options}
                        search
                    />
                    <hr />


                    <hr />
                    {/* Position */}
                    <h3>Position</h3>
                    <p>What position were you applying for?</p>
                    <Dropdown
                        selection
                        options={options}
                        search
                    />
                    <hr />



                    <hr />
                    {/* Prior Work Experience */}
                    <h3>Prior Work Experience</h3>
                    <p>How much experience did you have at the time of the interview?</p>
                    <Dropdown
                        selection
                        options={options}
                        search
                    />
                    <hr />



                    <hr />
                    {/* Number of Prior Interviews */}
                    <h3>Number of Prior Interviews</h3>
                    <p>How many architecture or design related interviews did you have in your life up to the point of this interview?</p>
                    <Dropdown
                        selection
                        options={options}
                        search
                    />
                    <hr />



                    <hr />
                    {/* Size of Firm  */}
                    <h3>Size of Firm </h3>
                    <p>What was the approximate size of the firm you interviewed at?</p>
                    <Dropdown
                        selection
                        options={options}
                        search
                    />
                    <hr />



                    <hr />
                    {/* In What Sector(s) Does the Firm Practice? */}
                    <h3>In What Sector(s) Does the Firm Practice?</h3>
                    <Dropdown
                        multiple
                        selection
                        options={options}
                        search
                    />
                    <hr />

                    <hr />
                    {/* Offer Received? */}
                    <h3>Offer Received?</h3>
                    <Checkbox label='Check the box if you received an offer following the interview.' />
                    <hr />





                    <hr />
                    {/* Base Salary Offered */}
                    <h3>Base Salary Offered</h3>
                    <Dropdown
                        selection
                        options={options}
                        search
                    />
                    <hr />






                    <hr />
                    {/* Additional Compensation */}
                    <h3>Additional Compensation</h3>
                    <p>Select multiple, if any.</p>
                    <Dropdown
                        multiple
                        selection
                        options={options}
                        search
                    />
                    <hr />





                    <hr />
                    {/* City */}
                    <h3>City</h3>
                    <p>What city was the interview in?</p>
                    <Form>
                        <Form.Field>
                            <input placeholder='City' />
                        </Form.Field>
                    </Form>
                    <hr />





                    <hr />
                    {/* State */}
                    <h3>State</h3>
                    <p>What state was the interview in?</p>
                    <Form>
                        <Form.Field>
                            <input placeholder='State' />
                        </Form.Field>
                    </Form>
                    <hr />





                    <hr />
                    {/* Season */}
                    <h3>Season</h3>
                    <p>During what season was your interview in?</p>
                    <Dropdown
                        selection
                        options={options}
                        search
                    />
                    <hr />


                    <hr />
                    {/* Year */}
                    <h3>Year</h3>
                    <p>During what year was your interview in?</p>
                    <Dropdown
                        selection
                        options={options}
                        search
                    />
                    <hr />



                    <hr />
                    {/* Remote Interview? */}
                    <h3>Remote Interview?</h3>
                    <Checkbox label='Check the box if any portion of your interview done remotely. Ex: Skype or Phone' />
                    <hr />



                    <br />
                    <br />
                    <br />
                    <br />
                </Container>
            </div>
        )
    }
}
