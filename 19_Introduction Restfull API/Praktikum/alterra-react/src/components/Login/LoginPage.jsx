// Login.js
import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './LoginPage.css';
import { Link, useNavigate, Navigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const formik = useFormik({
    initialValues: {
        email: '',
        password: '',
    },
    validationSchema: Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    }),
    onSubmit: (values) => {
        console.log(values);

        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

        const user = registeredUsers.find(
            (user) => user.email === values.email && user.password === values.password
        );

        if (user) {
            localStorage.setItem('isLoggedIn', 'true'); 
            alert('Login successful');
            console.log('User:', user);
            navigate('/createproduct'); 
        } else {
            alert('Login failed. Invalid email or password.');
        }
    },
    });

    return (
    <div className="container">
        <div className="row justify-content-center">
        <div className="col-md-7">
            <div className="login-title">
                <h1>Login</h1>
            </div>
            <form onSubmit={formik.handleSubmit}>
            <div className="form-group mb-3">
                <label htmlFor="email" className="mb-1">
                Email
                </label>
                <input
                type="email"
                id="email"
                name="email"
                className={`form-control ${
                    formik.touched.email && formik.errors.email
                    ? 'is-invalid'
                    : formik.touched.email
                    ? 'border-success'
                    : ''
                }`}
                {...formik.getFieldProps('email')}
                autoComplete="email;"
                />
                {formik.touched.email && formik.errors.email && (
                    <div className="invalid-feedback">{formik.errors.email}</div>
                )}
            </div>
            <div className="form-group mb-3">
                <label htmlFor="password" className="mb-1">
                Password
                </label>
                <input
                type="password"
                id="password"
                name="password"
                className={`form-control ${
                    formik.touched.password && formik.errors.password
                    ? 'is-invalid'
                    : formik.touched.password
                    ? 'border-success'
                    : ''
                }`}
                {...formik.getFieldProps('password')}
                autoComplete="current-password"
                />
                {formik.touched.password && formik.errors.password && (
                    <div className="invalid-feedback">{formik.errors.password}</div>
                )}
            </div>
            <div className="d-grid gap-3 d-md-flex">
                <button type="submit" className="btn btn-primary btn-block">
                    Login
                </button>

                <Link
                    type="button"
                    to={`/register`}
                    className="btn btn-secondary btn-block "
                >
                    Back to Register
                </Link>
            </div>
            </form>
        </div>
        </div>
    </div>
    );
};

export default LoginPage;
