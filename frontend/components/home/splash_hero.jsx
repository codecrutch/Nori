import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllBusinesses, clearBusinesses } from '../../actions/business_actions';
import { logout } from '../../actions/session_actions';
import SearchBar from '../search/search_bar';

const mapStateToProps = state => {
  return({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchAllBusinesses: (query) => dispatch(fetchAllBusinesses(query)),
    clearBusinesses: () => dispatch(clearBusinesses()),
    logout: () => dispatch(logout())
  });
}

class SplashHero extends React.Component {
  constructor(props){
    super(props);
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
          <Link id="log" to='/login'>Login</Link>
          <Link className="splash-signup" id="signup" to='/signup'>Signup</Link>
        </span>
      );
    }
  }

  componentWillUnmount(){
    this.props.clearBusinesses();
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
            <div style={{ minHeight: '100px' }} />
            <div className="splash-logo">Nori</div>
            <div style={{ minHeight: '100px' }} />
            <SearchBar fetchAllBusinesses={this.props.fetchAllBusinesses} />

          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SplashHero));
