import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
    Grid
} from '@mui/material';
import { toast } from 'react-toastify';


function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteCollege = ()=>{
    props.handleDelete();
    handleClose();
  }

  return (
    <div>
      <Button variant="conatined" style={{background:'red', color:'white'}} onClick={handleClickOpen}>
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete college from your list"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Once deleted you won't be able to restore it back
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button  onClick={deleteCollege} variant="conatined" style={{background:'red', color:'white'}}  autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default function CollegeFormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const addCollegeToMyList = (value)=>{
      var existingCollege = JSON.parse(localStorage.getItem('MyColleges'));
      var alreadyExist = existingCollege.filter((college)=>(value.institute_name===college.institute_name  && value.branch===college.branch));
      // console.log(alreadyExist);
      // console.log(alreadyExist && alreadyExist.length===0);
      if(alreadyExist && alreadyExist.length!==0) return;
      if(existingCollege){
          existingCollege.push(value);
      }else{
          existingCollege = [];
          existingCollege.push(value);
      }
      localStorage.setItem('MyColleges', JSON.stringify(existingCollege));
      toast('College Added to your list')
  }
  const deleteCollegeFromMyList = (college)=>{
    var existingCollege = JSON.parse(localStorage.getItem('MyColleges'));
    let newColleges = existingCollege;
    if(existingCollege){
        newColleges = existingCollege.filter((value)=>(value.institute_name!==college.institute_name  && value.branch!==college.branch));
    }
    
    localStorage.setItem('MyColleges', JSON.stringify(newColleges));
    handleClose();
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <OpenInNewIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{props.value.institute_name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <Grid container spacing={3}>
                <Grid item xs={12} sm={12} lg={6}>
                    <TextField
                    margin="dense"
                    label="State"
                    value={props.value.state}
                    fullWidth
                    variant="outlined"
                />
                </Grid>
                <Grid item xs={12} sm={12} lg={6}>
                    <TextField
                    margin="dense"
                    label="City"
                    value={props.value.city}
                    fullWidth
                    variant="outlined"
                />
                </Grid>
                <Grid item xs={12} sm={12} lg={6}>
                    <TextField
                    margin="dense"
                    label="Branch"
                    value={props.value.branch}
                    fullWidth
                    variant="outlined"
                />
                </Grid>
                <Grid item xs={12} sm={12} lg={6}>
                    <TextField
                    margin="dense"
                    label="Fees"
                    value={props.value.fees}
                    fullWidth
                    variant="outlined"
                />
                </Grid>
                
                <Grid item xs={12} sm={12} lg={12}>
                    <TextField
                    margin="dense"
                    id="name"
                    label="Facilities"
                    value={props.value.facilities}
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                />
                </Grid>
                <Grid item xs={12} sm={12} lg={6}>
                    <TextField
                    margin="dense"
                    id="name"
                    label="Percentile"
                    value={props.value.percentile}
                    fullWidth
                    variant="outlined"
                />
                </Grid>
                <Grid item xs={12} sm={12} lg={6}>
                    <TextField
                    margin="dense"
                    id="name"
                    label="Average Percentile"
                    value={props.value.avg_percentile}
                    fullWidth
                    variant="outlined"
                />
                </Grid>
                <Grid item xs={12} sm={12} lg={6}>
                    <TextField
                        margin="dense"
                        id="name"
                        label="Ranking"
                        value={props.value.rank}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                {!props.shortlisted && 
                <Grid item xs={12} sm={12} lg={12} align="center">
                    <Button variant="contained" onClick={()=>{addCollegeToMyList(props.value)}}>Add College to My List</Button>
                </Grid>
                }
                
                
          </Grid>
          
        </DialogContent>
        <DialogActions style={{margin : '20px'}}>
        {props.shortlisted && 
          <AlertDialog handleDelete={()=>{deleteCollegeFromMyList(props.value)}} style={{margin:'10px'}} />
          // <Button variant="contained" color="secondary">Delete</Button>
        }
          <Button onClick={handleClose} style={{margin:'10px'}} variant="outlined">Cancel</Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
