import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme)=>({
  paper : {
      borderRadius : theme.spacing(2),
      padding : theme.spacing(5)
  },
  padding : {
      padding : theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
        padding : theme.spacing(7),
    },
  }
}));

export default useStyles;