import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function Login({ statedisplay, setStatedisplay }) {
  const [loginMessage, setLoginMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.get('https://dummyjson.com/users');
        const user = response.data.users.find(
          (user) => user.email === values.email && user.password === values.password
        );
        if (user) {
          setLoginMessage('Success :)');
          setIsSuccess(true);
          console.log('User found:', user);
        } else {
          setLoginMessage('invalid email or password');
          setIsSuccess(false);
        }
      } catch (error) {
        console.error('Error during login:', error);
        setLoginMessage('Error during login. Please try again later.');
        setIsSuccess(false);
      }
    },
  });

  const handleCancel = () => {
    setStatedisplay('none');
  };

  return (
    <div className="modalwindow" style={{ display: statedisplay }}>
      <h2>Login</h2>
      {loginMessage && (
        <div style={{ color: isSuccess ? 'green' : 'red' }}>{loginMessage}</div>
      )}
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          {...formik.getFieldProps('email')}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          {...formik.getFieldProps('password')}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <div className="buttons">
          <button className="cancelButton" type="button" onClick={handleCancel}>
            Cancel
          </button>
          <button className="loginButton" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
