import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import icon from '../../../../../assets/images/calculator-proceed.svg';
import theme from '../../../../../styles/theme/theme.const';

const CalcStepResult = ({data, handleDialogClose}) => {

    const {averageAge, annualTurnover} = data;
    const [result, setResult] = useState(3);

    if (averageAge === 18 && annualTurnover === 20) {
      setResult(2);
    } else if (averageAge === 36 && annualTurnover === 1) {
      setResult(4);
    } else if (averageAge === 56 && annualTurnover === 75) {
      setResult(4);
    } else if (averageAge === 56 && annualTurnover === 1) {
      setResult(4);
    }

    return (
      <Box display={'flex'} alignContent={'center'} flexDirection={'column'} padding={'0 20px'}>
        <Box textAlign={'center'} mb={3}>
          <img src={icon} alt="icon" />
        </Box>
        <Typography color={theme.palette.grey['550']} variant={'h2'}>
          The ideal sum insured for your organization is <strong>₹ {result} Lakhs</strong>
        </Typography>
        <Box mt={3} textAlign={'center'}>
          <Button size={'large'} variant={'contained'} onClick={handleDialogClose}>Proceed</Button>
        </Box>
      </Box>
    );
  }
;

export default CalcStepResult;
