import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nav: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 8px',
    },
    link: {
      textDecoration: 'none',
    },
    studentTotals: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    loading: {},
  })
);

interface MainNavProps {}

const MainNav: React.FC<MainNavProps> = () => {
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <Link to="/students" className={classes.link}>
        <Button>Students</Button>
      </Link>
      <Link to="/team" className={classes.link}>
        <Button>Team</Button>
      </Link>
      <Link to="/classes" className={classes.link}>
        <Button>Classes</Button>
      </Link>
      <Link to="/attendance" className={classes.link}>
        <Button>Attendance</Button>
      </Link>
      <Link to="/revenue" className={classes.link}>
        <Button>Revenue</Button>
      </Link>
    </nav>
  );
};

MainNav.displayName = 'MainNav';

export default MainNav;
