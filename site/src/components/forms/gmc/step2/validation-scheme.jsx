import * as Yup from 'yup';

const GMCSchemaStepTwo = Yup.object().shape({
  firstTime: Yup.string()
    .required('Please select one'),
  sumInsuredType: Yup.string().when('firstTime', {
    is: true,
    then: schema => schema.required('Please select one'),
  }),
  locationUSA: Yup.array().required('Choose a states'),
});

export default GMCSchemaStepTwo;