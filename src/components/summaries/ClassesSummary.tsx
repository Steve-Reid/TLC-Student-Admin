import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import format from 'date-fns/format';

import { useLayoutStyles, useStyles } from '../../styles/styles';
import MainNav from '../navs/MainNav';
import { DanceClassSideBar } from '../classes/DanceClassSideBar';

interface ClassesSummaryProps {}

export const ClassesSummary: React.FC<ClassesSummaryProps> = () => {
  const classes = useStyles();
  const classesLayout = useLayoutStyles();
  const todaysDate = format(new Date(), 'EEEE do MMMM');

  return (
    <>
      <div className={classesLayout.root}>
        <Grid container>
          <Grid container item xs={12} className={classesLayout.mainView}>
            <Grid className={classesLayout.sidebar} item xs={3}>
              <DanceClassSideBar />
            </Grid>
            <Grid className={classesLayout.mainContent} item xs={9}>
              <MainNav />
              <section>
                <header>
                  <h1>Tonight&apos;s Schedule</h1>
                  <h2>{todaysDate}</h2>
                </header>
              </section>
              // Main Content
            </Grid>
          </Grid>
          // Optional Footer
          <Grid className={classesLayout.footer} item xs={12}>
            // Footer Content
          </Grid>
        </Grid>
      </div>
    </>
  );
};
