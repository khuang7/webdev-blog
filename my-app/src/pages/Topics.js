import React from 'react';
import { makeStyles, Typography } from '@material-ui/core/';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#3C4142',
      minHeight: '100vh'
    },

    centerContainer: {
        textAlign: 'center',
        verticalAlign: 'middle',
        position: 'relative',
        paddingTop: '5%'
      },

    title: {
        fontSize: '20px',
        color: '#FEA993'
      },
    titleText: {
        fontSize: '15px',
        lineHeight: '20px',
        paddingTop: '2em',
        color: 'white'
      }, 

      table : {
          paddingTop: '5%',
            display: 'inline-block',
            marginLeft: 'auto',
            marginRight: 'auto',
          textAlign: 'center',
          maxWidth: '650px',
          color: 'white'
      },
      TableCell: {
          color: 'white'
      }
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

export default function Topics() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className = {classes.centerContainer}>
            <Typography className={classes.title} > topics</Typography>
            <Typography className={classes.titleText}> chosen topics for this specific course. Generally concept that are a bit foreign to me</Typography>
            <Typography className={classes.titleText}> ! = important</Typography>
            <TableContainer>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell classname={classes.TableCell}>HTML TOPICS </TableCell>
                    <TableCell align="right">Concept Summary</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>

            </div>
        </div>
    )
}