import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { fetchAllBusinesses } from '../../actions/business_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchAllBusinesses: (q) => dispatch(fetchAllBusinesses(q))
});

class Header extends React.Component {
  constructor(props){
    super(props);
    this.searchBusinesses = this.searchBusinesses.bind(this);
    this.searchEnterPressed = this.searchEnterPressed.bind(this);
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

  searchBusinesses(){
    let query = document.getElementById('search-bar').value;
    this.props.fetchAllBusinesses(query);
    if (this.props.location.pathname !== '/businesses'){
      this.props.history.push('/businesses');
    }
  }

  searchEnterPressed(event){
    if (event.keyCode == 13) {
      this.searchBusinesses();
    }
  }

  render(){
    return (
      <header>
        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
            </div>

            <div className="navbar-collapse collapse" id="navbar-collapsible">
              <form className="navbar-form text-center">
                <Link className="navbar-brand" to="/">Nori</Link>
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
          </div>
        </nav>

        <div id="under-nav" className="container-fluid">
          <div id="under-nav-bar" className="container-fluid">
            <div id="under-nav-links">
              <Link to="/businesses"><i className="fa fa-cutlery" aria-hidden="true" style={{fontsize: '2px'}}></i> Restaurants</Link>
              <Link to="/business/new"><span id="sushi-icon"></span> Add Business</Link>
              <Link to="/categories">Categories</Link>
              {this.sessionLinks()}
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
