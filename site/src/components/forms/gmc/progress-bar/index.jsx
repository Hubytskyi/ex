import React, {memo}  from 'react';
import { Box } from '@mui/material';
import theme from '../../../../styles/theme/theme.const';

const styles = {
  bar: {
    width: '100%',
    height: 4,
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: theme.palette.grey['400'],
  },

  activeBar: {
    backgroundColor: theme.palette.primary.main,
    height: '100%',
  }
};

const ProgressBar = ({step, length}) => {

  const progress = 100 / length * (step + 1)

  return (
    <>
      <Box sx={styles.bar}>
        <Box width={`${progress}%`} sx={styles.activeBar}/>
      </Box>
    </>
  );
};

export default memo(ProgressBar);