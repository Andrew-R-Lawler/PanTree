import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class AboutPage extends Component {

  createAccount = () => {
    this.props.history.push('/home');
    this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' })
  }

  setToLogIn = () => {
    this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' })
  }

  render(){
    return(
      <div>
        <div>
          <h1>PanTree</h1>
          <h3>
            A streamlined web app that helps you manage kitchen inventory, and find and create recipes seamlessly.
          </h3>
          {this.props.reduxState.user.id ?
          <sp></sp>
          :
          <div>
          <button onClick={this.createAccount}>Create a FREE account</button>
          <p>Already have an account?<Link to='/home' onClick={this.setToLogIn}>Log In!</Link></p>
          </div>
          }
        </div>
      </div>
    )
  }
}

const store = reduxState => ({ reduxState });
export default connect(store)(AboutPage);
