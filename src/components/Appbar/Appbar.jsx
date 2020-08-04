import React from 'react'
import { Toolbar, IconButton, Typography, Button, AppBar,makeStyles } from "@material-ui/core";

export default function Appbar() {
    return (
        <div >
            <AppBar style={{ background: '#2E3B55' }} position="static">
                <Toolbar>
                    
                    <Typography variant="h5" >
                        Covid-19 Tracker
    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    )
}
