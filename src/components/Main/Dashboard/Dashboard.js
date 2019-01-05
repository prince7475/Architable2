import React, { Component } from 'react'
import DashNavbar from '../Navbar/DashNavbar';
import Filter from '../Filter/Filter';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="background">
        <DashNavbar/>
        <Filter />
      </div>
    )
  }
}
