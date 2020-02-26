import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomeSummary } from '../../components/summaries/HomeSummary';
import { StudentsSummary } from '../../components/summaries/StudentsSummary';
import { ClassesSummary } from '../../components/summaries/ClassesSummary';
import { StudentMain } from '../../components/students/StudentMain';

interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = () => {
  // const classes = useStyles();

  return (
    <Switch>
      <Route path="/" exact component={HomeSummary} />
      <Route path="/students" exact component={StudentsSummary} />
      <Route path="/student/:id" exact component={StudentMain} />
      <Route path="/classes" exact component={ClassesSummary} />
    </Switch>
  );
};
