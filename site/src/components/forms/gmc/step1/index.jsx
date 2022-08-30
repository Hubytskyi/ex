import React, { useEffect, useState } from "react"
import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Typography,
  TextField,
  Autocomplete,
  FormGroup,
  Switch
} from "@mui/material"
import FormTitle from "../title"
import theme from "../../../../styles/theme/theme.const"
import { locations } from "../../../../constants/locations.const"
import whatsAppImg from "../../../../assets/images/whatsapp.svg"
import affordablePremiumsImg from "../../../../assets/images/affordable-premiums.svg"
import GMCRightColumn from "../right-column"
import CircularProgress from "@mui/material/CircularProgress"
import zipData from "../../../../data/USCities.json"

const styles = {
  employees: {
    flexDirection: "row!important"
  },

  whatsappImg: {
    marginRight: 8
  },

  checkboxGroup: {
    "& .MuiFormGroup-root": {
      flexDirection: "row"
    }
  },

  whatsapp: {
    justifyContent: "start"
  },

  checkbox: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "max-content",
    marginRight: 6,

    "& span:first-child": {
      padding: "8px 16px",
      borderRadius: 4,
      backgroundColor: theme.palette.common.white,
      border: `1px solid ${theme.palette.grey["400"]}`,
      width: 80,
      height: 33,
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      "&.Mui-checked": {
        backgroundColor: theme.palette.primary.main,

        "& + span": {
          color: theme.palette.common.white
        }
      },

      "& span": {
        display: "none"
      }
    },
    "& span:last-child": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      whiteSpace: "nowrap"
    }
  },

  zipLoading: {
    position: "absolute",
    right: 20,
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex"
  }
};

