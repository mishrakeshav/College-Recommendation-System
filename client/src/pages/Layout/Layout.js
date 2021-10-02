import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import { mainListItems, secondaryListItems } from './listItems';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import { Hidden } from '@mui/material';
import { 
  BrowserRouter, 
  Switch, 
  Route,
  useRouteMatch,
  Link 
} from 'react-router-dom';

import Recommendation from '../Recommendation/Recommendation';
import ViewColleges from '../ViewColleges/ViewColleges';
import ViewShortListedColleges from '../ViewShortListedColleges/ViewShortListedColleges';


// import Deposits from './Deposits';
// import Orders from './Orders';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © Team Ukku '}

      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
      zIndex: theme.zIndex.drawer + 1,
      background:'#022E57',
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        background:'#022E57',
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        
        }),
      }),
    }));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      background:'#022E57',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Hidden smDown>
              <Typography
                component="h1"
                variant="h6"
                color="white"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                College Recommendation System
              </Typography>
            </Hidden>
            <Hidden smUp>
              <Typography
                component="h6"
                variant="h6"
                color="white"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                CRS
              </Typography>
            </Hidden>
            <IconButton color="inherit">
              {/* <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge> */}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon style={{fill:'#F9F7F7'}} />
            </IconButton>
          </Toolbar>
          <Divider style={{background:'#DBE2EF'}} />
          <List>
          <ListItem component={Link} to='/dashboard/'>
              <ListItemIcon >
                <HomeIcon style={{fill:'#F9F7F7'}} />
              </ListItemIcon>
              <ListItemText style={{color:'#F9F7F7'}} primary="Dashboard" />
            </ListItem>
            <ListItem component={Link} to='/dashboard/search'>
              <ListItemIcon >
                <DashboardIcon style={{fill:'#F9F7F7'}} />
              </ListItemIcon>
              <ListItemText style={{color:'#F9F7F7'}} primary="Dashboard" />
            </ListItem>
          
            <ListItem component={Link} to='/dashboard/recommendation'>
              <ListItemIcon>
                <BarChartIcon style={{fill:'#F9F7F7'}} />
              </ListItemIcon>
              <ListItemText style={{color:'#F9F7F7'}} primary="Recommendation" />
            </ListItem>
           
          </List>
          <Divider style={{background:'#DBE2EF'}} />
          <List></List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: '#F9F7F7',
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <div styles={{margin : '80px'}}>
            <Switch>
              <Route path={path} exact>
                <ViewShortListedColleges />
              </Route>
              <Route path={`${path}/search`} exact>
                     <ViewColleges />
              </Route>
              <Route path={`${path}/recommendation`} exact>
                     <Recommendation />
              </Route>
            </Switch>
            <Copyright sx={{ pt: 4 }} />
          </div>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}