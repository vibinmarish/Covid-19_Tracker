import React from 'react'
import { Toolbar,  Typography,AppBar,} from "@material-ui/core";

export default function Appbar() {
    return (
        <div >
            <AppBar style={{ background: '#2E3B55',padding:'0.5em'}} position="static">
                <Toolbar>
                <img src="https://image.flaticon.com/icons/png/512/2760/2760147.png" width="50" height="50" alt="covid-19" />
                    <Typography style={{paddingLeft:"10px"}} variant="h5" > Covid-19 Dashboard</Typography>
                   
                </Toolbar>
            </AppBar>
        </div>
    )
}
