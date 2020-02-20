import * as React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { User } from '../../generated/graphql';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     multiline: {
//       textAlign: 'center',
//     },
//   })
// );

interface StudentsListItemProps {
  user: {
    __typename?: 'User' | undefined;
  } & Pick<User, 'id' | 'name'>;
  selected: string;
  handleClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) => void;
}

export const StudentsListItem: React.FC<StudentsListItemProps> = ({
  user,
  selected,
  handleClick,
}: StudentsListItemProps) => {
  // const classes = useStyles();

  return (
    <ListItem
      button
      selected={selected === user.id}
      onClick={event => handleClick(event, user.id)}
    >
      <ListItemText primary={user.name} />
    </ListItem>
  );
};
