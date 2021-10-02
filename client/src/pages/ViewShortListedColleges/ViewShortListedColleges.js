import React,{useState,useEffect} from 'react'
import {
    Grid, 
    Paper,
    TextField,
    Button,
    Slider,
    Typography,
    MenuItem,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TableRow,

} from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import useStyles from './styles';
import SearchIcon from '@mui/icons-material/Search';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Hidden } from '@mui/material';

import CollegeFormDialog from '../../components/CollegeFormDialog/CollegeFormDialog';

import { getAllColleges } from '../../api';
import axios from 'axios';




const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const tableCells = [
    { key : 'institute_name', label : 'Institute Name'},
    { key : 'state', label : 'State'},
    { key : 'city', label : 'City'},
    { key : 'branch', label : 'Branch'},
    { key : 'fees', label : 'Fees'},
    { key : 'view', label : 'View'},
]

const names = [
    'Boys Hostel',
    'Girls Hostel',
    'Gym',
    'Library',
    'Sports',
    'Cafeteria',
    'Medical/Hospital',
    'Wifi',
    'IT Infrastructure',
    'Laboratories',
    'Swimming',
    'Pool',
    'Convenience Store',
    'Alumni Associations',
    'Guest Room',
    'Banks Facilities',
    'Auditorium',
    'Transport',
    'Parking Facility',
    'Convenience Store',
];
function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  

const ViewShortListedColleges = () => {
    
    const [colleges, setColleges] = useState([]);
    
    
    
    console.log("View")
    const classes = useStyles();
   
    const getData = ()=>{
        try{
            
            const data = JSON.parse(localStorage.getItem('MyColleges'));
            if(data){
                setColleges(data);
            }
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getData();
    },[])
    return (
        <Grid container spacing={3} className={classes.padding}>
       <Grid item xs={12} sm={12} lg={12}>
        <Paper className={classes.paper} elevation={5} align="center">
            <Typography variant="h5" component="h5">
            <b>Colleges Shortlisted By You</b>
            </Typography>
        </Paper>
       </Grid>
        
        <Grid item xs={12} sm={12} lg={12} align="center">
        <Hidden smDown>

            <Paper className={classes.paper} elevation={5}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            {
                                tableCells.map((value)=>(
                                    <TableCell key={value.key} >
                                        {value.label}
                                    </TableCell>
                                ))
                            }
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {colleges?.map((value,idx)=>(
                            <TableRow  key={value.id}>
                                <TableCell>
                                    {value.institute_name}
                                </TableCell>
                                <TableCell>
                                    {value.state}
                                </TableCell>
                                <TableCell>
                                    {value.city}
                                </TableCell>
                                <TableCell>
                                    {value.branch}
                                </TableCell>
                                <TableCell>
                                    {value.fees}
                                </TableCell>
                                <TableCell>
                                    <CollegeFormDialog value={value} shortlisted={true} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                   
                    </TableFooter>
                </Table>
            </Paper>
        </Hidden>
        <Hidden smUp>
        {colleges.map((value)=>{
        return(

        <Grid item xs={12} sm={12} lg={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {value.state} , {value.city}
                    </Typography>
                    <Typography variant="h6" component="div">
                    {value.institute_name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Fees: {value.fees} INR
                    </Typography>
                    <Typography variant="body2">
                    {value.branch}
                    
                    </Typography>
                </CardContent>
                <CardActions>
                <div style={{marginLeft : 'auto'}}>

                    <CollegeFormDialog  value={value} shortlisted={true}/>
                </div>
                </CardActions>
            </Card>
        </Grid>
        )
        })}
        </Hidden>
        </Grid>
    </Grid>
    )
}

export default ViewShortListedColleges
