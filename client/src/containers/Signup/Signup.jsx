import React from 'react';
import {connect} from 'react-redux';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const Signup = props => {
  // const { classes } = props;
  
  return (
    <main>
      
    </main>
  );
}

const mapStateToProps = state => ({
  email: state.signup.email,
  password: state.signup.password
});

const mapDispatchToProps = dispatch => ({
  attemptSignup: () => {}
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);