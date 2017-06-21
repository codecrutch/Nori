import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

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

  sessionLinks() {
    if (this.props.currentUser){
      return (
        <div>
          <img src="#"/>
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/" style={{color: 'green'}}>{this.props.currentUser.username}</Link>
          <Link to='/' onClick={this.props.logout}>Logout</Link>
        </div>
      );
    } else {
      return (
        <div>
          <img src="#"/>
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to='/signup'>Signup</Link>
          <Link to='/login'>Login</Link>
        </div>
      );
    }
  }

  render(){
    return (
      <header>
        <navbar>
          <nav>
            <div className="navWide">
              <div className="wideDiv">
                {this.sessionLinks()}
              </div>
            </div>
            <div className="navNarrow">
              <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}>Replace With Hamburger</i>
              <div className="narrowLinks">
                <Link to="/" onClick={this.burgerToggle}>Search</Link>
                <Link to="/categories" onClick={this.burgerToggle}>Categories</Link>
              </div>
            </div>
          </nav> 
        </navbar>
      </header>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