const StepOne = ({ errors, values, handleChange, setFieldValue, setFieldError }) => {

  const [zipLoading, setZipLoading] = useState(false)

  const handlePhone = (event) => {
    const { value } = event.target
    if (value.length <= 10 && value.charAt(0) === "9" && Number.isInteger(+value)) {
      setFieldValue("phone", value)
    } else if (value === "") {
      setFieldValue("phone", value)
    }
  }

  const clearZipInputs = () => {
    setFieldValue("city", "")
    setFieldValue("state", "")
    setFieldValue("county", "")
    setZipLoading(false)
  }

  const searchZip = () => {
    if (values.zip.length >= 3 && values.zip.length <= 5) {
      setZipLoading(true)

      const filteredZip = zipData.filter((el) => el.zip_code === +values.zip);

      if (!filteredZip.length) {
        setFieldError("zip", "Zip not found.")
        clearZipInputs()
        return;
      }

      setFieldValue('city', filteredZip[0].city)
      setFieldValue('state', filteredZip[0].state)
      setFieldValue('county', filteredZip[0].county)
      setFieldError('zip', '')
      setZipLoading(false)
      return;
    }

    clearZipInputs()
  }

  useEffect(() => {
    searchZip()
  }, [values.zip])

  return (
    <Box position={"relative"}>
      <FormTitle step={"1"} title={"Tell us about your Company "} />
      <Box display={"flex"} flexDirection={{ xs: "column", lg: "row" }} justifyContent={{ lg: "space-between" }}>
        <Box width={380} maxWidth={"100%"}>
          <Box mb={5}>
            <TextField
              label="Company Name"
              name="company"
              type={"text"}
              color={"secondary"}
              value={values.company || ""}
              fullWidth
              required
              error={!!errors.company}
              helperText={errors.company ? errors.company : ""}
              onChange={handleChange}
              onFocus={() => setFieldError("company", "")}
            />
          </Box>
          <Box mb={5}>
            <TextField
              label="Mobile No."
              name="phone"
              type={"text"}
              color={"secondary"}
              value={values.phone || ""}
              fullWidth
              required
              error={!!errors.phone}
              helperText={errors.phone ? errors.phone : ""}
              onChange={handlePhone}
              onFocus={() => setFieldError("phone", "")}
            />
          </Box>
          <Box mb={5}>
            <TextField
              label="Email ID"
              name="email"
              type={"email"}
              color={"secondary"}
              value={values.email || ""}
              fullWidth
              required
              error={!!errors.email}
              helperText={errors.email ? errors.email : ""}
              onChange={handleChange}
              onFocus={() => setFieldError("email", "")}
            />
          </Box>


          <Box mb={5} position={"relative"}>
            <TextField
              label="ZIP"
              name="zip"
              type={"text"}
              color={"secondary"}
              value={values.zip || ""}
              fullWidth
              required
              placeholder={"XXXXX"}
              error={!!errors.zip}
              helperText={errors.zip ? errors.zip : ""}
              onChange={(event) => {
                const { value } = event.target
                setFieldValue("zip", value.replace(/[^\d{5}]$/, "").substr(0, 5))
              }}
              onFocus={() => setFieldError("zip", "")}
            />
            <Box sx={styles.zipLoading}>
              {zipLoading && <CircularProgress size={20} />}
            </Box>
          </Box>
          <Box mb={5}>
            <TextField
              label="County"
              name="county"
              type={"text"}
              color={"secondary"}
              value={values.county || ""}
              fullWidth
              disabled
            />
          </Box>
          <Box mb={5}>
            <TextField
              label="State"
              name="state"
              type={"text"}
              color={"secondary"}
              value={values.state || ""}
              fullWidth
              disabled
            />
          </Box>
          <Box mb={5}>
            <TextField
              label="City"
              name="city"
              type={"text"}
              color={"secondary"}
              value={values.city || ""}
              fullWidth
              disabled
            />
          </Box>


          <Box mb={5}>
            <Autocomplete
              id="location"
              fullWidth
              freeSolo
              onChange={(e, value) => setFieldValue("location", value)}
              autoComplete={false}
              onFocus={() => setFieldError("location", "")}
              name={"location"}
              value={values.location || ""}
              disableClearable={true}
              options={locations.map((option) => `${option.name} (${option.state})`)}
              renderInput={(params) => {
                return (
                  <TextField
                    label="Locations"
                    type={"text"}
                    color={"secondary"}
                    fullWidth
                    required
                    {...params}
                    error={!!errors.location}
                    helperText={errors.location ? errors.location : ""}
                  />
                )
              }}
            />
          </Box>
          <Box mb={5}>
            <FormControl
              required={true}
              error={!!errors.employees}
              onChange={handleChange}
              sx={styles.checkboxGroup}
            >
              <Box mb={3}>
                <Typography>Select No. of Employees in your organisation</Typography>
              </Box>
              <RadioGroup name="employees" value={values.employees}>
                <FormControlLabel sx={styles.checkbox} value="7-50" control={<Radio />} label={
                  <Typography variant={"caption"}>7-50</Typography>
                } />
                <FormControlLabel sx={styles.checkbox} value="51-200" control={<Radio />} label={
                  <Typography variant={"caption"}>51-200</Typography>
                } />
                <FormControlLabel sx={styles.checkbox} value="200+" control={<Radio />} label={
                  <Typography variant={"caption"}>200+</Typography>
                } />
              </RadioGroup>
              {errors.employees && <FormHelperText>{errors.employees}</FormHelperText>}
            </FormControl>
          </Box>
          <Box mb={5}>
            <FormGroup>
              <FormControlLabel
                labelPlacement="start"
                name="whatsapp"
                color={"secondary"}
                value={values.whatsapp || false}
                control={<Switch defaultChecked />}
                sx={styles.whatsapp}
                label={
                  <Box display={"flex"} alignItems={"center"}>
                    <img style={styles.whatsappImg} src={whatsAppImg} alt="whatsApp" />
                    <Typography variant={"body2"}>Get WhatsApp updates</Typography>
                  </Box>
                } />
            </FormGroup>
          </Box>
        </Box>
        <GMCRightColumn
          imgUrl={affordablePremiumsImg}
          title={"Affordable Premiums"}
          text={"Compared to offline insurance, we offer higher coverage at a lower premium"}
        />
      </Box>
    </Box>
  )
}

export default StepOne