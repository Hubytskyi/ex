import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, TextField, Typography } from '@mui/material';
import zipData from '../../../data/USCities.json';

const Locations = ({handleChange, zipValue, setZipValue, defaultZip}) => {

  const [zipLoading, setZipLoading] = useState(false);
  const [zipError, setZipError] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  const zipHandler = (value) => {
    setZipValue(value)
    setZipLoading(false);
  }

  const clearZipInputs = () => {
    setCity('');
    setState('');
    setCountry('');
    setZipLoading(false);
  };

  const searchZip = () => {
    if (zipValue.length >= 3 && zipValue.length <= 5) {
      setZipLoading(true);

      const filteredZip = zipData.filter((el) => el.zip_code === +zipValue);
      setZipError('Zip not found.');

      if (!filteredZip.length) {
        clearZipInputs();
        return;
      }

      handleChange(filteredZip[0].city, 'cities');
      setCity(filteredZip[0].city);
      setState(filteredZip[0].state);
      setCountry(filteredZip[0].county);
      setZipError('');
      setZipLoading(false);
      return;
    }

    clearZipInputs();
  };

  useEffect(() => {
    searchZip()
  }, [zipValue])

  return (
    <Box sx={{pr: 2}}>
      <Box sx={{mb: 1}}>
        <Typography>Locations</Typography>
      </Box>
      <Box sx={{mb: 2}}>
        <TextField id="zip" name="zip" label="Zip" variant="outlined" value={zipValue}
                   onChange={(event) => zipHandler(event.target.value)}
                   helperText={zipError}
                   fullWidth
                   error={zipError}
        />
        <Box sx={{
          position: "absolute",
          right: 20,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex"
        }}>
          {zipLoading && <CircularProgress size={20} />}
        </Box>
      </Box>
      <Box sx={{mb: 2}}>
        <TextField id="country" name="country" label="Country" variant="outlined" value={country} disabled fullWidth/>
      </Box>
      <Box sx={{mb: 2}}>
        <TextField id="state" name="state" label="State" variant="outlined" value={state} disabled fullWidth/>
      </Box>
      <Box sx={{mb: 2}}>
        <TextField id="city" name="city" label="City" variant="outlined" value={city} disabled fullWidth/>
      </Box>
    </Box>
  );
};

export default Locations;