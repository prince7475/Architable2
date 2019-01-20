import React, { Component } from 'react'
import { Input, Button, Dropdown } from 'semantic-ui-react';

export default class SalaryOfferButton extends Component {

  constructor(props) {
    super(props)
    this.state = {
      min: "0",
      max: "100000"
    }
  }



  minHandler = (e) => {
    this.setState({
      min: e.target.value
    })
  }

  maxHandler = (e) => {
    this.setState({
      max: e.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <Button>
        <Dropdown text="Salary Offer" simple item>
          <Dropdown.Menu>
            <Dropdown.Item>

              <div className="display-inline-block  margin-right-5-percent">
                <h4 className="grey">Min: $</h4>
              </div>

              <div className="display-inline-block  ">
                <Input className="salaryOfferInput" name="min" onChange={this.minHandler} placeholder='Min' value={this.state.min} />
              </div>


            </Dropdown.Item>

            <Dropdown.Item>

              <div className="display-inline-block margin-right-5-percent">
                <h4 className="grey"> Max: $</h4>
              </div>

              <div className="display-inline-block ">
                <Input className="salaryOfferInput" name="max" onChange={this.maxHandler} placeholder="Max" value={this.state.max} />
              </div>
            </Dropdown.Item>


          </Dropdown.Menu>
        </Dropdown>
      </Button>
    )
  }
}
