import React from "react"
import {
  Autocomplete,
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select, TextField,
  Typography
} from "@mui/material"
import theme from "../../../../styles/theme/theme.const"
import FormTitle from "../title"
import yesImg from "../../../../assets/images/fresh-policy-icon.svg"
import noImg from "../../../../assets/images/renewal-policy-icon.svg"
import flatImg from "../../../../assets/images/flat-icon.svg"
import gradedImg from "../../../../assets/images/graded-icon.svg"
import tryCalcImg from "../../../../assets/images/notSure.svg"
import easyConvenientImg from "../../../../assets/images/easy-convenient.svg"
import GMCRightColumn from "../right-column"
import sumInsuredList from "../../../../constants/sum-insured.const"
import { locationsUSA } from "../../../../constants/locations-usa.const"

const styles = {
  checkboxControl: {
    width: "100%"
  },
  checkbox: {
    position: "relative",
    padding: 4,
    border: `1px solid ${theme.palette.grey["400"]}`,
    borderRadius: 4,
    margin: "0 0 16px 0",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    color: theme.palette.primary.dark,

    "&.start.MuiFormControlLabel-root": {
      alignItems: "flex-start"
    },

    "& h4": {
      color: theme.palette.grey["500"]
    },

    "& .MuiRadio-root": {
      padding: 0
    }
  },

  tryCalc: {
    border: `1px solid ${theme.palette.primary.main}`,
    padding: "19px 0 19px 60px",
    borderRadius: 4,
    backgroundImage: `url(${tryCalcImg})`,
    backgroundColor: theme.palette.grey["200"],
    backgroundRepeat: "no-repeat",
    backgroundPosition: "10px 12px"
  },

  tryButton: {
    color: theme.palette.primary.main,
    cursor: "pointer",
    width: "max-content",
    marginRight: 8
  }
};

const StepTwo = ({ handleDialogOpen, errors, values, handleChange, setFieldValue, setFieldError }) => {

  const getLocation = (location) => typeof location === "object" ? `${location.name} (${location.state})` : location

  return (
    <Box>
      <FormTitle step={"2"} title={"Buying Group Health Insurance for the first time?"} />
      <Box display={"flex"} flexDirection={{ xs: "column", lg: "row" }} justifyContent={{ lg: "space-between" }}>
        <Box width={380} maxWidth={"100%"}>
          <Box mb={5}>
            <FormControl
              required={true}
              error={!!errors.firstTime}
              onChange={handleChange}
              sx={styles.checkboxControl}
            >
              <RadioGroup name="firstTime" value={values.firstTime}>
                <FormControlLabel sx={styles.checkbox} value="Yes" control={<Radio />} label={
                  <Box display={"flex"} alignItems={"center"}>
                    <img src={yesImg} alt="YES" />
                    <Box ml={4}>
                      <Typography>Yes</Typography>
                      <Typography variant={"h4"}>Buying for the first time</Typography>
                    </Box>
                  </Box>
                } />
                <FormControlLabel sx={styles.checkbox} value="No" control={<Radio />} label={
                  <Box display={"flex"} alignItems={"center"}>
                    <img src={noImg} alt="YES" />
                    <Box ml={4}>
                      <Typography>No</Typography>
                      <Typography variant={"h4"}>Existing policy is expiring</Typography>
                    </Box>
                  </Box>
                } />
              </RadioGroup>
              {errors.firstTime && <FormHelperText>{errors.firstTime}</FormHelperText>}
            </FormControl>
          </Box>
          <Box mb={8}>
            <Box mb={3}>
              <Typography>Select states</Typography>
            </Box>
            <Autocomplete
              multiple
              id="locationUSA"
              options={locationsUSA}
              getOptionLabel={getLocation}
              onChange={(e, value) => {
                const updatedValues = value.map(getLocation)
                setFieldValue("locationUSA", updatedValues)
              }}
              onFocus={() => setFieldError("locationUSA", "")}
              name={"locationUSA"}
              value={values.locationUSA || []}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Locations"
                />
              )}
            />
          </Box>
          {values.firstTime === "Yes" && (
            <Box>
              <Box mb={5}>
                <FormControl
                  required={true}
                  error={!!errors.sumInsuredType}
                  onChange={handleChange}
                  sx={styles.checkboxControl}
                >
                  <Box mb={3}>
                    <Typography className={"subtitle"}>Select Sum Insured Type</Typography>
                  </Box>
                  <RadioGroup name="sumInsuredType" value={values.sumInsuredType}>
                    <FormControlLabel
                      className={"start"}
                      sx={styles.checkbox}
                      value="Flat"
                      control={<Radio />}
                      label={
                        <Box display={"flex"} alignItems={"center"}>
                          <img src={flatImg} alt="Flat" />
                          <Box ml={4}>
                            <Typography>Flat</Typography>
                            <Typography variant={"h4"}>Common sum-insured for all members in the
                              policy</Typography>
                          </Box>
                        </Box>
                      } />
                    <FormControlLabel
                      className={"start"}
                      sx={styles.checkbox}
                      value="Graded"
                      control={<Radio />}
                      label={
                        <Box display={"flex"} alignItems={"center"}>
                          <img src={gradedImg} alt="Graded" />
                          <Box ml={4}>
                            <Typography>Graded</Typography>
                            <Typography variant={"h4"}>Different sum-insured for different members in the
                              policy</Typography>
                          </Box>
                        </Box>
                      } />
                  </RadioGroup>
                  {errors.sumInsuredType && <FormHelperText>{errors.sumInsuredType}</FormHelperText>}
                </FormControl>
              </Box>
              {values.sumInsuredType === "Flat" && (
                <Box mb={8}>
                  <Box mb={5}>
                    <Box mb={3}>
                      <Typography>How much sum insured do you want per employee?</Typography>
                    </Box>
                    <FormControl fullWidth>
                      <InputLabel id="sumInsured">Sum Insured</InputLabel>
                      <Select
                        labelId="sumInsured"
                        id="sumInsured"
                        label="Sum Insured"
                        name={"sumInsured"}
                        value={values.sumInsured || "1 Lac"}
                        onChange={handleChange}
                      >
                        {sumInsuredList.map((item) => (
                          <MenuItem key={item.id} value={item.value}>{item.value}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                  <Box sx={styles.tryCalc}>
                    <Typography color={theme.palette.primary.dark} variant={"body2"}>Not sure about the sum
                      insured?</Typography>
                    <Typography sx={styles.tryButton} variant={"body2"} onClick={handleDialogOpen}>Try
                      calculator ></Typography>
                  </Box>
                </Box>
              )}
            </Box>
          )}
        </Box>
        <GMCRightColumn
          imgUrl={easyConvenientImg}
          title={"Easy & Convenient"}
          text={"You get expert advice, purchase assistance, & a dedicated group health insurance app."}
        />
      </Box>
    </Box>
  )
}

export default StepTwo