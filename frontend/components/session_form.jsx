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
    let errors = this.props.errors.map( error => <li>{error}</li>);

    return(
      <section className='auth-layout'>
      <p className='auth-header'><span>{this.props.formType}</span></p>
        <form className="auth-form" onSubmit={(e) => this.handleSubmit(e)}>

          <input className="auth-username" placeholder="Username" onChange={(e) => this.handleInput(e, "username")} />

          <br />

          <input className="auth-password" placeholder="Password" onChange={(e) => this.handleInput(e, "password")} type='password' />
          <br />
          <input type="submit" value={this.props.formType} />
          <ul>{errors}</ul>
        </form>
      </section>
    );
  }
}

export default withRouter(SessionForm);
