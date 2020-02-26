import * as React from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { useUsersQuery } from '../../generated/graphql';
import { Loader } from '../Loader';
import MainNav from '../navs/MainNav';

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

type TotalStudents = {
  active: number;
  inactive: number;
};

interface StudentsSummaryProps {}

export const StudentsSummary: React.FC<StudentsSummaryProps> = () => {
  const classes = useStyles();
  const { data, loading, error } = useUsersQuery({
    fetchPolicy: 'network-only',
  });

  const totalStudents = function studentCount(): TotalStudents {
    const inactiveStudents = data!.users.filter(
      user => user.isActive === false
    );
    const totalInactiveStudents = inactiveStudents.length;
    const totalActiveStudents = data!.users.length;
    return {
      active: totalActiveStudents,
      inactive: totalInactiveStudents,
    };
  };

  if (!loading && !error && data) {
    return (
      <>
        <MainNav />
        <main>
          <h1>Student Stats</h1>
          <div className={classes.studentTotals}>
            <p>Total Active Student: {totalStudents().active}</p>
            <p>Total Inactive Student: {totalStudents().inactive}</p>
          </div>
        </main>
      </>
    );
  }

  if (!loading && error) {
    console.log('useUserQuery: error', error);
  }

  return <Loader />;
};
