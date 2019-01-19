import React, { Component } from "react";
import { Button, Dropdown, Checkbox } from "semantic-ui-react";

export default class PostionButton extends Component {
  state = {
    postion: {
      ArchitecturalDesigner: true,
      ArchitecturalCoordinator: false,
      ArchitecturalProjectManager: false,
      Architect: false,
      Temporary: false
    }
  };

  toggle = str => {
    this.setState({
      postion: {
        ...this.state.postion,
        [str]: !this.state.postion[str]
      }
    });
    console.log(this.state)
  };
  render() {
    const ArchitecturalDesigner = "ArchitecturalDesigner (" + 230 + ")";
    const ArchitecturalCoordinator = "Architectural Coordinator (" + 120 + ")";
    const ArchitecturalProjectManager =
      "Architectural Project Manager (" + 137 + ")";
    const Architect = "Architect (" + 104 + ")";
    const Temporary = "Temporary (" + 84 + ")";
    return (
      <Button>
        <Dropdown 
        text="Position" 
        simple 
        item
      
        >
          <Dropdown.Menu>
            <Dropdown.Item>
              <Checkbox
                label={ArchitecturalDesigner}
                onChange={() => this.toggle("ArchitecturalDesigner")}
                checked={this.state.postion.ArchitecturalDesigner}
              />
            </Dropdown.Item>

            <Dropdown.Item>
              <Checkbox
                label={ArchitecturalCoordinator}
                onChange={() => this.toggle("ArchitecturalCoordinator")}
                checked={this.state.postion.ArchitecturalCoordinator}
              />
            </Dropdown.Item>

            <Dropdown.Item>
              <Checkbox
                label={ArchitecturalProjectManager}
                onChange={() => this.toggle("ArchitecturalProjectManager")}
                checked={this.state.postion.ArchitecturalProjectManager}
              />
            </Dropdown.Item>

            <Dropdown.Item>
              <Checkbox
                label={Architect}
                onChange={() => this.toggle("Architect")}
                checked={this.state.postion.Architect}
              />
            </Dropdown.Item>

            <Dropdown.Item>
              <Checkbox
                label={Temporary}
                onChange={() => this.toggle("Temporary")}
                checked={this.state.postion.Temporary}
              />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Button>
    );
  }
}
