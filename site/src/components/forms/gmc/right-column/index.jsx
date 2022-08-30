import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import theme from '../../../../styles/theme/theme.const';

const styles = {
  wrapper: {
    width: {
      xs: '100%',
      lg: 250,
    },
    textAlign: {
      lg: 'center',
    },
    flexDirection: {
      lg: 'column',
    },
    position: {
      lg: 'absolute',
    },
    display: 'flex',
    right: {
      lg: 0,
    }
  },
  image: {
    maxWidth: {
      xs: 53,
      lg: '100%',
    },
    marginRight: 18,
  },
  divider: {
    backgroundColor: theme.palette.warning.main,
  },
};

const GMCRightColumn = ({imgUrl, title, text}) => (
    <Box sx={styles.wrapper}>
      <img style={styles.image} src={imgUrl} alt={title} />
      <Box mt={5}>
        <Typography variant={'h2'} color={theme.palette.primary.dark} fontSize={{xs: 16, lg: 20}}>{title}</Typography>
        <Box
            width={{xs: 36, lg: 50}}
            height={{xs: 2, lg: 3}}
            mt={{xs: 1, lg: 3}}
            mb={{xs: 1, lg: 3}}
            ml={{lg: 'auto'}}
            mr={'auto'}
            sx={styles.divider} />
        <Typography color={theme.palette.grey['500']} fontSize={{xs: 12, lg: 16}}>{text}</Typography>
      </Box>
    </Box>
)

export default memo(GMCRightColumn);