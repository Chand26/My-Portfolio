import React, { Component } from 'react';
import Navitem from './Navitem';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: '' // Ensure this state matches the item ID
    };
  }

  activeitem = (itemId) => {
    // Remove active class from the currently active item
    if (this.state.NavItemActive) {
      const activeElement = document.getElementById(this.state.NavItemActive);
      if (activeElement) {
        activeElement.classList.remove('active');
      }
    }
    // Update state and add active class to the new item
    this.setState({ NavItemActive: itemId }, () => {
      const newActiveElement = document.getElementById(this.state.NavItemActive);
      if (newActiveElement) {
        newActiveElement.classList.add('active');
      }
    });
  };

  render() {
    return (
      <nav>
        <ul>
          <h4>
            <Navitem item="HOME" tolink="/home" activec={this.activeitem} />
            <Navitem item="ABOUT" tolink="/about" activec={this.activeitem} />
            <Navitem item="EDUCATION" tolink="/education" activec={this.activeitem} />
            <Navitem item="SKILLS" tolink="/skills" activec={this.activeitem} />
            <Navitem item="CONTACT" tolink="/contact" activec={this.activeitem} />
          </h4>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
