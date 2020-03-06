import * as React from 'react';
import { List, CircularProgress } from '@material-ui/core';
import { useUsersQuery } from '../../generated/graphql';
import { StudentsListItem } from './StudentsListItem';
import { useLayoutStyles, useStyles } from '../../styles/styles';

interface StudentsListProps {}

export const StudentsList: React.FC<StudentsListProps> = () => {
  const classesLayout = useLayoutStyles();
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
      <div>
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      <List
        className={classesLayout.sidebar}
        component="nav"
        aria-label="list of students"
      >
        {data.users.map(user => {
          return (
            <div key={user.id} className={classes.listItem}>
              <StudentsListItem
                user={user}
                handleClick={handleListItemClick}
                selected={selectedId}
              />
            </div>
          );
        })}
      </List>
    </>
  );
};
