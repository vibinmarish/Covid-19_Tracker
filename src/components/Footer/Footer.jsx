import React from 'react'
import { Typography, Link } from '@material-ui/core';



export default function Footer({ cases }) {
    if (!cases.dailyconfirmed) {
        return "";
    }
    return (
        <>
            <footer style={{

                left: '0',
                paddingTop: '0.5em',
                paddingBottom: '0.5em',
                bottom: '0',
                width: '100%',
                backgroundColor: '#2c3852',
                color: 'white',
                textAlign: 'center',
            }}>

                <Typography>Developed by Vibin Marish P</Typography>
                <Typography>
                    <Link href="https://github.com/vibinmarish" color="inherit" style={{ marginRight:'8px' }} >
                        Github
                    </Link>

                    <Link href="https://api.covid19india.org/" color="inherit"  >
                        API
                    </Link>
                </Typography>
            </footer>
        </>
    )
}
