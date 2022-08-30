import React from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import FormTitle from '../title';
import employeeOnlyImg from '../../../../assets/images/employeeOnly.svg';
import employeeSpouseImg from '../../../../assets/images/employeeSpouse.svg';
import employeeParentImg from '../../../../assets/images/employeeSpouseKids.svg';
import theme from '../../../../styles/theme/theme.const';

const styles = {
  gridOfInputs: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: 20,
  },
  checkboxControl: {
    width: '100%',
    '& .MuiFormGroup-root': {
      flexDirection: 'row',
      flexWrap: 'nowrap',
    },
  },
  checkbox: {
    position: 'relative',
    padding: 4,
    borderRadius: 4,
    margin: '0 0 16px 0',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    color: theme.palette.primary.dark,
    height: 162,
    width: 200,
    marginRight: 16,
    boxShadow: '0px 0px 16px #0065ff26',
    overflow: 'hidden',

    '&.start.MuiFormControlLabel-root': {
      alignItems: 'flex-start',
    },

    '& > span:last-child': {
      paddingRight: 10,
    },

    '& h4': {
      color: theme.palette.grey['500'],
    },

    '& .MuiRadio-root': {
      padding: 0,
    },
  },

  image: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginRight: 4,

    '& img': {
      maxWidth: '100%',
    },
  },

  employeeOnly: {
    width: 60,
    height: 90,
  },
  employeeSpouse: {
    width: 90,
    height: 98,
  },
  employeeParent: {
    width: 120,
    height: 84,
  },
};

