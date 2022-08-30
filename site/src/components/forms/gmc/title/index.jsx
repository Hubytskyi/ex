import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import theme from '../../../../styles/theme/theme.const';

const styles = {
  title: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: 10,
    position: 'relative',

    '&::after': {
      content: '""',
      position: 'absolute',
      width: 50,
      height: 3,
      left: 0,
      bottom: -14,
      backgroundColor: theme.palette.success.main,
    },
  },

  step: {
    marginLeft: 20,
    padding: '4px 10px',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.dark,
    borderRadius: 41,
    display: 'flex',
    whiteSpace: 'nowrap',
  },
};

const FormTitle = ({title, step}) => (
    <Box sx={styles.title}>
      <Typography variant={'h1'}>{title}</Typography>
      <Box sx={styles.step}>
        <Typography variant={'overline'}>Step {step}/3</Typography>
      </Box>
    </Box>
);

export default memo(FormTitle);
