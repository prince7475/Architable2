import React, { Component } from 'react'
import { Input } from 'semantic-ui-react';

export default class SalaryOfferButton extends Component {

  constructor(props){
    super(props)
    this.state = {
      min: "0",
      max : "100000"
    }
  }
  


  minHandler = (e) => {
    this.setState({
      min: e.target.value
    })
  }

  maxHandler = (e)=> {
    this.setState({
      max : e.target.value
    })
  }

  render() {
    return (
        <div className="salaryOffers">
            <Input className="salaryOfferInput" name="min" onChange={this.minHandler} placeholder='Min' value={this.state.min} />
            <Input className="salaryOfferInput" name="max" onChange={this.maxHandler} placeholder="Max" value={this.state.max}/>
        </div>
    )
  }
}
