import * as React from 'react';
import { Form, FormikProps } from 'formik';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import {
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  ListItemIcon,
  Button,
} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { Price } from '../../generated/graphql';
import { validationSchema } from '../../utils/validationSchema';
import { FormTextField } from '../fields/FormTextField';
import FormikWithRef from '../../utils/FormikWithRef';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    multiline: {
      textAlign: 'center',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  })
);

interface PricesListItemProps {
  price: {
    __typename?: 'Price' | undefined;
  } & Pick<Price, 'id' | 'name' | 'description' | 'currentPrice' | 'isActive'>;
  selected: string;
  handleClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) => void;
}

export const PricesListItem: React.FC<PricesListItemProps> = ({
  price,
  selected,
  handleClick,
}: PricesListItemProps) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // const [amendedPrice, setAmendedPrice] = React.useState(price.currentPrice);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setAmendedPrice(event.target.value);
  // };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const priceFormRef = React.useRef<FormikProps<any>>(null);

  return (
    <>
      <ListItem
        button
        selected={selected === price.id}
        onClick={event => {
          handleClick(event, price.id);
          handleClickOpen();
        }}
      >
        <ListItemIcon>
          <IconButton aria-label="delete">
            <EditIcon />
          </IconButton>
        </ListItemIcon>
        <ListItemText
          className={classes.multiline}
          primary={'£' + price.currentPrice}
          secondary={price.name}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider light />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{price.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>Amend current price</DialogContentText>
          <FormikWithRef
            ref={priceFormRef}
            initialValues={{
              currentPrice: price.currentPrice,
            }}
            validationSchema={validationSchema}
            onSubmit={async ({ currentPrice }, { setSubmitting }) => {
              setSubmitting(true);
              console.log('Submitting');

              // const response = await register({
              //   variables: {
              //     currentPrice
              //   },
              // });

              // console.log('TCL: response: ', response);
              console.log('TCL: currentPrice: ', currentPrice);
              setSubmitting(false);
              handleClose();
            }}
          >
            {({ handleSubmit }) => (
              <Form className="form" onSubmit={handleSubmit}>
                <div className="input-row">
                  <FormTextField
                    placeholder="Price £"
                    name="currentPrice"
                    type="number"
                  />
                </div>
              </Form>
            )}
          </FormikWithRef>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              if (priceFormRef.current) {
                console.log(priceFormRef.current);
                priceFormRef.current.handleSubmit();
              }
              handleClose();
            }}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
