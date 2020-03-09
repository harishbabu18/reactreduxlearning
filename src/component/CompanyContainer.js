import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {fetchCompanys,loadCompanys } from '../redux'
import { withStyles,makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

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
      backgroundColor: theme.palette.common.default,
      color: theme.palette.common.default,
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

 function CompanyContainer(){
    const classes = useStyles();
    const companydata = useSelector(state => state.company )



    const dispatch = useDispatch()

     useEffect(() => {
         dispatch(fetchCompanys(companydata.sort,companydata.order,10,0))
     },[])
    return companydata.loading ?(
        <div className={classes.root}>
        <LinearProgress />
      </div>
    ): companydata.error ? (
    <h1>{companydata.error}</h1>
        ) : (
          <TableContainer component={Paper}>
            {JSON.stringify(companydata)}



          <h1>Offset is {companydata.offset}</h1>
          <h1>name  is {companydata.sort}</h1>
          <h1>Order  is {companydata.order}</h1>

          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
              <StyledTableCell
                key="id" 
                >
                <TableSortLabel
                direction={companydata.order==="desc"?"asc":"desc"}
                onClick={() => dispatch(fetchCompanys("id",companydata.order==="desc"?"asc":"desc",10,0))}
                >
                 id
                </TableSortLabel>
                </StyledTableCell>


                <StyledTableCell
                key="name" 
                >
                <TableSortLabel
                direction={companydata.order==="desc"?"asc":"desc"}
                onClick={() => dispatch(fetchCompanys("name",companydata.order==="desc"?"asc":"desc",10,0))}
                >
                
                 company Name 
                </TableSortLabel>
                </StyledTableCell>


                <StyledTableCell
                key="establishedDate" 
                >
                <TableSortLabel
                direction={companydata.order==="desc"?"asc":"desc"}
                onClick={() => dispatch(fetchCompanys("establishedDate",companydata.order==="desc"?"asc":"desc",10,0))}
                >
                
                Established Date
                </TableSortLabel>
                </StyledTableCell>

               


              </TableRow>
            </TableHead>
            <TableBody>
       {companydata && companydata.companys && companydata.companys.map(company =>  <StyledTableRow key={company.id}>
      
       <StyledTableCell component="th" scope="row">{company.id}</StyledTableCell>
       <StyledTableCell component="th" scope="row">{company.name}</StyledTableCell>
       <StyledTableCell component="th" scope="row">{company.establishedDate}</StyledTableCell>
            </StyledTableRow>)}
            </TableBody>
      </Table>
      <Button onClick={() => dispatch(loadCompanys(companydata.sort,companydata.order,companydata.max,companydata.offset))}>Load More</Button>
    </TableContainer>
        )
}



  export default CompanyContainer;