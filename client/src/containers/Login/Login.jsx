import React from 'react';
import {connect} from 'react-redux';

const Login = props => {

}

const mapStateToProps = state => ({
  email: state.login.email,
  password: state.login.password 
});

const mapDispatchToProps = dispatch => ({
  attemptLogin: () => {},
  handleChange: () => {}
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);