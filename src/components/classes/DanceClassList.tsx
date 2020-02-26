import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import { useDanceClassesQuery } from '../../generated/graphql';
import { DanceClassListItem } from './DanceClassListItem';

import { SideLoader } from '../SideLoader';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);

interface DanceClassListProps {}

export const DanceClassList: React.FC<DanceClassListProps> = () => {
  const classes = useStyles();
  const { data } = useDanceClassesQuery({ fetchPolicy: 'network-only' });
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
        <SideLoader />
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="list of classes">
        {data.danceClasses.map(danceClass => {
          return (
            <DanceClassListItem
              key={danceClass.id}
              danceClass={danceClass}
              handleClick={handleListItemClick}
              selected={selectedId}
            />
          );
        })}
      </List>
    </div>
  );
};
