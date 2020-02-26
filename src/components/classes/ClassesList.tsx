import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { List, CircularProgress } from '@material-ui/core';
import { useUsersQuery } from '../../generated/graphql';
import { ClassesListItem } from './ClassesListItem';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    loading: {},
  })
);

interface ClassesListProps {}

export const ClassesList: React.FC<ClassesListProps> = () => {
  const classes = useStyles();
  const { data, loading, error } = useUsersQuery({
    fetchPolicy: 'network-only',
  });
  const [selectedId, setSelectedId] = React.useState('');
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) => {
    setSelectedId(id);
  };

  if (!loading && !error && data) {
    return (
      <div className={classes.root}>
        <List component="nav" aria-label="list of classes">
          {data.users.map(user => {
            return (
              <ClassesListItem
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
  }

  if (!loading && error) {
    console.log('useUserQuery: error', error);
  }

  return <CircularProgress />;
};
