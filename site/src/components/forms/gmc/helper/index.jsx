import React, { memo } from "react"
import { Box, TextField } from "@mui/material"

const GMCHelper = ({ values }) => (
  <Box display={"none"} opacity={0} visibility={"hidden"} zIndex={-42}>
    <TextField
      name="company"
      value={values.company || ""}
    />
    <TextField
      name="phone"
      value={values.phone || ""}
    />
    <TextField
      name="email"
      value={values.email || ""}
    />
    <TextField
      name="location"
      value={values.location || ""}
    />
    <TextField
      name="employees"
      value={values.employees || ""}
    />
    <TextField
      name="whatsapp"
      value={values.whatsapp || true}
    />
    <TextField
      name="firstTime"
      value={values.firstTime || ""}
    />
    <TextField
      name="sumInsuredType"
      value={values.sumInsuredType || ""}
    />
    <TextField
      name="locationUSA"
      value={values.locationUSA || ""}
    />
    <TextField
      name="sumInsured"
      value={values.sumInsured || "1 Lac"}
    />
    <TextField
      name="coverageType"
      value={values.coverageType || ""}
    />
    <TextField
      name="totalNumberOfEmployees"
      value={values.totalNumberOfEmployees || ""}
    />
    <TextField
      name="employeeCount35"
      value={values.employeeCount35 || ""}
    />
    <TextField
      name="employeeCount45"
      value={values.employeeCount45 || ""}
    />
    <TextField
      name="employeeCount55"
      value={values.employeeCount55 || ""}
    />
    <TextField
      name="employeeCount65"
      value={values.employeeCount65 || ""}
    />
    <TextField
      name="spouseCount35"
      value={values.spouseCount35 || ""}
    />
    <TextField
      name="spouseCount45"
      value={values.spouseCount45 || ""}
    />
    <TextField
      name="spouseCount55"
      value={values.spouseCount55 || ""}
    />
    <TextField
      name="spouseCount65"
      value={values.spouseCount65 || ""}
    />
    <TextField
      name="parentsCount45"
      value={values.parentsCount45 || ""}
    />
    <TextField
      name="parentsCount55"
      value={values.parentsCount55 || ""}
    />
    <TextField
      name="parentsCount65"
      value={values.parentsCount65 || ""}
    />
    <TextField
      name="parentsCount66"
      value={values.parentsCount66 || ""}
    />
    <TextField
      name="totalKids"
      value={values.totalKids || ""}
    />
    <TextField
      name="expiryDate"
      value={values.expiryDate || ""}
    />
  </Box>
)

export default memo(GMCHelper)