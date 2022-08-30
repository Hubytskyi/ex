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
}

const CalcStepTwo = ({next}) => {

  const handleClick = (event) => {
    const {value, title} = event.target;
    next({[title]: value});
  };

  return (
    <Box>
      <GMCCalcStepTitle step={2} />
      <GMCCalcTitle title={'What’s the Annual Turnover of your Organization?'}/>
      <Box display={'flex'} alignItems={'center'}>
        <Button sx={styles.button} title={'annualTurnover'} value={'20'} onClick={handleClick}>Rs 20 Lakhs</Button>
        <Button sx={styles.button} title={'annualTurnover'} value={'50'} onClick={handleClick}>Rs 50 Lakhs</Button>
        <Button sx={styles.button} title={'annualTurnover'} value={'75'} onClick={handleClick}>Rs 75 Lakhs</Button>
        <Button sx={styles.button} title={'annualTurnover'} value={'1'} onClick={handleClick}>Rs 1 Crore</Button>
      </Box>
    </Box>
  );
};

export default CalcStepTwo;
