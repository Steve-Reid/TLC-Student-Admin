import * as React from 'react';
import Grid from '@material-ui/core/Grid';

import { useUsersQuery } from '../../generated/graphql';
import { Loader } from '../Loader';
import MainNav from '../navs/MainNav';
import { useLayoutStyles, useStyles } from '../../styles/styles';
import { StudentsSideBar } from '../students/StudentsSideBar';

type TotalStudents = {
  active: number;
  inactive: number;
};

interface StudentsSummaryProps {}

export const StudentsSummary: React.FC<StudentsSummaryProps> = () => {
  const classes = useStyles();
  const classesLayout = useLayoutStyles();
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
        <div className={classesLayout.root}>
          <Grid container>
            <Grid container item xs={12} className={classesLayout.mainView}>
              <Grid className={classesLayout.sidebar} item xs={3}>
                <StudentsSideBar />
              </Grid>
              <Grid className={classesLayout.mainContent} item xs={9}>
                <MainNav />
                <main>
                  <h1>Student Stats</h1>
                  <div className={classes.studentTotals}>
                    <p>Total Active Student: {totalStudents().active}</p>
                    <p>Total Inactive Student: {totalStudents().inactive}</p>
                  </div>
                </main>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }

  if (!loading && error) {
    console.log('useUserQuery: error', error);
  }

  return <Loader />;
};
