import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useStyles } from '../../styles/styles';

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
