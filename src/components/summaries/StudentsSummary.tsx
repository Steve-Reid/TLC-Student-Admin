import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

import { useUsersQuery } from '../../generated/graphql';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  const { data } = useUsersQuery({ fetchPolicy: 'network-only' });

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

  if (!data) {
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      <h1>Student Stats</h1>
      <div className={classes.studentTotals}>
        <p>Total Active Student: {totalStudents().active}</p>
        <p>Total Inactive Student: {totalStudents().inactive}</p>
      </div>
    </>
  );
};
