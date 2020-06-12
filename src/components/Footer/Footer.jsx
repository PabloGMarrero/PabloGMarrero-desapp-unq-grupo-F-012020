import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { useTranslation } from 'react-i18next'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="#">
        buyfromhome.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
   display: 'flex',
   flexDirection: 'column',
   minHeight: '20vh',
   alignItems: 'center'
  },
  main: {
   marginTop: theme.spacing(8),
   marginBottom: theme.spacing(2),
  },
  footer: {
    minWidth:"80vw",
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
     theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Box className={classes.root}>
      <Typography variant="body1">{t("Footer.Body")}</Typography>
      <Copyright />
    </Box>
  );
}