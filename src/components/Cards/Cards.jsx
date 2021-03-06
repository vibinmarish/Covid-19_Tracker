import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';


const Cards = ({ cases }) => {
    if (!cases.dailyconfirmed) {
        return "";
    }
    return (

        <div className={styles.container}>
            <div>
                <Typography className={styles.text} variant='h4'>Total Cases In India</Typography>
            </div>
            <Grid container spacing={3} justify="center"object-fit='true' >

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>

                    <CardContent align='center'>
                        <Typography color="textSecondary" gutterBottom>
                            Confirmed
                       </Typography>
                        <Typography variant='h4'>

                            <CountUp start={0}
                                end={Number(cases.totalconfirmed)}
                                duration={1.5}
                                separator=","
                            />
                        </Typography>


                        <Typography color="textSecondary">
                            {cases.date}
                        </Typography>
                        <Typography variant="body2">
                            Number of confirmed cases
                       </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent align='center'>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                       </Typography>
                        <Typography variant='h4'>

                            <CountUp start={0}
                                end={Number(cases.totalrecovered)}
                                duration={1.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {cases.date}
                        </Typography>
                        <Typography variant="body2">
                            Number of recovered cases
                       </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent align='center'>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                       </Typography>
                        <Typography variant="h4">

                            <CountUp start={0}
                                end={Number(cases.totaldeceased)}
                                duration={1.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {cases.date}
                        </Typography>
                        <Typography varient="body2">
                            Number of deaths
                       </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
