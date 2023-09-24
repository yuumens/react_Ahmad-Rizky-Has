import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const loginPage = ()=>{
        navigate('/login')
    }

    const formik = useFormik({
        initialValues: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    },
    validationSchema: Yup.object({
        firstName: Yup.string().min(3, 'First Name must be at least 3 characters').required('First Name is required'),
        lastName: Yup.string().min(3, 'Last Name must be at least 3 characters').required('Last Name is required'),
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: (values) => {
        console.log(values);

        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        registeredUsers.push(values);
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
        
        alert('Successfully Registered');
    },
});

return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-7">
            <form onSubmit={formik.handleSubmit}>
                <h1>Register</h1>
            <div className="form-group mb-3">
                <label htmlFor="firstName" className="mb-1">First Name</label>
                <input
                type="text"
                id="firstName"
                name="firstName"
                className={`form-control ${
                    formik.touched.firstName && formik.errors.firstName
                        ? 'is-invalid'
                        : formik.touched.firstName
                        ? 'border-success'
                        : ''
                    }`}
                {...formik.getFieldProps('firstName')}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                <div className="invalid-feedback">{formik.errors.firstName}</div>
                )}
            </div>
            <div className="form-group mb-3">
                <label htmlFor="lastName" className="mb-1">Last Name</label>
                <input
                type="text"
                id="lastName"
                name="lastName"
                className={`form-control ${
                    formik.touched.lastName && formik.errors.lastName
                        ? 'is-invalid'
                        : formik.touched.lastName
                        ? 'border-success'
                        : ''
                    }`}
                {...formik.getFieldProps('lastName')}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                <div className="invalid-feedback">{formik.errors.lastName}</div>
                )}
            </div>
            <div className="form-group">
                <label htmlFor="username" className="mb-1">Username</label>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="addon-wrapping">@</span>
                    <input
                    type="text"
                    id="username"
                    name="username"
                    className={`form-control rounded-end ${
                        formik.touched.username && formik.errors.username
                            ? 'is-invalid'
                            : formik.touched.username
                            ? 'border-success'
                            : ''
                        }`}
                    {...formik.getFieldProps('username')}
                    
                    />
                    {formik.touched.username && formik.errors.username && (
                    <div className="invalid-feedback">{formik.errors.username}</div>
                    )}
                </div>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="email" className="mb-1">Email</label>
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
                />
                {formik.touched.email && formik.errors.email && (
                <div className="invalid-feedback">{formik.errors.email}</div>
                )}
            </div>
            <div className="form-group mb-3">
                <label htmlFor="password" className="mb-1">Password</label>
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
                autoComplete="new-password"
                />
                {formik.touched.password && formik.errors.password && (
                <div className="invalid-feedback">{formik.errors.password}</div>
                )}
            </div>
            <div className="form-group mb-4">
                <label htmlFor="confirmPassword" className="mb-1">Confirm Password</label>
                <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={`form-control ${
                    (formik.touched.confirmPassword && formik.errors.confirmPassword) ||
                    (formik.touched.password &&
                        formik.touched.confirmPassword &&
                        formik.values.password !== formik.values.confirmPassword)
                        ? 'is-invalid'
                        : formik.touched.confirmPassword
                        ? 'border-success'
                        : ''
                    }`}
                {...formik.getFieldProps('confirmPassword')}
                autoComplete="new-password"
                />
                {formik.touched.confirmPassword && !formik.errors.confirmPassword && (
                <div className="text-success fs-6">Password confirmed successfully</div>
                )}
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <div className="invalid-feedback">{formik.errors.confirmPassword}</div>
                )}
            </div>
            <div className="d-grid gap-3 d-md-flex">
                <button type="submit" className="btn btn-primary btn-block" onSubmit={loginPage}>
                    Register
                </button>

                <Link
                    type="button"
                    to={`/login`}
                    className="btn btn-secondary btn-block "
                >
                    Login
                </Link>
            </div>
            </form>
            </div>
        </div>
    </div>
    );
};

export default Register;
