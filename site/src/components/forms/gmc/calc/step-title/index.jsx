import React from 'react';
import { Box, Typography } from '@mui/material';
import icon from '../../../../../assets/images/question_answer_black.svg';
import theme from '../../../../../styles/theme/theme.const';

const styles = {
  icon: {
    padding: 6,
    borderRadius: 4,
    backgroundColor: theme.palette.secondary.light,
    marginRight: 18,
  },
};

const GMCCalcStepTitle = ({step}) => (
    <Box display={'flex'} alignItems={'center'} color={theme.palette.primary.dark} mb={6}>
      <img style={styles.icon} src={icon} alt="icon" />
      <Typography variant={'caption'}>{step} of 2 questions</Typography>
    </Box>
)

export default GMCCalcStepTitle;
