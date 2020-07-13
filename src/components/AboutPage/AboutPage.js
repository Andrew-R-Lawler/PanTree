import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Divider, Grid, Button, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './AboutPage.css';
import image from '../Images/tree-golden.jpg';

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
          <Container>
            <h1 class='header'>About Us!</h1>
          </Container>
          <Divider />
          <Grid relaxed columns={2}>
            <Grid.Column>
              <Container class='container'>
                <h2>
                  Welcome to PanTree!
                </h2>
                <h3>We are a streamlined web app that helps you manage kitchen inventory, quickly create shopping lists, find great recipes from around the internet, and save recipes you have previously enjoyed to easily access them again!</h3>
                {this.props.reduxState.user.id ?
                  <sp></sp>
                :
                  <Container>
                    <Button class='container' onClick={this.createAccount}>Create a FREE account</Button>
                    <p class='container'>Already have an account? <Link to='/home' onClick={this.setToLogIn}>Log In!</Link></p>
                  </Container>
                }
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Container>
                <Image className='image' src={image} size='large'/>
              </Container>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    )
  }
}

const store = reduxState => ({ reduxState });
export default connect(store)(AboutPage);
