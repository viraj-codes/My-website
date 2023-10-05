import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { Grid } from '@mui/material';
function Footer() {
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{paddingTop: '30px', textAlign: 'center' ,overflow:'hidden' }}>
            {/* <Grid item xs>
                <Item>1</Item>
            </Grid> */}
            <Grid item xs={12}>
                <FacebookRoundedIcon className='fbIcn' style={{ fontSize: 60, paddingLeft: '10px', paddingRight: '10px' }} sx={{ color: '#20B2AA',"&:hover": { color: "#000"} }} />
                <InstagramIcon className='inIcn' style={{ fontSize: 60, paddingLeft: '10px', paddingRight: '10px' }} sx={{ color: '#20B2AA',"&:hover": { color: "#000"}  }} />
                <TwitterIcon className='twIcn' style={{ fontSize: 60, paddingLeft: '10px', paddingRight: '10px' }} sx={{ color: '#20B2AA',"&:hover": { color: "#000"}  }} />
                <EmailIcon className='emIcn' style={{ fontSize: 60, paddingLeft: '10px', paddingRight: '10px' }} sx={{ color: '#20B2AA' ,"&:hover": { color: "#000"} }} />
            </Grid>
            {/* <Grid item xs>
                <Item>3</Item>
            </Grid> */}
            <style jsx>{`

            `}</style>
        </Grid>
    )
}

export default Footer