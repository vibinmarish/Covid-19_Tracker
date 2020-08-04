import React from 'react'
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,makeStyles, Typography} from '@material-ui/core';
import styles from './Tables.module.css';


export default function Tables({ stateCase }) {
    if (!stateCase[0]) {
        return '';
    }
    return (
        <div >
          <Typography align="center" color="textSecondary">Last Updated on: {stateCase[0].lastupdatedtime}</Typography>
      <TableContainer  className={styles.container} component={Paper}>
      <Table  className={styles.table} aria-label="simple table">
        <TableHead className={styles.tableheader}>
          <TableRow  >
            <TableCell style={{color: 'white',}} >States</TableCell>
            <TableCell  style={{color: 'white',}} align="right">Confirmed</TableCell>
            <TableCell style={{color: 'white',}}align="right">Active</TableCell>
            <TableCell style={{color: 'white',}}align="right">Recovered</TableCell>
            <TableCell style={{color: 'white',}}align="right">Deaths</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stateCase.map((row,i) => (
            <TableRow key={i} style={{width: '30%'}} >
              <TableCell key={i}>{row.state}</TableCell>
              <TableCell  align="right">{row.confirmed}</TableCell>
              <TableCell  align="right">{row.active}</TableCell>
              <TableCell  align="right">{row.recovered}</TableCell>
              <TableCell  align="right">{row.deaths}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}
