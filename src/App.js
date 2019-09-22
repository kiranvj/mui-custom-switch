import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core';
import './switch.css';

const green = '#89d329';

const styles = (theme) => ({
  root: {
    height: '45px',
    width: '70px'
  },
  track: {
    borderRadius: '30px',
    color: '#cfd7dc',
    backgroundColor: '#cfd7dc',
    opacity: 1,
    transition: theme.transitions.create(['background-color']),
  },
  thumb: {},
  switchBase: {
    '&$checked': {
      transform: 'translateX(25px)',
      '& + $track': {
        backgroundColor: '#cfd7dc'
      }
    },
    '&$checked:hover': {
      backgroundColor: '#89d32930'
    },
    '&$focusVisible $thumb': {
      color: '#cfd7dc',
      border: '6px solid #fff'
    }
  },
  checked: {},
  focusVisible: {}

});
function SwitchThumb(props) {
  return (
    <div className={`switch ${props.isChecked ? 'checked':'unchecked'}`}>
      {props.isChecked ? <CheckIcon /> : <CloseIcon />}
    </div>
  );
}

function App({ classes }) {
  const [state, setState] = React.useState({
    checkedA: true
  });

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div style={{ padding: '5em', textAlign: 'center' }}>
      <Switch
        icon={<SwitchThumb isChecked={false} />}
        checkedIcon={<SwitchThumb isChecked={true} />}
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked
        }}
      />
    </div>
  );
}

export default withStyles(styles)(App);
