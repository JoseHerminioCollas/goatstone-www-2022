import React from "react";
import { setIn } from "final-form";
import { Form, Field } from "react-final-form";
import * as Yup from "yup";
import { TextField } from '@fluentui/react/lib/TextField';
import  './contact-form.css'

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

function ContactForm() {
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
                <input {...input} type="text" placeholder="name" name="name" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="email">
            {({ input, meta }) => (
              <div>
                <label>Email</label>
                <input {...input} type="text" placeholder="email" name="email" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="message">
            {({ input, meta }) => (
              <div>
                <label>Message</label>
                {/* <TextField {...input} name="message" label="Standard" errorMessage="" /> */}
                <input {...input} type="text" placeholder="message" name="message" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <button
            disabled={pristine || Object.values(errors).length > 0}
            type="submit">
            submit
          </button>
        </form>
      )}
    />
  );
}

export default ContactForm;
