import * as React from 'react';
import { Formik, Form } from 'formik';
import { useRegisterMutation } from '../generated/graphql';
import { RouteComponentProps } from 'react-router-dom';
import { validationSchema } from '../utils/validationSchema';
import { FormTextField } from '../components/fields/FormTextField';
import { History } from 'history';

interface RegisterProps {
  history: History;
}

export const Register: React.FC<RegisterProps & RouteComponentProps> = ({
  history,
}: RegisterProps) => {
  const [register] = useRegisterMutation();

  return (
    <div>
      <div>
        <h1>Register Form</h1>
      </div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (
          { name, email, password },
          { setSubmitting, resetForm }
        ) => {
          setSubmitting(true);

          const response = await register({
            variables: {
              name,
              email,
              password,
            },
          });

          console.log('TCL: response: ', response);
          resetForm();
          setSubmitting(false);
          history.push('/');
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form className="form" onSubmit={handleSubmit}>
            <div className="input-row">
              <FormTextField placeholder="Name" name="name" type="text" />
            </div>
            <div className="input-row">
              <FormTextField placeholder="Email" name="email" type="text" />
            </div>
            <div className="input-row">
              <FormTextField
                placeholder="Password"
                name="password"
                type="password"
              />
            </div>
            <div className="input-row">
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
