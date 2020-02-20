import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { List, CircularProgress } from '@material-ui/core';
import { usePricesQuery } from '../../generated/graphql';
import { PricesListItem } from './PricesListItem';

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

interface PricesListProps {}

export const PricesList: React.FC<PricesListProps> = () => {
  const classes = useStyles();
  const { data } = usePricesQuery({ fetchPolicy: 'network-only' });
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
      <List component="nav" aria-label="class attendance prices">
        {data.prices.map(price => {
          return (
            <PricesListItem
              key={price.id}
              price={price}
              handleClick={handleListItemClick}
              selected={selectedId}
            />
          );
        })}
      </List>
    </div>
  );
};
