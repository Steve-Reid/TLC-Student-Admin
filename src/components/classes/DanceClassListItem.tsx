import * as React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { DanceClass } from '../../generated/graphql';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     multiline: {
//       textAlign: 'center',
//     },
//   })
// );

interface DanceClassListItemProps {
  danceClass: {
    __typename?: 'DanceClass';
  } & Pick<DanceClass, 'id' | 'name' | 'description' | 'level'>;
  selected: string;
  handleClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) => void;
}

export const DanceClassListItem: React.FC<DanceClassListItemProps> = ({
  danceClass,
  selected,
  handleClick,
}: DanceClassListItemProps) => {
  // const classes = useStyles();

  return (
    <ListItem
      button
      selected={selected === danceClass.id}
      onClick={event => handleClick(event, danceClass.id)}
    >
      <ListItemText primary={danceClass.name} />
    </ListItem>
  );
};
