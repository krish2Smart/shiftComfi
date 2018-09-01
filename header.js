import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header" >
        <header className="Inside-header" >
          <img className="logo" src="../images/c.png" alt="hotel logo"/>
          <div className="middle"></div>
          <button className="description">Description </button>
        </header>
      </div>
    );
  }
}

export default Header;
