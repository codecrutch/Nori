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

  sessionLinks() {
    if (this.props.currentUser){
      return (
        <ul className='nav navbar-nav navbar-right'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/" style={{color: 'green'}}>{this.props.currentUser.username}</Link></li>
          <li><Link to='/' onClick={this.props.logout}>Logout</Link></li>
        </ul>
      );
    } else {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to='/signup'>Signup</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      );
    }
  }

  render(){
    return (
      <header>
        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapsible">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" style={{ fontFamily: "Satisfy", fontSize: '30px !important' }} to="/">Nori</Link>
            </div>

            <div className="navbar-collapse collapse" id="navbar-collapsible">

              <ul className="nav navbar-nav navbar-left">
                <li><Link to="/featured">Featured</Link></li>
              </ul>

              <div>
                {this.sessionLinks()}
              </div>

              <form className="navbar-form text-center">
                <div className="form-group" >
                  <div className="input-group">
                    <input type="text" className="form-control" />
                    <span className="input-group-addon"><span className="glyphicon glyphicon-search"></span></span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
