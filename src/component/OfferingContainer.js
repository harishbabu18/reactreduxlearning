import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'
import { withStyles,makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
    table: {
      minWidth: 700,
    },
  }));

  const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);

 function UserContainer({userData,fetchUsers}){
    const classes = useStyles();

     useEffect(() => {
         fetchUsers()
     },[])
    return userData.loading ?(
        <div className={classes.root}>
        <LinearProgress />
      </div>
    ): userData.error ? (
    <h1>{userData.error}</h1>
        ) : (
          <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell >User Name</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
       {userData && userData.users && userData.users.map(user =>  <StyledTableRow key={user.id}>
       <StyledTableCell component="th" scope="row">{user.name}</StyledTableCell>
            </StyledTableRow>)}
            </TableBody>
      </Table>
    </TableContainer>
        )
}

const mapStateToProps = state =>{
    return{
      userData:state.user
    }
  }
  const mapDispatchToProps = dispatch => {
    return{
        fetchUsers: () => dispatch(fetchUsers())
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(UserContainer);