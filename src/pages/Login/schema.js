//SCHEMA DO YUP PARA A VALIDAÇÃO DOS CAMPOS

import * as Yup from 'yup'

export default Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Enter a valid name'),
  lastName: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Enter a valid last name'),
  email: Yup.string().email('Invalid email').required('Enter a valid email'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Enter a valid password')
})
