import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import format from 'date-fns/format';
// import clsx from 'clsx';

import { useLayoutStyles } from '../../styles/stylesLayout';
import { PricesSideBar } from '../prices/PricesSideBar';
import MainNav from '../navs/MainNav';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

interface HomeSummaryProps {}

export const HomeSummary: React.FC<HomeSummaryProps> = () => {
  const classes = useStyles();
  const classesLayout = useLayoutStyles();
  const todaysDate = format(new Date(), 'EEEE do MMMM');

  return (
    <>
      <div className={classesLayout.root}>
        <Grid container>
          <Grid container item xs={12} className={classesLayout.mainView}>
            <Grid className={classesLayout.sidebar} item xs={3}>
              <PricesSideBar />
            </Grid>
            <Grid className={classesLayout.mainContent} item xs={9}>
              <MainNav />
              <h1>Tonight&apos;s Schedule</h1>
              <h2>{todaysDate}</h2>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div>
                <p>Total Active Students: 342</p>
              </div>
            </Grid>
          </Grid>
          {/* <Grid className={classesLayout.footer} item xs={12}>
            <StudentsFooter />
          </Grid> */}
        </Grid>
      </div>
    </>
  );
};