const StepThree = ({errors, values, handleChange, setFieldValue, setFieldError}) => {

  const isFirstTime = values.firstTime === 'Yes';

  const calc = (value, percentage) => Math.round(value * percentage / 100);

  const setNumberOfLives = (field, value, percentage) => {
    setFieldValue(field, calc(value, percentage));
  };

  const employeeOnlyCalc = (value) => {
    setNumberOfLives('employeeCount35', value, 70);
    setNumberOfLives('employeeCount45', value, 20);
    setNumberOfLives('employeeCount55', value, 9);
    setNumberOfLives('employeeCount65', value, 1);
  };

  const employeeSpouseKidsCalc = (value) => {
    setNumberOfLives('employeeCount35', value, 30);
    setNumberOfLives('employeeCount45', value, 15);
    setNumberOfLives('employeeCount55', value, 9);
    setNumberOfLives('employeeCount65', value, 1);
    setNumberOfLives('spouseCount35', value, 10);
    setNumberOfLives('spouseCount45', value, 10);
    setNumberOfLives('spouseCount55', value, 9);
    setNumberOfLives('spouseCount65', value, 1);
    setNumberOfLives('totalKids', value, 15);
  };

  const employeeSpouseKidsParentsCalc = (value) => {
    setNumberOfLives('employeeCount35', value, 15);
    setNumberOfLives('employeeCount45', value, 5);
    setNumberOfLives('employeeCount55', value, 5);
    setNumberOfLives('employeeCount65', value, 0);
    setNumberOfLives('spouseCount35', value, 15);
    setNumberOfLives('spouseCount45', value, 5);
    setNumberOfLives('spouseCount55', value, 5);
    setNumberOfLives('spouseCount65', value, 0);
    setNumberOfLives('parentsCount45', value, 15);
    setNumberOfLives('parentsCount55', value, 5);
    setNumberOfLives('parentsCount65', value, 5);
    setNumberOfLives('parentsCount66', value, 0);
    setNumberOfLives('totalKids', value, 25);
  };

  const handleTotalNumberOfLives = (event) => {
    const {value} = event.target;
    setFieldValue('totalNumberOfEmployees', value);
    switch (values.coverageType) {
      case 'Employee only' :
        employeeOnlyCalc(value);
        return;
      case 'Employee, Spouse & 2 Kids' :
        employeeSpouseKidsCalc(value);
        return;
      case 'Employee, Spouse, 2 Kids & Parents' :
        employeeSpouseKidsParentsCalc(value);
        return;
    }
  };

  return (
    <Box>
      <FormTitle
        step={'3'}
        title={isFirstTime ? 'Coverage & details of employees' : 'Tell us about your existing policy'}
      />
      {isFirstTime
        ? <Box>
          <Box mb={5}>
            <FormControl
              required={true}
              error={!!errors.coverageType}
              onChange={handleChange}
              sx={styles.checkboxControl}
            >
              <Box mb={3}>
                <Typography className={'overline'} variant={'h4'}>Select coverage type & enter details</Typography>
              </Box>
              <RadioGroup name="coverageType" value={values.coverageType}>
                <FormControlLabel
                  className={'start'}
                  sx={styles.checkbox}
                  value="Employee only"
                  control={<Radio />}
                  label={
                    <Box>
                      <Typography>Employee only</Typography>
                      <Box sx={[styles.image, styles.employeeOnly]}>
                        <img src={employeeOnlyImg} alt="employeeSpouse" />
                      </Box>
                    </Box>
                  } />
                <FormControlLabel
                  className={'start'}
                  sx={styles.checkbox}
                  value="Employee, Spouse & 2 Kids"
                  control={<Radio />}
                  label={
                    <Box>
                      <Typography>Employee, Spouse & 2 Kids</Typography>
                      <Box sx={[styles.image, styles.employeeSpouse]}>
                        <img src={employeeSpouseImg} alt="employeeSpouse" />
                      </Box>
                    </Box>
                  } />
                <FormControlLabel
                  className={'start'}
                  sx={styles.checkbox}
                  value="Employee, Spouse, 2 Kids & Parents"
                  control={<Radio />}
                  label={
                    <Box>
                      <Typography>Employee, Spouse, 2 Kids & Parents</Typography>
                      <Box sx={[styles.image, styles.employeeParent]}>
                        <img src={employeeParentImg} alt="employeeSpouse" />
                      </Box>
                    </Box>
                  } />
              </RadioGroup>
              {errors.coverageType && <FormHelperText>{errors.coverageType}</FormHelperText>}
            </FormControl>
          </Box>
          {values.coverageType && (
            <Box width={380} maxWidth={'100%'}>
              <Box mb={5}>
                <TextField
                  label={values.coverageType === 'Employee only'
                    ? 'Total number of employees'
                    : 'Total number of Lives'
                  }
                  name="totalNumberOfEmployees"
                  type={'number'}
                  color={'secondary'}
                  value={values.totalNumberOfEmployees || ''}
                  fullWidth
                  required
                  error={!!errors.totalNumberOfEmployees}
                  helperText={errors.totalNumberOfEmployees ? errors.totalNumberOfEmployees : ''}
                  onChange={handleTotalNumberOfLives}
                  onFocus={() => setFieldError('totalNumberOfEmployees', '')}
                />
              </Box>
              <Box mb={5}>
                <Box mb={3}>
                  <Typography className={'overline'}>Edit Employee Count</Typography>
                </Box>
                <Box sx={styles.gridOfInputs}>
                  <TextField
                    label="19-35 years"
                    name="employeeCount35"
                    type={'text'}
                    color={'secondary'}
                    value={values.employeeCount35 || ''}
                    fullWidth
                    onChange={handleChange}
                  />
                  <TextField
                    label="36-45 years"
                    name="employeeCount45"
                    type={'text'}
                    color={'secondary'}
                    value={values.employeeCount45 || ''}
                    fullWidth
                    onChange={handleChange}
                  />
                  <TextField
                    label="46-55 years"
                    name="employeeCount55"
                    type={'text'}
                    color={'secondary'}
                    value={values.employeeCount55 || ''}
                    fullWidth
                    onChange={handleChange}
                  />
                  <TextField
                    label="56-65 years"
                    name="employeeCount65"
                    type={'text'}
                    color={'secondary'}
                    value={values.employeeCount65 || ''}
                    fullWidth
                    onChange={handleChange}
                  />
                </Box>
              </Box>
              {values.coverageType !== 'Employee only' && (
                <Box mb={5}>
                  <Box mb={3}>
                    <Typography className={'overline'} variant={'h4'}>Edit Spouse Count</Typography>
                  </Box>
                  <Box sx={styles.gridOfInputs} mb={5}>
                    <TextField
                      label="19-35 years"
                      name="spouseCount35"
                      type={'text'}
                      color={'secondary'}
                      value={values.spouseCount35 || ''}
                      fullWidth
                      onChange={handleChange}
                    />
                    <TextField
                      label="36-45 years"
                      name="spouseCount45"
                      type={'text'}
                      color={'secondary'}
                      value={values.spouseCount45 || ''}
                      fullWidth
                      onChange={handleChange}
                    />
                    <TextField
                      label="46-55 years"
                      name="spouseCount55"
                      type={'text'}
                      color={'secondary'}
                      value={values.spouseCount55 || ''}
                      fullWidth
                      onChange={handleChange}
                    />
                    <TextField
                      label="56-65 years"
                      name="spouseCount65"
                      type={'text'}
                      color={'secondary'}
                      value={values.spouseCount65 || ''}
                      fullWidth
                      onChange={handleChange}
                    />
                  </Box>
                  {values.coverageType === 'Employee, Spouse, 2 Kids & Parents' && (
                    <Box mb={5}>
                      <Box mb={3}>
                        <Typography className={'overline'} variant={'h4'}>Edit Parents Count</Typography>
                      </Box>
                      <Box sx={styles.gridOfInputs}>
                        <TextField
                          label="36-45 years"
                          name="parentsCount45"
                          type={'text'}
                          color={'secondary'}
                          value={values.parentsCount45 || ''}
                          fullWidth
                          onChange={handleChange}
                        />
                        <TextField
                          label="46-55 years"
                          name="parentsCount55"
                          type={'text'}
                          color={'secondary'}
                          value={values.parentsCount55 || ''}
                          fullWidth
                          onChange={handleChange}
                        />
                        <TextField
                          label="56-65 years"
                          name="parentsCount65"
                          type={'text'}
                          color={'secondary'}
                          value={values.parentsCount65 || ''}
                          fullWidth
                          onChange={handleChange}
                        />
                        <TextField
                          label="66+ years"
                          name="parentsCount66"
                          type={'text'}
                          color={'secondary'}
                          value={values.parentsCount66 || ''}
                          fullWidth
                          onChange={handleChange}
                        />
                      </Box>
                    </Box>
                  )}
                  <Box mb={8}>
                    <Box mb={3}>
                      <Typography className={'overline'} variant={'h4'}>Edit Kids Count</Typography>
                    </Box>
                    <TextField
                      label="Total Kids"
                      name="totalKids"
                      type={'text'}
                      color={'secondary'}
                      value={values.totalKids || ''}
                      fullWidth
                      onChange={handleChange}
                    />
                  </Box>
                </Box>
              )}
            </Box>
          )}
        </Box>
        : <Box width={380} maxWidth={'100%'} mb={5}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Choose Expiry Date"
              name={'expiryDate'}
              value={values.expiryDate || ''}
              onChange={(newValue) => {
                setFieldValue('expiryDate', newValue);
              }}
              renderInput={(params) => <TextField
                {...params}
                fullWidth
                color={'secondary'}
                required
                error={!!errors.expiryDate}
                helperText={errors.expiryDate ? errors.expiryDate : ''}
                onFocus={() => setFieldError('expiryDate', '')}
              />}
            />
          </LocalizationProvider>
        </Box>
      }
    </Box>
  );
};

export default StepThree;
