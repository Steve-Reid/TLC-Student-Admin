import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      textAlign: 'center',
    },

    nav: {
      borderBottom: '1px solid rgba(0,0,0,0.12)',
      // backgroundColor: 'teal',
    },
    mainView: {},
    sidebar: {
      borderRight: '1px solid rgba(0,0,0,0.12)',
      // backgroundColor: 'silver',
      height: '85vh',
    },
    mainContent: {
      // backgroundColor: 'pink',
      height: '85vh',
    },
    footer: {
      borderTop: '1px solid rgba(0,0,0,0.12)',
      // backgroundColor: 'aquamarine',
    },
  })
);

interface StudentsPageProps {}

export const StudentsPage: React.FC<StudentsPageProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid className={classes.nav} item xs={12}>
          <Link to="/students">
            <Button>Students</Button>
          </Link>
          <Button href="#text-buttons">Team</Button>
          <Button href="#text-buttons">Classes</Button>
          <Button href="#text-buttons">Attendance</Button>
          <Button href="#text-buttons">Revenue</Button>
        </Grid>
        <Grid container item xs={12} className={classes.mainView}>
          <Grid className={classes.sidebar} item xs={3}>
            <Typography>SideBar</Typography>
          </Grid>
          <Grid className={classes.mainContent} item xs={9}>
            <Typography>Main</Typography>
            <Typography>Student Summary</Typography>
          </Grid>
        </Grid>
        <Grid className={classes.footer} item xs={12}>
          <Typography>Footer</Typography>
        </Grid>
      </Grid>
    </div>
  );
};
