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
  },
  table :{
    width:'95%',
    display:'block',
    overflowX:'auto'
  },
  card : {
    margin : theme.spacing(2)
  }
}));

export default useStyles;
// cyan #71F3D8
// pink #ED4A53
// black-grey #1D1D1D
// off white #9A9A9A
