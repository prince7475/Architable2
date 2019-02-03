import React, { Component } from 'react'
import { Container, Header, Dropdown, Checkbox, Form, Button } from 'semantic-ui-react'
import { createInterview } from '../../store/actions/interviewActions';
import { connect } from "react-redux"
import { Input, TextArea, Select } from 'semantic-ui-react'

const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]

class InterViewForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        gender: "",
        option: ""
    }
    onChangeHandler = (e, { value }) => {
        this.setState({
            [e.target.name]: value
        })
    }

    genderOnChangeHandler = (e, { value }) => {
        this.setState({
            gender: value
        })
    }

    onSubmitHandler = (e) => {
        // console.log(this.state)
        this.props.createInterview(this.state)
    }
    render() {

        return (
            <div>

                <Container>
                    <h1>Interview form</h1>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Field
                                id='form-input-control-first-name'
                                control={Input}
                                label='First name'
                                placeholder='First name'
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.onChangeHandler}
                            />
                            <Form.Field
                                id='form-input-control-last-name'
                                control={Input}
                                label='Last name'
                                placeholder='Last name'
                                value={this.state.lastName}
                                onChange={this.onChangeHandler}
                                name="lastName"
                            />
                            <Form.Field
                                control={Select}
                                options={genderOptions}
                                label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
                                placeholder='Gender'
                                search
                                searchInput={{ id: 'form-select-control-gender' }}
                                value={this.state.gender}
                                onChange={this.genderOnChangeHandler}
                                name="gender"
                            />
                        </Form.Group>
                        <Form.Field
                            id='form-textarea-control-opinion'
                            control={TextArea}
                            label='Opinion'
                            placeholder='Opinion'
                            value={this.state.option}
                            onChange={this.onChangeHandler}
                            name="option"
                        />
                        <Button onClick={this.onSubmitHandler}>
                            Submit Interview
                        </Button>
                    </Form>
                </Container>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createInterview: (interview) => dispatch(createInterview(interview))
    }
}

export default connect(null, mapDispatchToProps)(InterViewForm)