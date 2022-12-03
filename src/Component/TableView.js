import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
});

export default function TableView({coins}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell><h2>Logo</h2></StyledTableCell>
            <StyledTableCell ><h2>Name</h2></StyledTableCell>
            <StyledTableCell align="right"><h2>Price</h2></StyledTableCell>
            <StyledTableCell align="right"><h2>24H</h2></StyledTableCell>
            <StyledTableCell align="right"><h2>MarketCap</h2></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coins.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {<img src={row?.image} alt={row.name} height="50" style={{ marginBottom: 10 }} />}
              </StyledTableCell>
              <StyledTableCell><h3>{row.name}</h3></StyledTableCell>
              <StyledTableCell align="right"><h3>${row.current_price.toFixed(2)}</h3></StyledTableCell>
              <StyledTableCell align="right"><h3>{row.price_change_percentage_24h}</h3></StyledTableCell>
              <StyledTableCell align="right"><h3>${row.market_cap.toString().slice(0, -6)}</h3></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
