import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Copyright() {
    return (
      
      <Typography variant="body2" color="textSecondary" align="center" >
        {'                PK.Oli ©                    '}
        <Link color="inherit" href="https://pkoliveira.com/">
                             ------ Pk.Oliveira ------- 
        </Link>{' '}
       
        {new Date().getFullYear()}
        {'            .'}
      </Typography>
    );
  }
  