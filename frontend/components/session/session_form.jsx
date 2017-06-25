import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);

    this.state = { username: "", password: ""};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleInput(event, field){
    let value = event.currentTarget.value;
    this.setState({ [field]: value });
  }

  render(){

    return(
      <section className='auth-layout container'>
        <section className='auth-container row'>
          <div className="form-left col-med-6 col-lg-6">
            <img src="https://s.w.org/images/core/emoji/2.2.1/svg/1f363.svg" className="form-image"></img>
          </div>

          <div className="form-right col-med-6 col-lg-6">
            <p className='auth-header'><span>{this.props.formType}</span></p>
            <form className="auth-form" onSubmit={(e) => this.handleSubmit(e)}>
              <input className="auth-username" placeholder="Username" onChange={(e) => this.handleInput(e, "username")} required />
              <br />
              <input className="auth-password" placeholder="Password" onChange={(e) => this.handleInput(e, "password")} type='password' required />
              <br />

                <input id="form-submit" className="btn btn-large btn-info" type="submit" value={this.props.formType} />
            </form>
                <button id="demo-login" className="btn btn-large btn-warning" onClick={this.props.guestLogin}>Demo</button>
          </div>
        </section>
      </section>
    );
  }
}

export default withRouter(SessionForm);
