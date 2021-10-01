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
} from '@mui/material'

export default function CollegeFormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                <Grid item xs={12} sm={12} lg={6}>
                    <TextField
                    margin="dense"
                    id="name"
                    label="Package"
                    value={props.value.package}
                    fullWidth
                    variant="outlined"
                />
                </Grid>
                <Grid item xs={12} sm={12} lg={6}>
                    <TextField
                    margin="dense"
                    id="name"
                    label="Cut-Off"
                    value={props.value.package}
                    fullWidth
                    variant="outlined"
                />
                </Grid>
                <Grid item xs={12} sm={12} lg={6}>
                    <TextField
                        margin="dense"
                        id="name"
                        label="Ranking"
                        value={props.value.package}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
          </Grid>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
