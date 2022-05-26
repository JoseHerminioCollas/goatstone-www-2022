import React from "react";
import { setIn } from "final-form";
import { Form, Field } from "react-final-form";
import * as Yup from "yup";
import {
  IconButton,
} from '@fluentui/react';
import './contact-form.css'

const schema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  message: Yup.string().required("Required")
});
const validate = async (values) => {
  try {
    await schema.validate(values, { abortEarly: false });
  } catch (err) {
    const errors = err.inner.reduce((formError, innerError) => {
      return setIn(formError, innerError.path, innerError.message);
    }, {});
    return errors;
  }
};
const sendMailStyles = {
  root: {
    marginLeft: 'auto',
    marginTop: '1em',
    marginRight: '3em',
    background: 'none',
    color: 'green'
  },
  icon: {
    fontSize: '3em',
    background: 'none'

  },
  rootHovered: {
    background: 'none',
    color: 'red'
  },
};
function ContactForm() {
  const sendIcon = { iconName: 'send' };

  return (
    <Form
      onSubmit={() => { }}
      validate={validate}
      render={({ handleSubmit, form, submitting, pristine, values, errors, ...rest }) => (
        <form action='http://localhost:3001/mail' method='POST'  >
          <Field name="name">
            {({ input, meta }) => (
              <div>
                <label>Name</label>
                <input {...input} type="text" name="name" />
                <div className="error">
                  {meta.error && meta.touched && meta.error}
                </div>
              </div>
            )}
          </Field>
          <Field name="email">
            {({ input, meta }) => (
              <div>
                <label>Email</label>
                <input {...input} type="text" name="email" />
                <div className="error">
                  {meta.error && meta.touched && meta.error}
                </div>
              </div>
            )}
          </Field>
          <Field name="message">
            {({ input, meta }) => (
              <div>
                <label>Message</label>
                <textarea {...input} type="text" name="message" >
                </textarea>
                <div className="error">
                  {meta.error && meta.touched && meta.error}
                </div>
              </div>
            )}
          </Field>
          <IconButton
            name="Submit"
            disabled={pristine || Object.values(errors).length > 0}
            styles={sendMailStyles}
            iconProps={sendIcon}
            ariaLabel="Send Email"
            onClick={() => console.log('submit')}
            type="submit"
          />
        </form>
      )}
    />
  );
}

export default ContactForm;
