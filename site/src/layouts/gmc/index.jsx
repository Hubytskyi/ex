import React from 'react';
import { Box, ThemeProvider } from '@mui/material';
import theme from '../../styles/theme/theme.const';

const GMCLayout = ({children}) => {

  return (
    <ThemeProvider theme={theme}>
      <Box minHeight={'100vh'} display={'flex'} flexDirection={'column'}>
        <Box flexGrow={'1'} display={'flex'} flexDirection={'column'}>
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default GMCLayout;
