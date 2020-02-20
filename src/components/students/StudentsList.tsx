import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { List, CircularProgress } from '@material-ui/core';
import { useUsersQuery } from '../../generated/graphql';
import { StudentsListItem } from './StudentsListItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    loading: {},
  })
);

interface StudentsListProps {}

export const StudentsList: React.FC<StudentsListProps> = () => {
  const classes = useStyles();
  const { data } = useUsersQuery({ fetchPolicy: 'network-only' });
  const [selectedId, setSelectedId] = React.useState('');
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) => {
    setSelectedId(id);
  };

  if (!data) {
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="list of students">
        {data.users.map(user => {
          return (
            <StudentsListItem
              key={user.id}
              user={user}
              handleClick={handleListItemClick}
              selected={selectedId}
            />
          );
        })}
      </List>
    </div>
  );
};
