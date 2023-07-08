import makeStyles from '@mui/styles/makeStyles'

export const useStyles = makeStyles(() => ({
    headerContainer: {
      position: 'relative',
      height: '100%',
      backgroundColor: '#6F8FAF',
    },
    imageStyle: {
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: '1px',
      marginTop: 0,
      height: '20px',
      width: '60px',
    },
    welcomeStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      textAlign: 'center',
    },
  }));