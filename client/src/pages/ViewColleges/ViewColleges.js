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


import CollegeFormDialog from '../../components/CollegeFormDialog/CollegeFormDialog';

import { getAllColleges } from '../../api';



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
  

const ViewColleges = () => {
    const [personName, setPersonName] = useState([]);
    const [searchParameters, setSearchParameters] = useState({});
    const [colleges, setColleges] = useState([
        {
            id : 1,
            institute_name : 'KJ Somaiya Institute of Engineering',
            state : 'Maharashtra',
            city : 'Mumbai',
            branch : 'Information Technology',
            fees : '100K',
            package : '12LPA',
        }
    ]);
    const theme = useTheme();
    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setPersonName(
          // On autofill we get a the stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleSearchParameterChange = (e)=>{
        setSearchParameters({...searchParameters, [e.target.name]:e.target.value});
        console.log(searchParameters);
    }

    console.log("View")
    const classes = useStyles();
    const getData = async ()=>{
        try{
            const data = await getAllColleges();
            
            setColleges(data?.data?.results);
            console.log(data);
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
            <Paper className={classes.paper} elevation={5}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} lg={8}>
                        <TextField
                            variant="outlined"
                            label="Search Institute  Name"
                            name="institute_name"
                            fullWidth
                            onChange={handleSearchParameterChange}
                            value={searchParameters.institute_name}
                            size="small"
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                        <TextField
                            variant="outlined"
                            label="Search By State"
                            name="state"
                            fullWidth
                            onChange={handleSearchParameterChange}
                            value={searchParameters.state}
                            size="small"
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                        <TextField
                            variant="outlined"
                            label="Search By City"
                            name="city"
                            onChange={handleSearchParameterChange}
                            value={searchParameters.city}
                            fullWidth
                            size="small"
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                        <TextField
                            variant="outlined"
                            label="Search By Branch"
                            name="branch"
                            fullWidth
                            onChange={handleSearchParameterChange}
                            value={searchParameters.branch}
                            size="small"
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                        <TextField
                            variant="outlined"
                            label="Sort By"
                            name="sort_by"
                            fullWidth
                            onChange={handleSearchParameterChange}
                            value={searchParameters.sort_by}
                            select
                            size="small"
                        >
                            {
                                ['Cut-off', 'Rating', 'Fees:Low to High', 'Fees:High to Low'].map((value)=>(
                                    <MenuItem value={value}>{value}</MenuItem>
                                ))
                            }
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                        <TextField
                            variant="outlined"
                            label="Averegae Placement Package"
                            name="average_package"
                            onChange={handleSearchParameterChange}
                            value={searchParameters.average_package}
                            fullWidth
                            select
                            size="small"
                        >
                            {
                                ['3LPA-5LPA', '5LPA-10LPA', '10LPA-15LPA','15LPA-20LPA', '20LPA+'].map((value)=>(
                                    <MenuItem value={value}>{value}</MenuItem>
                                ))
                            }
                        </TextField>
                    </Grid>
                    
                    <Grid item xs={12} sm={12} lg={4}>
                        <Typography>Maximum Fees Preference (Per Year)</Typography>
                        <Slider 
                            min={50000}
                            max={500000}
                            onChange={(e)=>{
                                setSearchParameters({...searchParameters, fees: e.target.value })
                            }}
                            aria-label="Default" 
                            valueLabelDisplay="auto" 
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-multiple-chip-label">Facilities</InputLabel>
                        <Select
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            size="small"
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                                </Box>
                            )}
                            MenuProps={MenuProps}
                            >
                            {names.map((name) => (
                                <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, personName, theme)}
                                >
                                {name}
                                </MenuItem>
                            ))}
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12} justifyContent="center">
                        <div align="center">
                        <Button variant="contained">
                            <SearchIcon /> Search
                        </Button>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
            <Paper className={classes.paper} elevation={5}>
                <Table>
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
                        {colleges.map((value,idx)=>(
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
                                    <CollegeFormDialog value={value} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                   
                    </TableFooter>
                </Table>
                <div align="right">
                        <Button  ><NavigateBeforeIcon /></Button>
                        <Button  ><NavigateNextIcon /></Button>
                </div>
            </Paper>
        </Grid>
    </Grid>
    )
}

export default ViewColleges
