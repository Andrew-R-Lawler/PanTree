import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import image from '../Images/tree-golden.jpg';
import { Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
    <Link to="/home">
      <h1 className="nav-title"><Image src={image} size='tiny' />PanTree</h1>
    </Link>
    <div className="nav-right">
      <Link className="nav-link" to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'Home' : 'Login / Register'}
      </Link>
      { props.user.id ?
        <Link className="nav-link" to="/recipe">
          Recipes
        </Link>
        :
        <span></span>
      }
      {props.user.id ?
        <Link className="nav-link" to="/favorites">
          Favorites
        </Link>
        :
        <span></span>
      }
      {props.user.id ?
        <Link className="nav-link" to="/pantree">
          PanTree
        </Link>
        :
        <span></span>
      }
      {props.user.id ?
        <Link className="nav-link" to="/shopping">
          Shopping List
        </Link>
        :
        <span></span>
      }
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          <LogOutButton className="logout" goToHome = {props.goToHome}/>
        </>
      )}
      {/* Always show this link since the about page is not protected */}
      <Link className="nav-link" to="/about">
        About
      </Link>
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
