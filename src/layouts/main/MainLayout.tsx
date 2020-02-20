import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MainNav from '../../components/navs/MainNav';
import { PricesSideBar } from '../../components/prices/PricesSideBar';
import { StudentsSideBar } from '../../components/students/StudentsSideBar';
import { StudentsSummary } from '../../components/summaries/StudentsSummary';
// import { StudentsFooter } from '../../components/students/StudentsFooter';
import { ClassesSummary } from '../../components/summaries/ClassesSummary';
// import { StudentsNav } from '../../components/navs/StudentsNav';
import { StudentMain } from '../../components/students/StudentMain';
import StudentNav from '../../components/navs/StudentNav';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },

    nav: {
      borderBottom: '1px solid rgba(0,0,0,0.12)',
      textAlign: 'center',
      '& > a': {
        textDecoration: 'none',
      },
    },
    mainView: {},
    sidebar: {
      borderRight: '1px solid rgba(0,0,0,0.12)',
      // backgroundColor: 'silver',
      height: '85vh',
      overflowY: 'scroll',
    },
    mainContent: {
      // backgroundColor: 'pink',
      height: '85vh',
      padding: '16px',
    },
    footer: {
      borderTop: '1px solid rgba(0,0,0,0.12)',
      // backgroundColor: 'aquamarine',
    },
  })
);

interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid className={classes.nav} item xs={12}>
          <Switch>
            <Route path="/" exact component={MainNav} />
            <Route path="/students" exact component={MainNav} />
            <Route path="/student/:id" exact component={StudentNav} />
          </Switch>
        </Grid>
        <Grid container item xs={12} className={classes.mainView}>
          <Grid className={classes.sidebar} item xs={3}>
            <Switch>
              <Route path="/" exact component={PricesSideBar} />
              <Route path="/students" exact component={StudentsSideBar} />
              <Route path="/student/:id" exact component={StudentsSideBar} />
            </Switch>
          </Grid>
          <Grid className={classes.mainContent} item xs={9}>
            <Switch>
              <Route path="/" exact component={ClassesSummary} />
              <Route path="/students" exact component={StudentsSummary} />
              <Route path="/student/:id" exact component={StudentMain} />
            </Switch>
          </Grid>
        </Grid>
        {/* <Grid className={classes.footer} item xs={12}>
          <StudentsFooter />
        </Grid> */}
      </Grid>
    </div>
  );
};
