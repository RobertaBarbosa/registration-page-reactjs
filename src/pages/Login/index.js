import React from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import schema from './schema'
import './styles.css'

import { MdEmail, MdPerson, MdLock } from 'react-icons/md'

const Login = () => {
  function onSubmit(values, actions) {
    console.log('SUBMIT', values)
    actions.resetForm({
      values: { name: '', lastName: '', email: '', password: '' } //limpar os campos
    })
  }

  function validateEmail(value) {
    let error
    if (!value) {
      error = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address'
    }
    return error
  }

  return (
    <div className="login">
      <div className="box-text">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>

      <div className="box">
        <div className="box-top">
          <p>
            <b>Try free 7 days</b> then $20/mo. thereafter
          </p>
        </div>

        <Formik
          validationSchema={schema} //validação do yup schema
          onSubmit={onSubmit}
          validateOnMount //validação
          initialValues={{
            name: '',
            lastName: '',
            email: '',
            password: ''
          }}
          render={(values, touched, isValid) => (
            <Form>
              <div className="box-form">
                <div className="loginName">
                  <MdPerson />
                  <Field name="name" type="text" placeholder="First Name" />
                  <ErrorMessage
                    className="formError"
                    component="span"
                    name="name"
                  ></ErrorMessage>
                </div>

                <div className="loginLastName">
                  <MdPerson />
                  <Field name="lastName" type="text" placeholder="Last Name" />
                  <ErrorMessage
                    className="formError"
                    component="span"
                    name="lastName"
                  ></ErrorMessage>
                </div>

                <div className="loginEmail">
                  <MdEmail />
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    validate={validateEmail}
                  />
                  <ErrorMessage
                    className="formError"
                    component="span"
                    name="email"
                  ></ErrorMessage>
                </div>

                <div className="loginPassword">
                  <MdLock />
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    className="formError"
                    component="span"
                    name="password"
                  ></ErrorMessage>
                </div>

                <button type="submit" disabled={isValid}>
                  CLAIM YOUR FREE TRIAL
                </button>

                <p>
                  By clicking the button, you are agreeing to our{' '}
                  <a target="_blank" href="#">
                    Terms and Services
                  </a>
                </p>
              </div>
            </Form>
          )}
        ></Formik>
      </div>
    </div>
  )
}

export default Login
