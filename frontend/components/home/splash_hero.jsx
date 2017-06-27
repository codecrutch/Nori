import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllBusinesses } from '../../actions/business_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  return({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchAllBusinesses: (query) => dispatch(fetchAllBusinesses(query)),
    logout: () => dispatch(logout())
  });
}

class SplashHero extends React.Component {
  constructor(props){
    super(props);

    this.searchBusinesses = this.searchBusinesses.bind(this);
    this.searchEnterPressed = this.searchEnterPressed.bind(this);
  }

  searchBusinesses(){
    let query = document.getElementById('search-bar').value;
    this.props.fetchAllBusinesses(query);
    this.props.history.push('/businesses');
  }

  searchEnterPressed(event){
    if (event.keyCode == 13) {
      this.searchBusinesses();
    }
  }

  sessionLinks() {
    if (this.props.currentUser){
      return (
        <span>
          <Link id="username" to="/"><span className="glyphicon glyphicon-user"></span>&nbsp;{this.props.currentUser.username}</Link>
          <Link id="log" to='/' onClick={this.props.logout}>Logout</Link>
        </span>
      );
    } else {
      return (
        <span>
          <Link id="signup" to='/signup'>Signup</Link>
          <Link id="log" to='/login'>Login</Link>
        </span>
      );
    }
  }

  render(){
    return (
      <div>
        <div className="splash-hero">
          <div className="splash-hero-inner">
            <div className="splash-herok-nav"></div>
            <ul className="splash-left-nav">
              <Link to="/businesses">Restaurants</Link>
            </ul>

            <ul className="splash-right-nav">
              {this.sessionLinks()}
            </ul>

            <div className="splash-logo">Nori</div>

            <div className="splash-search-bar">
              <form className="navbar-form text-center">
                <div className="form-group" >
                  <span id='psuedo-find-input'>Find</span>
                  <span id='psuedo-near-input'>Near</span>
                  <div className="input-group">
                    <input onKeyUp={this.searchEnterPressed} id="search-bar" type="text" className="form-control" placeholder="sushi, cheap dinner, ramen" />
                    <input onKeyUp={this.searchEnterPressed} id="near-search-bar" type="text" className="form-control" placeholder="address, city, zip" />
                    <span onClick={this.searchBusinesses} className="input-group-addon"><span  className="glyphicon glyphicon-search"></span></span>
                  </div>
                </div>
              </form>
            </div>

            <div className="splash-logo text-centered"></div>
            <div className="splash-search-bar"></div>
          </div>
        </div>
        <div className="splash-overlay" />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SplashHero));