import React from "react";
import { Grid, Paper } from "@mui/material";
import useStyles from './styles';
const data = [
  {
    name: "something",
    fees: "200000",
    exam: "JEE",
  },
  {
    name: "Bruh",
    fees: "456456",
    exam: "MHCET",
  },
  {
    name: "KJSIEIT",
    fees: "100",
    exam: "NMAT",
  },
  {
    name: "IIT Bomabay",
    fees: "200000000",
    exam: "JEE",
  },
];
const Recommendation = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.padding}>
      {data.map((college) => (
        <Grid item xs={12} sm={12} lg={12}>
          <Paper>
            <div>{college.name}</div>
            <div>{college.fees}</div>
            <div>{college.exam}</div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Recommendation;
