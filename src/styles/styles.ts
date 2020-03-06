import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useLayoutStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      background: '#55b9f3',
    },
    mainView: {},
    sidebar: {
      // borderRight: '1px solid rgba(0,0,0,0.12)',
      height: '96vh',
      overflowY: 'scroll',
    },
    mainContent: {
      height: '96vh',
      padding: '16px',
    },
    footer: {
      // borderTop: '1px solid rgba(0,0,0,0.12)',
    },
  })
);

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerRoot: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      background: '#55b9f3',
      // borderBottom: '1px solid rgba(0,0,0,0.12)',
      '& > *': {
        margin: theme.spacing(1),
      },
      '& > P': {
        textAlign: 'center',
      },
    },
    link: {
      textDecoration: 'none',
    },
    nav: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 8px',
      '& a': {
        flex: 'auto',
        background: 'linear-gradient(145deg, #5bc6ff, #4da7db)',
        boxShadow: '4px 4px 7px #489dcf, -4px -4px 7px #62d5ff',
        margin: '0 2px',
      },
    },
    listItem: {
      background: 'linear-gradient(145deg, #5bc6ff, #4da7db)',
      boxShadow: '4px 4px 7px #489dcf, -4px -4px 7px #62d5ff',
    },
    studentTotals: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  })
);
