import { makeStyles } from '@material-ui/core/styles';

export const useLayoutStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  mainView: {},
  sidebar: {
    borderRight: '1px solid rgba(0,0,0,0.12)',
    // backgroundColor: 'silver',
    height: '85vh',
    overflowY: 'scroll',
  },
  mainContent: {
    // backgroundColor: 'pink',
    height: '85vh',
    padding: '16px',
  },
  footer: {
    borderTop: '1px solid rgba(0,0,0,0.12)',
    // backgroundColor: 'aquamarine',
  },
});
