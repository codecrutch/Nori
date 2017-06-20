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
      <section>
      <p><span>{this.props.formType}</span></p>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input onChange={(e) => this.handleInput(e, "username")} />
          <br />
          <input onChange={(e) => this.handleInput(e, "password")} type='password' />
          <br />
          <input type="submit" value="submit" />
          <ul>{errors}</ul>
        </form>
      </section>
    );
  }
}

export default withRouter(SessionForm);
