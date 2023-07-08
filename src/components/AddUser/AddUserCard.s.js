import makeStyles from '@mui/styles/makeStyles'

export const useStyles = makeStyles(() => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '300px',
        height: '200px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      },
      submitButton: {
        marginTop: '20px',
        padding: '10px 20px',
        borderRadius: '5px',
        backgroundColor: '#6F8FAF',
        color: '#fff',
        fontWeight: 'bold',
        cursor: 'pointer',
      },
      lableBlock:{
        disply: 'block',
        fontSize: '12px',
      },
      headerContainer: {
        alignSelf: 'center', 
        border: '1px solid #000', 
        borderRadius: '30%',
      },
      formStyle: {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
      },
}));