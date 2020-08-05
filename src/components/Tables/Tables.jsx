import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@material-ui/core';
import styles from './Tables.module.css';


export default function Tables({ stateCase }) {
  if (!stateCase[0]) {
    return '';
  }
  return (
    <div >
      <Typography align="center" color="textSecondary">Last Updated on: {stateCase[0].lastupdatedtime}</Typography>
      <TableContainer className={styles.container} component={Paper}>
        <Table className={styles.table} aria-label="simple table">
          <TableHead className={styles.tableheader}>
            <TableRow  >
              <TableCell style={{ color: 'white', fontSize: '13pt' }} >States</TableCell>
              <TableCell style={{ color: 'white', fontSize: '13pt' }} align="right">Confirmed</TableCell>
              <TableCell style={{ color: 'white', fontSize: '13pt' }} align="right">Active</TableCell>
              <TableCell style={{ color: 'white', fontSize: '13pt' }} align="right">Recovered</TableCell>
              <TableCell style={{ color: 'white', fontSize: '13pt' }} align="right">Deaths</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stateCase.map((row, i) => (
              <TableRow key={i} className={styles.pads} >
                <TableCell style={{ fontSize: '13pt' }} key={i}>{row.state}</TableCell>

                <TableCell style={{ fontSize: '12pt' }} align="right">{row.confirmed}</TableCell>
                <TableCell style={{ fontSize: '12pt' }} align="right">{row.active}</TableCell>
                <TableCell style={{ fontSize: '12pt' }} align="right">{row.recovered}</TableCell>
                <TableCell style={{ fontSize: '12pt' }} align="right">{row.deaths}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
