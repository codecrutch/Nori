import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props)
  }

  burgerToggle() {
    let linksEl = document.querySelector('.narrowLinks');
    if (linksEl.style.display === 'block') {
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'block';
    }
  }

  render(){
    return (
      <header>
        <navbar>
          <nav>
            <div className="navWide">
              <div className="wideDiv">
                <img src="#"/>
                <a href="#">Search</a>
                <a href="#">Categories</a>
              </div>
            </div>
            <div className="navNarrow">
              <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}>Replace With Hamburger</i>
              <div className="narrowLinks">
                <a href="#" onClick={this.burgerToggle}>Search</a>
                <a href="#" onClick={this.burgerToggle}>Categories</a>
              </div>
            </div>
          </nav> 
        </navbar>
      </header>
    )
  }
}

export default Header;
