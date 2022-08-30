import * as Yup from 'yup';

export const emailRegex = /((?:[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*(?:[\w\!\#$\%\'\*\+\-\/\=\?\^\`{\|\}\~]|&amp;)+)@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,63})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)/i;

const GMCSchemaStepOne = Yup.object().shape({
  company: Yup.string()
    .min(3, 'Please enter the full company name')
    .max(200, 'Please enter a name less than 200')
    .required('Please enter the full company name'),
  phone: Yup.string()
    .min(10, 'Please enter 10 digit mobile no')
    .max(10, 'Please enter 10 digit mobile no')
    .required('Please enter 10 digit mobile no'),
  email: Yup.string()
    .email('Please enter the valid email')
    .matches(emailRegex, 'Please enter the valid email')
    .required('Email id is required'),
  location: Yup.string().required('Tell us where you are located'),
  employees: Yup.string().required('Please select one option'),
});

export default GMCSchemaStepOne;