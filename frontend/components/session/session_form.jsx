import React from 'react';
import { withRouter } from 'react-router-dom';
import uniqueId from '../../util/unique_id';

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
    let errors = this.props.errors.map( error => <li key={uniqueId()}>{error}</li>);

    return(
      <section className='auth-layout'>
        <section className='auth-container columns'>
          <div className="form-left columns column">
            <img className="form-image column"></img>
            <ul className='form-errors'>{errors}</ul>
          </div>

          <div className="column">
            <p className='auth-header'><span>{this.props.formType}</span></p>
            <form className="auth-form" onSubmit={(e) => this.handleSubmit(e)}>
              <input className="auth-username" placeholder="Username" onChange={(e) => this.handleInput(e, "username")} required />
              <br />
              <input className="auth-password" placeholder="Password" onChange={(e) => this.handleInput(e, "password")} type='password' required />
              <br />

              <input type="submit" value={this.props.formType} />
            </form>
          </div>
        </section>
      </section>
    );
  }
}

export default withRouter(SessionForm);
