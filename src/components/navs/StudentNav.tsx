import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
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
  })
);

interface StudentNavProps {}

const StudentNav: React.FC<StudentNavProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.nav}>
      <Link className={classes.link} to="/students">
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBackIosIcon />}
        >
          Back to all Students
        </Button>
      </Link>
      <p>student name</p>
      <p>student email</p>
    </div>
  );
};

StudentNav.displayName = 'StudentNav';

export default StudentNav;
