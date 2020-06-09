import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';




const StyledTableCell = styled(TableCell) ({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 1,
    borderRadius: 2,
    color: 'white',
    fontSize: '15px',
    textAlign: 'center'
  });

  const CustomTableCell = styled(TableCell) ({
    color: 'white',
    fontSize: '15px',
  });


export function TableComp () {
        return (
            <div>
            <TableContainer className={classes.TableCell}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow className={classes.tableRow}>
                    <StyledTableCell> HTML </StyledTableCell>
                    <CustomTableCell align="right">Concept Summary</CustomTableCell>
                    <CustomTableCell align="right">Fat&nbsp;(g)</CustomTableCell>
                    <CustomTableCell  align="right">Carbs&nbsp;(g)</CustomTableCell>
                    <CustomTableCell  align="right">Protein&nbsp;(g)</CustomTableCell>
                </TableRow>
                </TableHead>
               
                <TableBody>
                {rows.map((row) => (
               
               <TableRow key={row.name}>
                    <CustomTableCell scope="row">
                        {row.name}
                    </CustomTableCell>
                    <CustomTableCell align="right">{row.calories}</CustomTableCell>
                    <CustomTableCell align="right">{row.fat}</CustomTableCell>
                    <CustomTableCell align="right">{row.carbs}</CustomTableCell>
                    <CustomTableCell align="right">{row.protein}</CustomTableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            </div>
        )
}