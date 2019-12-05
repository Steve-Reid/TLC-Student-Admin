import * as React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { useMeQuery, useLogoutMutation } from '../generated/graphql';
import { setAccessToken } from '../accessToken';
import { AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-end',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  })
);

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const classes = useStyles();
  const { data, loading } = useMeQuery({ fetchPolicy: 'network-only' });
  const [logout, { client }] = useLogoutMutation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let body: any = null;

  if (loading) {
    body = null;
  } else if (data && data.me) {
    body = <p>You are logged in as: {data.me.email}</p>;
  } else {
    body = <p>Not logged in</p>;
  }

  return (
    <header className={classes.root}>
      <AppBar>
        <Toolbar className={classes.root}>
          <Link to="/">
            <Button variant="contained" color="primary">
              Home
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="contained" color="primary">
              Register
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="contained" color="primary">
              Login
            </Button>
          </Link>
          {!loading && data && data.me ? (
            <Button
              variant="contained"
              color="primary"
              onClick={async () => {
                await logout();
                setAccessToken('');
                await client!.resetStore();
              }}
            >
              Logout
            </Button>
          ) : null}
          {body}
        </Toolbar>
      </AppBar>
    </header>
  );
};
