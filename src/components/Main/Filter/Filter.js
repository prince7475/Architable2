import React, { Component } from "react";
import {
  Button,
  Dropdown,
  Menu,
  Segment,
  Grid,
  Checkbox
} from "semantic-ui-react";

export default class Filter extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     postion: {

  //     }
  //   }
  // }

  state = { 
    other : {
      o : true
    },
    postion: {
      ArchitecturalDesigner: true,
      ArchitecturalCoordinator: false,
      ArchitecturalProjectManager: false,
      Architect: false,
      Temporary: false
      }
  }

  toggle = (str) => {
    this.setState({ 
      ...this.state,
      postion: {
        ...this.state.postion,
        [str]: !this.state.postion[str]
      }
    })
  }

  render() {
    const ArchitecturalDesigner = "ArchitecturalDesigner (" +230 + ")"
    const ArchitecturalCoordinator = "Architectural Coordinator (" + 120 + ")" 
    const ArchitecturalProjectManager = "Architectural Project Manager (" + 137 + ")"
    const Architect = "Architect (" + 104 + ")"
    const Temporary = "Temporary (" + 84 + ")"
    return (
      <Grid columns="equal">
        <Grid.Column width={16}>

          <Segment>

            <Menu compact>
              <Dropdown text='Position' simple item>
                <Dropdown.Menu>

                  <Dropdown.Item >
                    <Checkbox label={ArchitecturalDesigner} onChange={()=>this.toggle('ArchitecturalDesigner')} checked={this.state.postion.ArchitecturalDesigner} />
                  </Dropdown.Item>

                  <Dropdown.Item>
                  <Checkbox label={ArchitecturalCoordinator} onChange={()=>this.toggle('ArchitecturalCoordinator')} checked={this.state.postion.ArchitecturalCoordinator} />
                  </Dropdown.Item>

                  <Dropdown.Item>
                  <Checkbox label={ArchitecturalProjectManager} onChange={()=>this.toggle('ArchitecturalProjectManager')} checked={this.state.postion.ArchitecturalProjectManager} />
                  </Dropdown.Item>

                  <Dropdown.Item>
                    <Checkbox label={Architect} onChange={()=>this.toggle('Architect')} checked={this.state.postion.Architect} />
                  </Dropdown.Item>

                  <Dropdown.Item>
                    <Checkbox label={Temporary} onChange={()=>this.toggle('Temporary')} checked={this.state.postion.Temporary} />
                  </Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
            </Menu>


            <Menu compact>
              <Dropdown text='Location' simple item>
                <Dropdown.Menu>

                  <Dropdown.Item >
                    <Checkbox label={ArchitecturalDesigner} onChange={()=>this.toggle('ArchitecturalDesigner')} checked={this.state.postion.ArchitecturalDesigner} />
                  </Dropdown.Item>

                  <Dropdown.Item>
                  <Checkbox label={ArchitecturalCoordinator} onChange={()=>this.toggle('ArchitecturalCoordinator')} checked={this.state.postion.ArchitecturalCoordinator} />
                  </Dropdown.Item>

                  <Dropdown.Item>
                  <Checkbox label={ArchitecturalProjectManager} onChange={()=>this.toggle('ArchitecturalProjectManager')} checked={this.state.postion.ArchitecturalProjectManager} />
                  </Dropdown.Item>

                  <Dropdown.Item>
                    <Checkbox label={Architect} onChange={()=>this.toggle('Architect')} checked={this.state.postion.Architect} />
                  </Dropdown.Item>

                  <Dropdown.Item>
                    <Checkbox label={Temporary} onChange={()=>this.toggle('Temporary')} checked={this.state.postion.Temporary} />
                  </Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
            </Menu>

            <Button>Salary Offer</Button>
            <Button>Experience Level</Button>

            <Button
              basic
              color="red"
            >Clear Filter</Button>
          </Segment>

        </Grid.Column>
      </Grid>

    );
  }
}
