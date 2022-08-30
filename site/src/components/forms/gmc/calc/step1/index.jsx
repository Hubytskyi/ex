import React from 'react';
import { Box, Button } from '@mui/material';
import theme from '../../../../../styles/theme/theme.const';
import GMCCalcStepTitle from '../step-title';
import GMCCalcTitle from '../title';

const styles = {
  button: {
    fontSize: 13,
    lineHeight: 1.2,
    height: 36,
    width: 120,
    display: 'flex',
    alignContent: 'center',
    border: `1px solid ${theme.palette.common.black}`,
    borderRadius: 40,
    color: theme.palette.common.black,
    fontWeight: '400',
    marginRight: 16,
  },
};

const CalcStepOne = ({next}) => {

  const handleClick = (event) => {
    const {value, title} = event.target;
    next({[title]: value});
  };

  return (
    <Box>
      <GMCCalcStepTitle step={1} />
      <GMCCalcTitle title={'What’s the Average age of your Employees of your Organization?'} />
      <Box display={'flex'} alignItems={'center'}>
        <Button sx={styles.button} title={'averageAge'} value={'18'} onClick={handleClick}>18-35 yrs</Button>
        <Button sx={styles.button} title={'averageAge'} value={'36'} onClick={handleClick}>36-55 yrs</Button>
        <Button sx={styles.button} title={'averageAge'} value={'56'} onClick={handleClick}>56 yrs &
          above</Button>
      </Box>
    </Box>
  );
};

export default CalcStepOne;
