import React, {memo} from 'react';
import {
  Dialog,
  IconButton,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CalcStepOne from './step1';
import CalcStepTwo from './step2';
import CalcStepResult from './result';

const CalcModal = ({isOpen, handleDialogClose, dataCalc, currentCalcStep, handleNextCalcStep}) => {

  const steps = [
    <CalcStepOne next={handleNextCalcStep} />,
    <CalcStepTwo next={handleNextCalcStep} />,
    <CalcStepResult data={dataCalc} handleDialogClose={handleDialogClose} />,
  ];

  return (
    <Dialog
      open={isOpen}
      onClose={handleDialogClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box padding={'40px 20px'}>
        <IconButton
          aria-label="close"
          onClick={handleDialogClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        {steps[currentCalcStep]}
      </Box>

    </Dialog>
  );
};

export default memo(CalcModal);
