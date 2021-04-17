import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import {binaryToDecimal} from './converter';
import {decimalToBinary} from './converter';

const useStyles = makeStyles((theme) => ({
  app:{
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignContent: 'space-between',
    textAlign: 'center',
  },
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(110),
      height: theme.spacing(57),
    },
  },
  formControl:{
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(0.7),
    label: {
      fontSize: '65px',
    },
  },
  infoTransform: {
    marginTop: theme.spacing(1),
    fontSize: '13px',
  },
  wrapInput: {
    width: '80%',
    margin: 'auto',
    marginTop: theme.spacing(5),
  },
  input: {
    width: '85%',
    textAlign: 'center',
    height: theme.spacing(4),
  },
  transformButton: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    width: '69%',
    textAlign: 'center',
  },
  wrapResult: {
    marginTop: theme.spacing(4),
  },
  result: {
    fontSize: '20px',
    fontWeight: 'bold',
  }
}));


function App() {
  const classes = useStyles();
  const [number, setNumber] = React.useState('')
  const [value, setValue] = React.useState('decimal');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleNumber = (e) => {
    setNumber(Number(e.target.value));
  };

   const a = value === "decimal" ? () => decimalToBinary(number) : () => binaryToDecimal(number)

  return (
    <div className={classes.app}>
      <div className={classes.paper}>
        <Paper elevation={6}>
            <FormControl component="fieldset">
              <RadioGroup row aria-label="position" name="position" defaultValue="top" value={value} onChange={handleRadioChange}>
                <FormControlLabel
                  className={classes.formControl}
                  value="binary"
                  control={<Radio color="primary" />}
                  label="Бинарная"
                  labelPlacement="start"
                />
                <FormControlLabel
                  className={classes.formControl}
                  value="decimal" 
                  control={<Radio color="primary" />} 
                  label="Десятичная" 
                />
              </RadioGroup>
            </FormControl>
          <div className={classes.infoTransform}>
            {value === "decimal" ? "С десятичной в бинарную систему" : "С бинарной в десятичную систему"}
          </div>
          <div className={classes.wrapInput}>
            <input type='number' placeholder="Впишите число" className={classes.input} value={number} onChange={handleNumber} />
          </div>
          <div className={classes.transformButton}>
          <Button onClick={a} className={classes.button} variant="contained" color="primary">
            Перевести
          </Button>
          </div>
          <div className={classes.wrapResult}>
            <div className={classes.result}>
            </div>
          </div>
        </Paper>
    </div>
    </div>
  );
}

export default App;
