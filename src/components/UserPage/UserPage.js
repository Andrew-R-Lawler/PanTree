import React from 'react';
import { connect } from 'react-redux';
import { Container, Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './UserPage.css';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    <Container>
      <h1 class='header' id="welcome">
        Welcome, { props.user.username }!
      </h1>
    </Container>
    <Divider />
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
