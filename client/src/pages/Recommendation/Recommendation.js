import React from 'react'
import {
    Grid, 
    Paper,
    TextField,
    Button,
    Slider,
    Typography,
    MenuItem
} from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import useStyles from './styles';
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
const cities = [
    'Nashik',
    'Mumbai',
    'Delhi',
    'Banglore',
    'Pune',
    'Hydrabad',
    'Manipal',
    'Thane',
    'Navi Mumbai',
   
];
const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
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
    const [personName, setPersonName] = React.useState([]);
    const [cityName, setcityName] = React.useState([]);
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
      const handleChangeCity = (event) => {
        const {
          target: { value },
        } = event;
        setcityName(
          // On autofill we get a the stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

    console.log("View")
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.padding}>
        <Grid item xs={12} sm={12} lg={12}>
            <Paper className={classes.paper} elevation={5}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} lg={4}>
                        <TextField
                            variant="outlined"
                            label="MHCET Rank"
                            name="mhcet_marks"
                            defaultValue="100000"
                            fullWidth
                            type="number"
                            size="small"
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                        <TextField
                            variant="outlined"
                            label="JEE Mains Rank"
                            name="jee_marks"
                            defaultValue="100000"
                            fullWidth
                            type="number"
                            size="small"
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-multiple-chip-label">Facilities</InputLabel>
                        <Select
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            size="small"
                            value={cityName}
                            onChange={handleChangeCity}
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
                            {cityName.map((name) => (
                                <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, cityName, theme)}
                                >
                                {name}
                                </MenuItem>
                            ))}
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                        <TextField
                            variant="outlined"
                            label="Search By Branch"
                            name="college_name"
                            fullWidth
                            size="small"
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                        <TextField
                            variant="outlined"
                            label="Sort By"
                            name="college_name"
                            fullWidth
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
                            name="college_name"
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
                </Grid>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
            <Paper className={classes.paper} elevation={5}>
                HEY
            </Paper>
        </Grid>
    </Grid>
    )
}

export default ViewColleges
