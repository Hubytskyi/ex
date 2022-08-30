import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Link } from 'gatsby';
import theme from '../../../../styles/theme/theme.const';

const styles = {
  section: {
    paddingTop: '30px',
    paddingBottom: {
      xs: '100px',
      lg: '30px'
    },
    backgroundColor: theme.palette.grey['200'],
    color: theme.palette.grey['500'],
  },

  wrapper: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',

    '& > *:not(:last-child)': {
      marginBottom: 15,
    },
  },

  links: {
    display: 'flex',
    marginBottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.main,

    '& > *': {
      padding: '0 5px',
    }
  },
};

const GMCFooter = () => {
  return (
    <Box component={'footer'} sx={styles.section}>
      <Container maxWidth={'lg'}>
        <Box sx={styles.wrapper}>
          <Typography variant={'overline'}>Disclaimer</Typography>
          <Typography variant={'overline'}>Policybazaar Insurance Brokers Private Limited (formerly known as
            Policybazaar Insurance Web Aggregator Private Limited) | CIN: U74999HR2014PTC053454 | Registered Office -
            Plot No.119, Sector - 44, Gurgaon, Haryana – 122001
            <br/>
            <span style={styles.links}>
            <Typography variant={'overline'}><Link to={'#'}>Contact Us</Link></Typography>
            |
            <Typography variant={'overline'}><Link to={'#'}>Legal and Admin Policies</Link></Typography>
          </span>
          </Typography>
          <Typography variant={'overline'}>Policybazaar is now registered as a Direct Broker | Registration No. 742,
            Registration Code No. IRDA/ DB 797/ 19, Valid till 09/06/2024, License category- Direct Broker (Life &
            General)
            | Visitors are hereby informed that their information submitted on the website may be shared with insurers.
            Product information is authentic and solely based on the information received from the
            insurers.</Typography>
          <Typography variant={'overline'}>© Copyright 2008-2021 policybazaar.com. All Rights Reserved.</Typography>
        </Box>
      </Container>
    </Box>
);
};

export default GMCFooter;