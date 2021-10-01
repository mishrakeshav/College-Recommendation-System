import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme)=>({
  button: {
    backgroundColor: '#112D4E',
    color: '#F9F7F7',
    '&:hover': {
      backgroundColor: '#F9F7F7',
      color: '#112D4E',
      // boxShadow:"20px"
  },
},
  text:{
    color:"red",
    // background:"red",
  },
  paper : {
      borderRadius : theme.spacing(2),
      padding : theme.spacing(5),
      background:"#DBE2EF",
      // color:"white"
  },
  input:
  {
    color:"#01579B"
  },
  padding : {
      padding : theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
        padding : theme.spacing(7),
    },
  },
  cssLabel: {
    color : 'green'
  },

  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.primary.main} !important`,
    }
  },

  cssFocused: {},

  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'green !important'
  },
}));

export default useStyles;