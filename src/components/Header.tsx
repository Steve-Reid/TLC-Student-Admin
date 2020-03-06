import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { useMeQuery, useLogoutMutation } from '../generated/graphql';
import { setAccessToken } from '../accessToken';
import { useStyles } from '../styles/styles';

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
    <header className={classes.headerRoot}>
      <Link className={classes.link} to="/">
        <Button variant="contained" color="primary">
          Home
        </Button>
      </Link>
      <Link className={classes.link} to="/register">
        <Button variant="contained" color="primary">
          Register
        </Button>
      </Link>
      <Link className={classes.link} to="/login">
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
    </header>
  );
};
