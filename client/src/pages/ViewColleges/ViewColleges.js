import React from 'react'
import {
    Grid, 
    Paper
} from '@mui/material';
import useStyles from './styles';
const ViewColleges = () => {
    console.log("View")
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
        <Grid item xs={12} sm={12} lg={12}>
            <Paper className={classes.paper} elevation={5}>
                HEY
            </Paper>
        </Grid>
        
    </Grid>
    )
}

export default ViewColleges
