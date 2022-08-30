import * as Yup from 'yup';

const GMCSchemaStepThree = Yup.object().shape({
  coverageType: Yup.mixed().when('firstTime', {
    is: 'Yes',
    then: Yup.string().required('Please select one')
  }),
  totalNumberOfEmployees: Yup.mixed().when('firstTime', {
    is: 'Yes',
    then: Yup.number()
      .min(7, 'Minimum employees should be 7')
      .max(99999, 'Maximum employees should be 99999')
      .required(),
  }),
  expiryDate: Yup.mixed().when('firstTime', {
    is: 'No',
    then: Yup.date().required('Please select Policy Expiry Date')
  }),
});

export default GMCSchemaStepThree;