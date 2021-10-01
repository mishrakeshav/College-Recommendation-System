import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme)=>({
  paper : {
      borderRadius : theme.spacing(2),
      padding : theme.spacing(5)
  }
}));

export default useStyles;